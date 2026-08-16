import React, { useState, useRef, useEffect } from 'react';
import { SendHorizonal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIChatInputProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export const AIChatInput: React.FC<AIChatInputProps> = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative flex items-center p-3 border-t border-border bg-card"
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about Sairoop..."
        className={cn(
          "w-full max-h-[120px] resize-none rounded-xl border border-input bg-background pl-4 pr-12 py-3",
          "text-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring",
          "scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent"
        )}
        rows={1}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className={cn(
          "absolute right-5 bottom-[1.125rem] p-1.5 rounded-lg transition-colors",
          input.trim() && !disabled
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            : "bg-muted text-muted-foreground cursor-not-allowed"
        )}
        aria-label="Send message"
      >
        <SendHorizonal className="w-4 h-4" />
      </button>
    </form>
  );
};
