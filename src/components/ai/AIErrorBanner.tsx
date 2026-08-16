import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface AIErrorBannerProps {
  error: string;
}

export const AIErrorBanner: React.FC<AIErrorBannerProps> = ({ error }) => {
  if (!error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="m-3 flex items-start gap-3 rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20 shadow-sm"
    >
      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 leading-snug">
        <span className="font-medium">Error:</span> {error}
      </div>
    </motion.div>
  );
};
