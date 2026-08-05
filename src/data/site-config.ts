export const siteConfig = {
  name: "Sairoop NK",
  title: "Sairoop NK | AI & Full Stack Developer",
  description: "Professional portfolio showcasing AI, Full Stack, and Software Development projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    github: "", // To be filled
    linkedin: "", // To be filled
    twitter: "", // To be filled
  },
  contact: {
    email: "", // To be filled
  },
};

export type SiteConfig = typeof siteConfig;
