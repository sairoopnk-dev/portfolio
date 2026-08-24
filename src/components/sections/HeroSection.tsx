import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { StatusBadge } from '../common/StatusBadge';
import { AnimatedContainer } from '../common/AnimatedContainer';
import { personalData } from '@/data/personal';
import { socialLinksData } from '@/data/social-links';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />
  };

  return (
    <Section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <AnimatedContainer delay={0}>
              <StatusBadge status={personalData.availability} />
            </AnimatedContainer>

            <AnimatedContainer delay={0.1} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                Hi, I'm <span className="text-primary">{personalData.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                {personalData.role}
              </p>
            </AnimatedContainer>

            <AnimatedContainer delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {personalData.tagline}
              </p>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3} className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors shadow-lg shadow-primary/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium text-sm border border-border transition-colors"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </Link>
            </AnimatedContainer>

            <AnimatedContainer delay={0.4} className="pt-4 flex items-center space-x-5 text-muted-foreground">
              {socialLinksData.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors p-1"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon] || social.name}
                </a>
              ))}
            </AnimatedContainer>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <AnimatedContainer delay={0.2} className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-border bg-card p-2 shadow-2xl relative overflow-hidden flex items-center justify-center">
                {personalData.avatarUrl ? (
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 flex items-center justify-center text-4xl font-bold text-primary border border-border/50">
                    SNK
                  </div>
                )}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </Container>
    </Section>
  );
};
