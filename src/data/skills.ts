import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    skills: [
      { name: "Python", tier: "primary" },
      { name: "TypeScript", tier: "primary" },
      { name: "JavaScript", tier: "primary" },
      { name: "SQL", tier: "proficient" },
      { name: "HTML5/CSS3", tier: "primary" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React", tier: "primary" },
      { name: "Next.js (App Router)", tier: "primary" },
      { name: "Tailwind CSS", tier: "primary" },
      { name: "Framer Motion", tier: "proficient" },
      { name: "Redux Toolkit", tier: "proficient" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Databases",
    icon: "Server",
    skills: [
      { name: "Node.js / Express", tier: "primary" },
      { name: "FastAPI / Python", tier: "primary" },
      { name: "PostgreSQL", tier: "primary" },
      { name: "MongoDB", tier: "proficient" },
      { name: "Redis", tier: "proficient" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", tier: "primary" },
      { name: "LangChain", tier: "primary" },
      { name: "OpenAI APIs", tier: "primary" },
      { name: "Vector Databases", tier: "proficient" },
      { name: "Hugging Face", tier: "familiar" }
    ]
  },
  {
    id: "devops-tools",
    name: "DevOps & Tools",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", tier: "primary" },
      { name: "Docker", tier: "proficient" },
      { name: "Vercel", tier: "primary" },
      { name: "VS Code / Postman", tier: "primary" },
      { name: "AWS Basics", tier: "familiar" }
    ]
  }
];
