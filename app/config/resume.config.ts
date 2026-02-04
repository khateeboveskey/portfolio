export type ResumeSectionType =
  | 'personalInfo'
  | 'objective'
  | 'experience'
  | 'education'
  | 'skills'
  | 'projects'
  | 'courses'
  | 'languages'
  | 'references'
  | 'managementProjects'
  | 'roboticsProjects';

export interface ResumeVersionConfig {
  sections: ResumeSectionType[];
}

export interface ResumeConfig {
  summarized: ResumeVersionConfig;
  normal: ResumeVersionConfig;
  detailed: ResumeVersionConfig;
}

export const resumeConfig: ResumeConfig = {
  // Summarized version - essential information only
  summarized: {
    sections: [
      'personalInfo',
      'objective',
      'experience',
      'education',
      'skills',
    ],
  },

  // Normal version - standard resume with most relevant sections
  normal: {
    sections: [
      'personalInfo',
      'objective',
      'experience',
      'education',
      'skills',
      'projects',
      'languages',
      'courses',
    ],
  },

  // Detailed version - comprehensive resume with all sections
  detailed: {
    sections: [
      'personalInfo',
      'objective',
      'experience',
      'education',
      'skills',
      'projects',
      'languages',
      'courses',
      'managementProjects',
      'roboticsProjects',
      'references',
    ],
  },
};

export const resumeVersions = [
  { value: 'summarized', label: 'Summarized Resume' },
  { value: 'normal', label: 'Normal Resume' },
  { value: 'detailed', label: 'Detailed Resume' },
] as const;
