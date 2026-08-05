'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  links: NavItem[];
  orientation?: 'horizontal' | 'vertical';
  onItemClick?: () => void;
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  links,
  orientation = 'horizontal',
  onItemClick,
  className
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col space-y-4' : 'flex-row items-center space-x-6',
        className
      )}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onItemClick}
            className={cn(
              'text-sm font-medium transition-colors hover:text-zinc-100 relative py-1',
              isActive ? 'text-zinc-100 font-semibold' : 'text-zinc-400'
            )}
          >
            {link.label}
            {isActive && orientation === 'horizontal' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
