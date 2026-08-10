import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  label: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  className,
  size = 'md'
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-mono text-xs font-medium bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 transition-colors',
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs',
        className
      )}
    >
      {label}
    </span>
  );
};
