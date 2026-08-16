import { SocialLink } from '@/types';
import { siteConfig } from './site-config';

export const socialLinksData: SocialLink[] = [
  {
    name: "GitHub",
    url: siteConfig.links.github,
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: siteConfig.links.linkedin,
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: siteConfig.links.twitter || "https://twitter.com/sairoopnk",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: `mailto:${siteConfig.contact.email}`,
    icon: "Mail"
  }
];
