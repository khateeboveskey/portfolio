/**
 * TypeScript interfaces for the portfolio application
 */

export interface PersonalInfo {
  name: string;
  occupation: string;
  dateOfBirth: string;
  address: string;
  maritalStatus: string;
  nationality: string;
}

export interface Skill {
  name: string;
  deviconClass: string;
}

export interface Skills {
  soft: string[];
  hard: Skill[];
}

export interface EducationalQualification {
  degree: string;
  university?: string;
  institution?: string;
  school?: string;
  location: string;
  startYear: number;
  endYear: number;
  grade: number | null;
}

export interface ProfessionalExperience {
  startDate: string;
  endDate: string;
  position: string;
  category: string;
  company: string;
  website: string;
  achievements: string[];
}

export interface CreativeWriting {
  title: string;
  description: string;
  category: string;
  type: string;
  datePublished: string;
  url: string;
  urlTo: string;
}

export interface ProjectManagement {
  project: string;
  role: string;
  methodology: string;
}

export interface Robotics {
  title: string;
  description: string;
  scope: string;
  category: string;
  donor: string;
  year: number;
  skillsUsed: string[];
}

export interface PersonalExperience {
  creativeWriting: CreativeWriting[];
  projectManagement: ProjectManagement[];
  robotics: Robotics[];
}

export interface Experience {
  professional: ProfessionalExperience[];
  personal: PersonalExperience;
}

export interface Project {
  name: string;
  type: string;
  year: number;
  stack: string[];
  githubRepo: string | null;
  image: string;
}

export interface Course {
  title: string;
  host: string;
  year: number;
}

export interface SocialProof {
  name: string;
  avatarUrl: string;
  degree: string;
  position: string;
  quote: string;
}

export interface Reference {
  name: string;
  degree: string;
  location: string;
  position: string;
  contact: string;
  contacts?: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface SocialAccounts {
  facebook: string;
  'x-twitter': string;
  instagram: string;
  linkedin: string;
  github: string;
  youtube: string;
}

export interface PortfolioData {
  isAvailableToWork: boolean;
  objective: string;
  personalInfo: PersonalInfo;
  skills: Skills;
  languages: Record<string, string>;
  educationalQualifications: EducationalQualification[];
  experience: Experience;
  projects: Project[];
  courses: Course[];
  socialProof: SocialProof[];
  references: Reference[];
  contactInfo: ContactInfo;
  accounts: SocialAccounts;
}

// Component prop types
export interface StatsInfo {
  title: string;
  content: string | number;
}

export interface NavItem {
  to: string;
  label: string;
}

export interface CTAButtonProps {
  text?: string;
  class?: string;
}

export interface SectionHeaderProps {
  subtitle?: string;
}