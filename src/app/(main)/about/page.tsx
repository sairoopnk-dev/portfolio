import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { personalData } from '@/data/personal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Sairoop NK',
  description: 'Learn about Sairoop NK\'s background, engineering philosophy, and core skills.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Background, engineering philosophy, and core technical skill matrix."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <SectionHeading
                label="BIOGRAPHY"
                title="Building software with structural elegance and AI precision"
              />
              {personalData.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="lg:col-span-4 rounded-xl border border-border bg-card p-6 space-y-4">
              <h3 className="text-base font-bold text-foreground border-b border-border pb-3">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs">Location</span>
                  <span className="text-foreground font-medium">{personalData.location}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Role Focus</span>
                  <span className="text-foreground font-medium">{personalData.role}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-xs">Availability</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <SkillsSection />
      <CtaSection />
    </>
  );
}
