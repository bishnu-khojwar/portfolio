export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  category: string;
  icon: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  icon: string;
  details: string[];
}

export interface EngagementItem {
  badge: string;
  title: string;
  organization: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  emoji: string;
  tech: string[];
  link: string;
}

export interface SocialLink {
  icon: string; // Emoji or Lucide icon name
  href: string;
  label: string;
}
