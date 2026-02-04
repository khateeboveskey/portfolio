<template>
  <div class="print-resume">
    <Resume v-if="sections.length > 0" :sections="sections" />
    <div v-else class="p-8 text-center">
      <p>Loading resume...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { resumeConfig } from '~/config/resume.config';
import type { ResumeSectionType } from '~/config/resume.config';

definePageMeta({
  layout: false,
});

useHead({
  title: 'Resume - Abdulrahman Al-Khateeb',
});

const sections = ref<ResumeSectionType[]>([]);

onMounted(() => {
  if (typeof window !== 'undefined') {
    const storedSections = sessionStorage.getItem('resumeSections');
    const storedVersion = sessionStorage.getItem('resumeVersion') as
      | 'summarized'
      | 'normal'
      | 'detailed'
      | null;

    if (storedSections) {
      sections.value = JSON.parse(storedSections);
    } else if (storedVersion) {
      sections.value = resumeConfig[storedVersion].sections;
    } else {
      // Default to normal version
      sections.value = resumeConfig.normal.sections;
    }
  }
});
</script>

<style scoped>
.print-resume {
  background: white;
  min-height: 100vh;
}

@media print {
  .print-resume {
    margin: 0;
    padding: 0;
  }
}
</style>
