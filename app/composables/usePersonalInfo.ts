const fetchPersonalInfo = () => queryCollection('personalInfo').first();

/**
 * Personal info shared by the about, contact, and footer sections. One key and
 * one handler, so the query runs once per page and is stored once in the
 * payload instead of once per component.
 */
export function usePersonalInfo() {
  return useAsyncData('personalInfo', fetchPersonalInfo);
}
