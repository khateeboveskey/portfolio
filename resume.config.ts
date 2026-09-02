/**
 * Resume Configuration
 *
 * Controls which sections appear in the generated PDF resume,
 * their order, and display options.
 */
export interface ResumeHeaderConfig {
  /** Full name as displayed on resume */
  name: string;
  /** Title/tagline below the name */
  title: string;
  /** Portfolio/website URL */
  website: string;
}

export interface ResumeSectionConfig {
  /** Whether this section is included in the resume */
  visible: boolean;
}

export interface ResumeSkillsConfig extends ResumeSectionConfig {
  /** Group hard skills into categories for cleaner display */
  categories: Record<string, string[]>;
}

export interface ResumeExperienceConfig extends ResumeSectionConfig {
  /** Max number of achievements to show per role (0 = all) */
  maxAchievementsPerRole: number;
}

export interface ResumeProjectsConfig extends ResumeSectionConfig {
  /** Max number of projects to show (0 = all) */
  maxProjects: number;
  /** Show project descriptions/roles */
  showDescriptions: boolean;
}

export interface ResumeConfig {
  /** File name for the downloaded PDF */
  fileName: string;
  /** Header overrides (name, title, website) */
  header: ResumeHeaderConfig;
  /** Order of sections in the resume (top to bottom) */
  sectionOrder: string[];
  /** Section-specific configuration */
  sections: {
    objective: ResumeSectionConfig;
    education: ResumeSectionConfig;
    experience: ResumeExperienceConfig;
    skills: ResumeSkillsConfig;
    languages: ResumeSectionConfig;
    projects: ResumeProjectsConfig;
    courses: ResumeSectionConfig;
    honorsAndAwards: ResumeSectionConfig;
    personalHighlights: ResumeSectionConfig;
    certifications: ResumeSectionConfig;
    references: ResumeSectionConfig;
  };
}

const resumeConfig: ResumeConfig = {
  fileName: 'khateeb-resume.pdf',

  header: {
    name: 'Abdulrahman Saleh Al-Khateeb',
    title: 'Fullstack Developer | Technical Trainer',
    website: 'khateeb.me',
  },

  sectionOrder: [
    'objective',
    'education',
    'experience',
    'skills',
    'languages',
    'projects',
    'courses',
    'honorsAndAwards',
    'personalHighlights',
    'certifications',
    'references',
  ],

  sections: {
    objective: {
      visible: true,
    },
    education: {
      visible: true,
    },
    experience: {
      visible: true,
      maxAchievementsPerRole: 0,
    },
    skills: {
      visible: true,
      categories: {
        'Programming Languages': ['JavaScript', 'TypeScript', 'PHP'],
        'Frameworks & Libraries': [
          'Bootstrap',
          'Tailwind CSS',
          'Sass',
          'Vue',
          'Nuxt',
          'Laravel',
          'React',
          'React Native',
        ],
        Database: ['MySQL', 'SQLite'],
        Testing: ['Playwright', 'Vitest'],
        'Tools & DevOps': ['Git'],
      },
    },
    languages: {
      visible: true,
    },
    projects: {
      visible: true,
      maxProjects: 0,
      showDescriptions: true,
    },
    courses: {
      visible: true,
    },
    honorsAndAwards: {
      visible: true,
    },
    personalHighlights: {
      visible: true,
    },
    certifications: {
      visible: true,
    },
    references: {
      visible: true,
    },
  },
};

export default resumeConfig;
