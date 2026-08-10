import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to build something exceptional?",
  subtitle = "Whether you have a project in mind, a job opportunity, or just want to connect — I'd love to hear from you."
}) => {
  return (
    <Section className="bg-gradient-to-b from-muted/50 to-background">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {title}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors shadow-lg shadow-primary/20"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
