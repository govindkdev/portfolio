export interface PersonalInfo {
  name: string;
  brand: string;
  roles: string[];
  identity: string;
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  profileImage: string;
  resume: {
    hasPdf: boolean;
    pdfUrl: string;
    filename: string;
    lastUpdated: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  affiliation?: string;
  duration: string;
  score: string;
  scoreLabel: string;
  location: string;
  highlights?: string[];
  current?: boolean;
}

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  location: string;
  status: string;
  description: string;
  modules: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  accent: 'blue' | 'purple' | 'cyan';
  skills: {
    name: string;
    icon: string;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  roleDetails: string;
  status: string;
  statusType: 'ongoing' | 'concept' | 'development';
  technologies: string[];
  capabilities: string[];
  categories?: string[];
  accentColor: 'blue' | 'purple' | 'cyan';
  githubUrl?: string | null;
  demoUrl?: string | null;
  image?: string;
  isTeamProject?: boolean;
}
