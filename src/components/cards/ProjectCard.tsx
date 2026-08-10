import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { TechBadge } from '../common/TechBadge';
import { ExternalLink } from '../common/ExternalLink';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex gap-1.5 flex-wrap">
            {project.categories.map((cat) => (
              <span key={cat} className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {cat}
              </span>
            ))}
          </div>
          {project.featured && (
            <span className="text-[10px] uppercase tracking-wider font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Featured
            </span>
          )}
        </div>

        <div>
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-primary transition-colors">
            <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech} label={tech} size="sm" />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-muted-foreground self-center">+{project.technologies.length - 5}</span>
          )}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-xs">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        ) : (
          <span />
        )}

        {project.liveUrl ? (
          <ExternalLink href={project.liveUrl} showIcon={true} className="text-xs">
            Live Demo
          </ExternalLink>
        ) : (
          <Link href={`/projects/${project.slug}`} className="text-primary hover:text-primary/80 font-medium">
            View Details →
          </Link>
        )}
      </div>
    </div>
  );
};
