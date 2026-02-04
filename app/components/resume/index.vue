<template>
  <div class="resume-container mx-auto max-w-4xl bg-white p-8 text-black">
    <div v-for="sectionType in sections" :key="sectionType" class="mb-6">
      <ResumePersonalInfo v-if="sectionType === 'personalInfo'" />
      <ResumeObjective v-else-if="sectionType === 'objective'" />
      <ResumeExperience v-else-if="sectionType === 'experience'" />
      <ResumeEducation v-else-if="sectionType === 'education'" />
      <ResumeSkills v-else-if="sectionType === 'skills'" />
      <ResumeProjects v-else-if="sectionType === 'projects'" />
      <ResumeLanguages v-else-if="sectionType === 'languages'" />
      <ResumeCourses v-else-if="sectionType === 'courses'" />
      <ResumeManagementProjects
        v-else-if="sectionType === 'managementProjects'"
      />
      <ResumeRoboticsProjects v-else-if="sectionType === 'roboticsProjects'" />
      <ResumeReferences v-else-if="sectionType === 'references'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ResumeSectionType } from '~/config/resume.config';

interface Props {
  sections: ResumeSectionType[];
}

defineProps<Props>();
</script>

<style scoped>
.resume-container {
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.6;
}

@media print {
  .resume-container {
    padding: 0;
    max-width: 100%;
  }
}
</style>
