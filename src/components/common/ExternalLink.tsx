import React from 'react';
import { ExternalLink as ExternalIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  showIcon = true,
  className
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium transition-colors', className)}
    >
      <span>{children}</span>
      {showIcon && <ExternalIcon className="w-3.5 h-3.5" />}
    </a>
  );
};
