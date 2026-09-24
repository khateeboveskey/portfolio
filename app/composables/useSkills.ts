const fetchSkills = () => queryCollection('skills').first();

/**
 * The skills document, shared by every component that needs it (skills
 * section, project cards, skills pages) under one payload key.
 */
export function useSkills() {
  return useAsyncData('skills', fetchSkills);
}
