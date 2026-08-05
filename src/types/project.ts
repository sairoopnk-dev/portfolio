export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  categories: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string[];
  lessons?: string[];
}
