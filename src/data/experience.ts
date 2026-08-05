import { Experience } from '@/types';

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack & AI Developer",
    company: "Tech Innovation Labs",
    companyUrl: "https://example.com",
    location: "Remote",
    startDate: "2024-01",
    isCurrent: true,
    description: [
      "Architected and developed scalable web applications using Next.js, React, and TypeScript.",
      "Integrated Generative AI and LLM APIs to build automated customer workflow solutions.",
      "Designed PostgreSQL database schemas and optimized REST API performance with Caching."
    ],
    achievements: [
      "Reduced API response times by 35% through query optimization and Redis caching.",
      "Successfully delivered 4 major product features ahead of release deadlines."
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "Vercel"]
  },
  {
    id: "exp-2",
    role: "Software Engineering Intern",
    company: "Digital Solutions Inc.",
    companyUrl: "https://example.com",
    location: "India",
    startDate: "2023-05",
    endDate: "2023-12",
    isCurrent: false,
    description: [
      "Built responsive user interfaces with React and Tailwind CSS based on Figma designs.",
      "Collaborated with senior engineers to implement unit testing suites with 85%+ coverage.",
      "Participated in daily agile standups, code reviews, and sprint planning sessions."
    ],
    achievements: [
      "Authored clean UI component libraries used across 3 internal web applications."
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Jest", "Postman"]
  }
];
