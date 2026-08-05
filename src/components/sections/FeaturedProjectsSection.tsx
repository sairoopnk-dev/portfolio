import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Grid } from '../layout/Grid';
import { ProjectCard } from '../cards/ProjectCard';
import { projectsData } from '@/data/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FeaturedProjectsSection: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <SectionHeading
            label="PORTFOLIO"
            title="Featured Engineering Projects"
            subtitle="Hand-picked projects showcasing AI integrations, full-stack architecture, and user experience."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Grid cols={3}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
