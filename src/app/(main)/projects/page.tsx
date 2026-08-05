import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/layout/Grid';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { CtaSection } from '@/components/sections/CtaSection';
import { projectsData } from '@/data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Sairoop NK',
  description: 'Explore AI, Full Stack, and Software Development projects built by Sairoop NK.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Engineering Projects"
        subtitle="A full showcase of full-stack web applications, AI integrations, and tools."
      />

      <Section>
        <Container>
          <Grid cols={3}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
