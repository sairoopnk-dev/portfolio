import React from 'react';
import { Container } from '../layout/Container';
import { Logo } from '../common/Logo';
import { NavLinks } from './NavLinks';
import { navigationData } from '@/data/navigation';
import { socialLinksData } from '@/data/social-links';
import { siteConfig } from '@/data/site-config';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="w-4 h-4" />,
    Linkedin: <Linkedin className="w-4 h-4" />,
    Twitter: <Twitter className="w-4 h-4" />,
    Mail: <Mail className="w-4 h-4" />
  };

  return (
    <footer className="border-t border-border/80 bg-background py-12 text-muted-foreground text-sm">
      <Container className="space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <Logo />
            <p className="text-xs text-muted-foreground max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          <NavLinks links={navigationData} className="flex-wrap gap-y-2" />
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                {socialIcons[social.icon] || social.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
