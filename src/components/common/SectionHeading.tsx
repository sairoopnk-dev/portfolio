import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className
}) => {
  return (
    <div className={cn('space-y-3 mb-10 md:mb-12', align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl', className)}>
      {label && (
        <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
