import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Grid } from '../layout/Grid';
import { SkillCard } from '../cards/SkillCard';
import { skillsData } from '@/data/skills';

export const SkillsSection: React.FC = () => {
  return (
    <Section className="bg-zinc-900/40 border-y border-zinc-800/80">
      <Container>
        <SectionHeading
          label="TECH STACK"
          title="Languages, Frameworks & Tools"
          subtitle="A comprehensive overview of technology competencies grouped by domain and proficiency tier."
        />

        <Grid cols={3}>
          {skillsData.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
