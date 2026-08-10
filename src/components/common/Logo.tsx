import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn('text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2', className)}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
      <span>{siteConfig.name}</span>
    </Link>
  );
};
