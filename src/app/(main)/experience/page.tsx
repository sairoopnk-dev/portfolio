import { PageHeader } from '@/components/layout/PageHeader';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience — Sairoop NK',
  description: 'View Sairoop NK\'s professional software engineering trajectory, roles, and accomplishments.',
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Work Experience"
        subtitle="Full career timeline, technical roles, key responsibilities, and achievements."
      />
      <ExperienceSection preview={false} />
      <CtaSection />
    </>
  );
}
