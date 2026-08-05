import React, { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div'
}) => {
  return (
    <Component className={cn('mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full', className)}>
      {children}
    </Component>
  );
};
