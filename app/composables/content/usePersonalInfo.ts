export const usePersonalInfo = () =>
  useAsyncData('personalInfo', () => queryCollection('personalInfo').first());
