import { PageHeader } from '@/components/layout/PageHeader';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications — Sairoop NK',
  description: 'Verified professional certifications and credentials earned by Sairoop NK.',
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications & Credentials"
        subtitle="Industry-recognized certifications validating technical mastery across Cloud, AI, and Software Engineering."
      />
      <CertificationsSection />
      <CtaSection />
    </>
  );
}
