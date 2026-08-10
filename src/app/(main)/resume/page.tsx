import { PageHeader } from '@/components/layout/PageHeader';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { CtaSection } from '@/components/sections/CtaSection';
import { Download, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume — Sairoop NK',
  description: 'View and download Sairoop NK\'s official software engineering curriculum vitae.',
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Curriculum Vitae"
        subtitle="Official software engineering resume. Updated January 2025."
      />

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-border bg-card">
              <div>
                <h3 className="text-lg font-bold text-foreground">Download Resume PDF</h3>
                <p className="text-xs text-muted-foreground">Get the print-ready PDF version for recruiters and offline review.</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="/resume.pdf"
                  download="Sairoop_NK_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors w-full sm:w-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-secondary text-secondary-foreground hover:text-foreground transition-colors"
                  aria-label="Open PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Structured Resume Content Preview */}
            <div className="rounded-xl border border-border bg-muted/40 p-8 space-y-8">
              <div className="border-b border-border pb-6">
                <h2 className="text-2xl font-bold text-foreground">Sairoop NK</h2>
                <p className="text-primary font-medium">AI & Full Stack Developer</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Summary</h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Passionate Software Developer with expertise in React, Next.js, Python, FastAPI, and machine learning integration. Experienced in designing scalable web architectures and deploying production-ready full-stack applications.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Key Competencies</h3>
                <div className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                  <p><strong className="text-foreground">Languages:</strong> Python, TypeScript, JavaScript, SQL</p>
                  <p><strong className="text-foreground">Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion</p>
                  <p><strong className="text-foreground">Backend:</strong> Node.js, Express, FastAPI, PostgreSQL, Redis</p>
                  <p><strong className="text-foreground">AI & ML:</strong> PyTorch, LangChain, OpenAI APIs, Vector Databases</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
