import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutPreviewSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <ExperienceSection preview={true} />
        <CertificationsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
