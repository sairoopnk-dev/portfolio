import React from 'react';
import { aiSuggestions } from '@/data/ai-suggestions';
import { motion } from 'framer-motion';

interface AISuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

export const AISuggestedQuestions: React.FC<AISuggestedQuestionsProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-lg text-foreground">Welcome to Sairoop AI ✨</h3>
        <p className="text-sm text-muted-foreground">
          I'm an AI assistant trained on Sairoop's portfolio. Ask me anything about his work, skills, or experience!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 w-full max-w-sm">
        {aiSuggestions.map((suggestion, idx) => (
          <motion.button
            key={suggestion}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelect(suggestion)}
            className="text-xs sm:text-sm bg-accent/50 hover:bg-accent text-accent-foreground border border-primary/20 px-3 py-2 rounded-full transition-colors text-left"
          >
            {suggestion}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
