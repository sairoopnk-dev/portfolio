import React from 'react';
import { Certification } from '@/types';
import { formatDate } from '@/lib/utils';
import { ExternalLink } from '../common/ExternalLink';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-card-foreground">{certification.name}</h3>
            <p className="text-xs text-muted-foreground font-medium">{certification.issuer}</p>
          </div>
        </div>

        <p className="text-xs font-mono text-muted-foreground">
          Issued {formatDate(certification.issuedDate)}
          {certification.credentialId && ` · ID: ${certification.credentialId}`}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {certification.skillsVerified.map((skill) => (
            <span key={skill} className="text-[11px] text-secondary-foreground bg-secondary px-2 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {certification.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-border text-xs">
          <ExternalLink href={certification.credentialUrl} showIcon={true}>
            Verify Credential
          </ExternalLink>
        </div>
      )}
    </div>
  );
};
