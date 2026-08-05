import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { StatusBadge } from '@/components/common/StatusBadge';
import { personalData } from '@/data/personal';
import { socialLinksData } from '@/data/social-links';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Sairoop NK',
  description: 'Get in touch with Sairoop NK for job opportunities, project collaborations, or general inquiries.',
};

export default function ContactPage() {
  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="w-5 h-5" />,
    Linkedin: <Linkedin className="w-5 h-5" />,
    Twitter: <Twitter className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />
  };

  return (
    <>
      <PageHeader
        title="Get In Touch"
        subtitle="Have a project idea, job opportunity, or question? Feel free to reach out."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-zinc-100">Contact Details</h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 block">Direct Email</span>
                    <a href="mailto:sairoopnk@example.com" className="text-indigo-400 hover:text-indigo-300 font-medium">
                      sairoopnk@example.com
                    </a>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 block">Location</span>
                    <span className="text-zinc-300">{personalData.location}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 block mb-1">Availability</span>
                    <StatusBadge status={personalData.availability} />
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800 space-y-3">
                  <span className="text-xs uppercase font-semibold text-zinc-500 block">Connect on Socials</span>
                  <div className="flex flex-col space-y-2">
                    {socialLinksData.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-100 transition-colors p-2 rounded-lg hover:bg-zinc-800/50"
                      >
                        <span className="text-indigo-400">{socialIcons[social.icon]}</span>
                        <span>{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
