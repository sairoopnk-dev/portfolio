export type AvailabilityStatus = 'available' | 'unavailable' | 'busy' | 'Open to internship and software development opportunities';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  avatarUrl: string;
  location: string;
  availability: AvailabilityStatus;
  stats: StatItem[];
}
