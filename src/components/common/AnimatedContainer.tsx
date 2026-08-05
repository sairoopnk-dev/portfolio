'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className,
  delay = 0
}) => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
