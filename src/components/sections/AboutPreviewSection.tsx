import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../common/SectionHeading';
import { personalData } from '@/data/personal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const AboutPreviewSection: React.FC = () => {
  return (
    <Section className="bg-muted/40 border-y border-border/80">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeading
            label="ABOUT ME"
            title="Engineering robust full-stack applications with an AI-first mindset"
            align="center"
          />

          <p className="text-base sm:text-lg text-muted-foreground text-center leading-relaxed">
            {personalData.bio[0]} {personalData.bio[1]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border">
            {personalData.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
