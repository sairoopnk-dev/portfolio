import React from 'react';
import { cn } from '@/lib/utils';

interface StackProps {
  children: React.ReactNode;
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
}

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  gap = 'md'
}) => {
  const gapClasses = {
    sm: 'space-y-3',
    md: 'space-y-5',
    lg: 'space-y-8'
  };

  return (
    <div className={cn('flex flex-col', gapClasses[gap], className)}>
      {children}
    </div>
  );
};
