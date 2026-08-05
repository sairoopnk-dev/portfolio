import React, { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  as: Component = 'section'
}) => {
  return (
    <Component id={id} className={cn('py-16 sm:py-20 lg:py-24 w-full', className)}>
      {children}
    </Component>
  );
};
