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
    <Section className="bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <Container>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            {title}
          </h2>
          <p className="text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20"
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
