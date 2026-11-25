export interface PersonalInfo {
  name: string;
  brand: string;
  title: string;
  roles: string[];
  identity: string;
  headline: string;
  tagline: string;
  careerGoal: string;
  bio: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  profileImage: string;
  heroBadges: {
    label: string;
    highlight?: boolean;
    icon?: string;
  }[];
  heroSkills: string[];
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
  current?: boolean;
  highlights?: string[];
  coursework?: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  provider: string;
  location: string;
  status: string;
  description: string;
  modules: string[];
  learningAreas?: {
    topic: string;
    description: string;
  }[];
}

export interface SkillItem {
  name: string;
  icon: string;
  description?: string;
  status?: 'Comfortable' | 'Familiar' | 'Currently Learning';
}

export interface SkillCategory {
  title: string;
  description: string;
  categoryNumber: string;
  accent: 'blue' | 'purple' | 'cyan';
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  roleDetails?: string;
  myContribution: string;
  status: string;
  statusType: 'ongoing' | 'concept' | 'development';
  technologies: string[];
  features: string[];
  capabilities?: string[];
  categories?: string[];
  accentColor: 'blue' | 'purple' | 'cyan';
  githubUrl?: string | null;
  demoUrl?: string | null;
  image?: string;
  isTeamProject?: boolean;
}
