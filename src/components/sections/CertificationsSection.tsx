import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Grid } from '../layout/Grid';
import { CertificationCard } from '../cards/CertificationCard';
import { certificationsData } from '@/data/certifications';

export const CertificationsSection: React.FC = () => {
  return (
    <Section className="bg-zinc-900/40 border-y border-zinc-800/80">
      <Container>
        <SectionHeading
          label="CREDENTIALS"
          title="Verified Certifications"
          subtitle="Industry-recognized certifications and professional credentials validating specialized expertise."
        />

        <Grid cols={3}>
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
