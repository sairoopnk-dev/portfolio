import React from 'react';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="pt-28 pb-12 bg-muted/50 border-b border-border/80">
      <Container>
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};
