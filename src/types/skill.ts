export type SkillTier = 'primary' | 'proficient' | 'familiar';

export interface Skill {
  name: string;
  tier: SkillTier;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}
