import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface AIChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChatMessage: React.FC<AIChatMessageProps> = ({ role, content }) => {
  const isUser = role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex w-full gap-3 py-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className={cn(
        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full border shadow-sm",
        isUser ? "bg-primary text-primary-foreground border-primary" : "bg-muted border-border"
      )}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className={cn(
        "flex flex-col gap-2 max-w-[80%]",
        isUser ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "rounded-2xl px-4 py-2.5 text-sm shadow-sm",
          isUser 
            ? "bg-primary text-primary-foreground rounded-tr-sm whitespace-pre-wrap"
            : "bg-muted text-foreground rounded-tl-sm"
        )}>
          {isUser ? (
            content
          ) : content ? (
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-base font-bold mt-3 mb-1 text-foreground">{children}</h1>,
                h2: ({ children }) => <h2 className="text-sm font-bold mt-2.5 mb-1 text-foreground">{children}</h2>,
                h3: ({ children }) => <h3 className="text-sm font-semibold mt-2 mb-0.5 text-foreground">{children}</h3>,
                p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-foreground">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1 text-foreground">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1 text-foreground">{children}</ol>,
                li: ({ children }) => <li className="mb-0.5">{children}</li>,
                a: ({ href, children }) => {
                  const isSafe = href && (href.startsWith('https://') || href.startsWith('http://') || href.startsWith('mailto:'));
                  if (!isSafe) {
                    return <span className="text-muted-foreground underline">{children}</span>;
                  }
                  const isEmail = href.startsWith('mailto:');
                  return (
                    <a
                      href={href}
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      className="text-primary underline hover:text-primary/80 transition-colors font-medium break-all"
                    >
                      {children}
                    </a>
                  );
                },
                code: ({ children }) => (
                  <code className="bg-background/50 px-1 py-0.5 rounded text-xs font-mono border text-foreground">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-background/50 p-2.5 rounded-lg overflow-x-auto text-xs font-mono border mb-2 max-w-full text-foreground">
                    {children}
                  </pre>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <span className="animate-pulse flex items-center h-4 gap-1">
              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
