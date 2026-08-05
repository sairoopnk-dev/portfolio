import { projectsData } from '@/data/projects';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { TechBadge } from '@/components/common/TechBadge';
import { ExternalLink } from '@/components/common/ExternalLink';
import { CtaSection } from '@/components/sections/CtaSection';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Github, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Sairoop NK`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="pt-24 pb-8 bg-zinc-900/40 border-b border-zinc-800">
        <Container>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="space-y-4">
            <div className="flex gap-2">
              {project.categories.map((cat) => (
                <span key={cat} className="text-xs uppercase font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">{project.title}</h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <ExternalLink href={project.liveUrl} className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors">
                  Visit Live Application
                </ExternalLink>
              )}
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10 text-zinc-300">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-zinc-100">Overview</h2>
                <p className="text-base leading-relaxed text-zinc-400">{project.longDescription}</p>
              </div>

              {project.problem && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-100">The Problem</h2>
                  <p className="text-base leading-relaxed text-zinc-400">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-100">The Solution</h2>
                  <p className="text-base leading-relaxed text-zinc-400">{project.solution}</p>
                </div>
              )}

              {project.features && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-100">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    {project.features.map((feat, i) => (
                      <li key={i}><span className="text-zinc-300">{feat}</span></li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-zinc-100">Architecture</h2>
                  <p className="text-base leading-relaxed text-zinc-400">{project.architecture}</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4 h-fit">
              <h3 className="text-base font-bold text-zinc-100 border-b border-zinc-800 pb-3">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-zinc-500 block text-xs">Status</span>
                  <span className="text-emerald-400 font-medium capitalize">{project.status}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-xs">Category</span>
                  <span className="text-zinc-300 font-medium">{project.categories.join(', ')}</span>
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
