import React from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface AIFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const AIFloatingButton: React.FC<AIFloatingButtonProps> = ({ onClick, isOpen }) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={onClick}
          aria-label="Open Sairoop AI Chat"
          className={cn(
            "fixed bottom-6 right-4 md:bottom-24 md:right-6 z-40 p-4 rounded-full",
            "bg-primary text-primary-foreground shadow-lg hover:shadow-xl",
            "transition-all duration-300 hover:scale-105 group",
            "flex items-center justify-center"
          )}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-primary opacity-20 duration-1000" />
          
          <div className="relative flex items-center justify-center">
             <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
             <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
