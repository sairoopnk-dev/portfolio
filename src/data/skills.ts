import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", tier: "primary" },
      { name: "Java", tier: "primary" },
      { name: "C++", tier: "primary" },
      { name: "JavaScript", tier: "primary" },
      { name: "TypeScript", tier: "primary" },
      { name: "HTML", tier: "primary" },
      { name: "CSS", tier: "primary" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React", tier: "primary" },
      { name: "Next.js", tier: "primary" },
      { name: "Tailwind CSS", tier: "primary" },
      { name: "shadcn/ui", tier: "primary" },
      { name: "Framer Motion", tier: "primary" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Generative AI", tier: "primary" },
      { name: "LLM Integration", tier: "primary" },
      { name: "Gemini API", tier: "primary" },
      { name: "Prompt Engineering", tier: "primary" },
      { name: "AI Application Development", tier: "primary" }
    ]
  },
  {
    id: "devops-tools",
    name: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", tier: "primary" },
      { name: "GitHub", tier: "primary" },
      { name: "VS Code", tier: "primary" },
      { name: "npm", tier: "primary" },
      { name: "Vercel", tier: "primary" },
      { name: "Chrome DevTools", tier: "primary" }
    ]
  }
];
