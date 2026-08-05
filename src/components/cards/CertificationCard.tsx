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
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100">{certification.name}</h3>
            <p className="text-xs text-zinc-400 font-medium">{certification.issuer}</p>
          </div>
        </div>

        <p className="text-xs font-mono text-zinc-500">
          Issued {formatDate(certification.issuedDate)}
          {certification.credentialId && ` · ID: ${certification.credentialId}`}
        </p>

        <div className="flex flex-wrap gap-1 pt-1">
          {certification.skillsVerified.map((skill) => (
            <span key={skill} className="text-[11px] text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {certification.credentialUrl && (
        <div className="pt-4 mt-4 border-t border-zinc-800/60 text-xs">
          <ExternalLink href={certification.credentialUrl} showIcon={true}>
            Verify Credential
          </ExternalLink>
        </div>
      )}
    </div>
  );
};
