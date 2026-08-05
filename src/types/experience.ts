export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  description: string[];
  achievements?: string[];
  technologies: string[];
}
