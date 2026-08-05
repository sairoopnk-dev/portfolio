import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../common/SectionHeading';
import { Timeline } from '../timeline/Timeline';
import { TimelineItem } from '../timeline/TimelineItem';
import { ExperienceCard } from '../cards/ExperienceCard';
import { experienceData } from '@/data/experience';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  preview?: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ preview = false }) => {
  const experiences = preview ? experienceData.slice(0, 2) : experienceData;

  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12">
          <SectionHeading
            label="CAREER"
            title="Work Experience"
            subtitle="My professional software engineering trajectory, roles, and key accomplishments."
            className="mb-0"
          />
          {preview && (
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
            >
              <span>Full Experience Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="max-w-3xl">
          <Timeline>
            {experiences.map((exp) => (
              <TimelineItem key={exp.id}>
                <ExperienceCard experience={exp} />
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Container>
    </Section>
  );
};
