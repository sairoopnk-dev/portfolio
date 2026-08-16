export const siteConfig = {
  name: "Sairoop NK",
  title: "Sairoop NK | AI & Full Stack Developer",
  description: "Professional portfolio showcasing AI, Full Stack, and Software Development projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/sairoopnk-dev",
    linkedin: "https://www.linkedin.com/in/sairoop-nk-77ba683b8/",
    twitter: "", // To be filled
  },
  contact: {
    email: "sairoopnk@gmail.com",
  },
};

export type SiteConfig = typeof siteConfig;
