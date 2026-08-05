import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: "ai-resume-parser",
    title: "AI Resume Parser & Analyzer",
    slug: "ai-resume-parser",
    description: "Intelligent ATS resume analyzer parsing PDF credentials and scoring job fit with LLM processing.",
    longDescription: "An AI-powered application that analyzes resumes against target job descriptions using Natural Language Processing and LLM APIs to provide actionable feedback, match percentages, and keyword optimizations.",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "OpenAI API", "Tailwind CSS"],
    imageUrl: "/images/projects/ai-resume-parser.webp",
    githubUrl: "https://github.com/sairoopnk/ai-resume-parser",
    liveUrl: "https://ai-resume-parser-demo.vercel.app",
    status: "completed",
    featured: true,
    order: 1,
    categories: ["AI", "Full Stack"],
    problem: "Recruiters and job seekers struggle to quickly evaluate candidate resumes against complex job requirements.",
    solution: "Built a real-time extraction and scoring pipeline using FastAPI and OpenAI, delivering instantaneous match reports and feedback.",
    features: [
      "PDF & DOCX parsing with structured JSON extraction",
      "LLM-driven skill and experience gap analysis",
      "Interactive dashboard with visual match scores",
      "Exportable report generation"
    ],
    architecture: "Next.js App Router frontend interacting with a FastAPI backend service via REST endpoints. Uses vector embeddings for semantic matching.",
    challenges: [
      "Handling unstructured multi-column PDF layouts accurately.",
      "Optimizing LLM token usage while keeping latency under 2 seconds."
    ],
    lessons: [
      "Implemented server-sent events for streaming analysis results to improve user experience.",
      "Learned fine-grained prompt engineering for deterministic JSON output parsing."
    ]
  },
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    slug: "ecommerce-platform",
    description: "Modern e-commerce platform with real-time inventory management and Stripe integration.",
    longDescription: "A feature-complete online shopping application with product catalogs, shopping carts, secure checkout, order management, and administrative analytics dashboards.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
    imageUrl: "/images/projects/ecommerce-platform.webp",
    githubUrl: "https://github.com/sairoopnk/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    status: "completed",
    featured: true,
    order: 2,
    categories: ["Full Stack"],
    problem: "Small businesses need custom e-commerce solutions that load instantly and provide seamless payment processing.",
    solution: "Architected a server-side rendered application with Next.js App Router and Prisma ORM backed by PostgreSQL.",
    features: [
      "Stripe payment gateway integration",
      "Real-time order tracking and webhooks",
      "Admin portal for inventory management",
      "Optimized product search with multi-filter support"
    ]
  },
  {
    id: "ml-pipeline-tool",
    title: "Automated ML Pipeline Orchestrator",
    slug: "ml-pipeline-tool",
    description: "Developer utility for monitoring and managing machine learning data processing pipelines.",
    longDescription: "A developer-focused web dashboard that streamlines data cleaning, feature extraction, model training triggers, and performance metric tracking.",
    technologies: ["Python", "FastAPI", "React", "PyTorch", "Docker", "Redis"],
    imageUrl: "/images/projects/ml-pipeline-tool.webp",
    githubUrl: "https://github.com/sairoopnk/ml-pipeline-tool",
    status: "completed",
    featured: true,
    order: 3,
    categories: ["AI", "Backend"],
    problem: "Managing manual ML workflow execution often causes data drift and untracked model iterations.",
    solution: "Created an automated orchestration server with Redis job queues and visual node graphs."
  }
];
