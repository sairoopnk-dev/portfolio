import React from 'react';
import { Experience } from '@/types';
import { formatDate } from '@/lib/utils';
import { TechBadge } from '../common/TechBadge';
import { ExternalLink } from '../common/ExternalLink';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const formattedStart = formatDate(experience.startDate);
  const formattedEnd = experience.isCurrent ? 'Present' : formatDate(experience.endDate || '');

  return (
    <div className="space-y-4">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="text-lg font-bold text-foreground">{experience.role}</h3>
          <span className="text-xs font-mono text-muted-foreground">
            {formattedStart} — {formattedEnd}
          </span>
        </div>

        <div className="text-sm font-medium text-primary mt-0.5">
          {experience.companyUrl ? (
            <ExternalLink href={experience.companyUrl} showIcon={false}>
              {experience.company}
            </ExternalLink>
          ) : (
            experience.company
          )}
          <span className="text-muted-foreground font-normal"> · {experience.location}</span>
        </div>
      </div>

      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
        {experience.description.map((bullet, index) => (
          <li key={index} className="leading-relaxed">
            <span className="text-zinc-700 dark:text-zinc-300">{bullet}</span>
          </li>
        ))}
      </ul>

      {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} size="sm" />
          ))}
        </div>
      )}
    </div>
  );
};
