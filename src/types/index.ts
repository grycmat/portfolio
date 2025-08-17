export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon?: string;
}

export interface Skill {
  icon: string;
  title: string;
  description: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface TimelineRole {
  period: string;
  title: string;
  isPromotion?: boolean;
  description: string;
}

export interface TimelineItem {
  period: string;
  company: string;
  role?: string;
  roles?: TimelineRole[];
  summary?: string;
  bullets?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
