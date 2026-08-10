'use client';

import React from 'react';
import { NavLinks } from './NavLinks';
import { navigationData } from '@/data/navigation';
import { socialLinksData } from '@/data/social-links';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />
  };

  return (
    <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md md:hidden flex flex-col justify-between p-6 border-b border-border">
      <div className="space-y-6 pt-4">
        <NavLinks
          links={navigationData}
          orientation="vertical"
          onItemClick={onClose}
        />
        <div className="pt-4 border-t border-border">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-around border-t border-border pt-6">
        {socialLinksData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label={social.name}
          >
            {socialIcons[social.icon] || social.name}
          </a>
        ))}
      </div>
    </div>
  );
};
