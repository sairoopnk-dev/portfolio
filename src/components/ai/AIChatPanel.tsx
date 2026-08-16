'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AIChatInput } from './AIChatInput';
import { AIChatMessage } from './AIChatMessage';
import { AISuggestedQuestions } from './AISuggestedQuestions';
import { AIErrorBanner } from './AIErrorBanner';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SESSION_KEY = 'sairoop_ai_chat_history';

export const AIChatPanel: React.FC<AIChatPanelProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Load history from session storage on mount
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse session storage', e);
      }
    }
  }, []);

  // Save to session storage when messages change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setError(null);
    setIsStreaming(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to fetch AI response';
        try {
          const errData = await response.json();
          errorMsg = errData.error || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      if (!response.body) {
        throw new Error('ReadableStream not supported in this browser.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunkValue = decoder.decode(value, { stream: true });
          assistantContent += chunkValue;
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1].content = assistantContent;
            return copy;
          });
        }
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsStreaming(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    sessionStorage.removeItem(SESSION_KEY);
    setError(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Sairoop AI Chat"
            className={cn(
              "fixed z-50 flex flex-col overflow-hidden bg-card border shadow-2xl",
              // Mobile: Bottom sheet
              "bottom-0 left-0 right-0 h-[80vh] w-full rounded-t-2xl border-b-0",
              // Desktop: Floating panel
              "md:bottom-24 md:right-6 md:left-auto md:w-[400px] md:h-[550px] md:rounded-2xl md:border-b"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-3">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Bot className="w-5 h-5 text-primary" />
                Sairoop AI
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button 
                    onClick={clearHistory}
                    className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
              {messages.length === 0 ? (
                <AISuggestedQuestions onSelect={handleSend} />
              ) : (
                <div className="flex flex-col gap-1 pb-4">
                  {messages.map((msg, i) => (
                    <AIChatMessage key={i} role={msg.role} content={msg.content} />
                  ))}
                  <div ref={messagesEndRef} className="h-px w-full" />
                </div>
              )}
            </div>

            {/* Error Banner */}
            <AIErrorBanner error={error || ''} />

            {/* Input */}
            <AIChatInput onSend={handleSend} disabled={isStreaming} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
