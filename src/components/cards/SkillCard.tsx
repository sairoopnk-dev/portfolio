import React from 'react';
import { SkillCategory } from '@/types';
import { TechBadge } from '../common/TechBadge';
import { Code2, Layout, Server, Brain, Wrench } from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Brain: <Brain className="w-5 h-5" />,
    Wrench: <Wrench className="w-5 h-5" />
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-4 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
          {iconMap[category.icon] || <Code2 className="w-5 h-5" />}
        </div>
        <h3 className="text-base font-bold text-zinc-100">{category.name}</h3>
      </div>

      <div className="space-y-3 pt-2">
        {['primary', 'proficient', 'familiar'].map((tier) => {
          const tierSkills = category.skills.filter((s) => s.tier === tier);
          if (tierSkills.length === 0) return null;

          return (
            <div key={tier} className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 block">
                {tier}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tierSkills.map((skill) => (
                  <TechBadge key={skill.name} label={skill.name} size="sm" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
