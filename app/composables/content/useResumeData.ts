import type { ResumeSectionType } from '~/config/resume.config';

export const useResumeData = () => {
  return useAsyncData('resumeData', async () => {
    const [
      personalInfo,
      skills,
      experience,
      education,
      projects,
      courses,
      references,
      managementProjects,
      roboticsProjects,
    ] = await Promise.all([
      queryCollection('personalInfo').first(),
      queryCollection('skills').first(),
      queryCollection('experience').order('endDate', 'DESC').all(),
      queryCollection('education').order('endYear', 'DESC').all(),
      queryCollection('projects').order('year', 'DESC').all(),
      queryCollection('courses').order('year', 'DESC').all(),
      queryCollection('references').all(),
      queryCollection('managementProjects').all(),
      queryCollection('roboticsProjects').order('year', 'DESC').all(),
    ]);

    return {
      personalInfo,
      skills,
      experience,
      education,
      projects,
      courses,
      references,
      managementProjects,
      roboticsProjects,
    };
  });
};

export const useResumeSection = (sectionType: ResumeSectionType) => {
  const { data: resumeData } = useResumeData();

  return computed(() => {
    if (!resumeData.value) return null;

    switch (sectionType) {
      case 'personalInfo':
        return resumeData.value.personalInfo;
      case 'objective':
        return resumeData.value.personalInfo?.objective;
      case 'skills':
        return resumeData.value.skills;
      case 'experience':
        return resumeData.value.experience;
      case 'education':
        return resumeData.value.education;
      case 'projects':
        return resumeData.value.projects;
      case 'courses':
        return resumeData.value.courses;
      case 'languages':
        return resumeData.value.personalInfo?.languages;
      case 'references':
        return resumeData.value.references;
      case 'managementProjects':
        return resumeData.value.managementProjects;
      case 'roboticsProjects':
        return resumeData.value.roboticsProjects;
      default:
        return null;
    }
  });
};
