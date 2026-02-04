<template>
  <div>
    <div class="print:hidden">
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
    <Resume v-if="resumeSections.length > 0" class="hidden print:block" :sections="resumeSections" />
  </div>
</template>

<script setup lang="ts">
import { resumeConfig } from '~/config/resume.config';
import type { ResumeSectionType } from '~/config/resume.config';

const { data } = await usePersonalInfo();

const resumeSections = ref<ResumeSectionType[]>([]);

// Set default sections for print layout
onMounted(() => {
  resumeSections.value = resumeConfig.normal.sections;
});

useHead({
  meta: [
    { name: 'author', content: data.value?.personalInfo.name },
    {
      name: 'description',
      content: data.value?.objective || 'Portfolio of Abdulrahman Al-Khateeb',
    },
    {
      name: 'keywords',
      content:
        'web development, software engineering, portfolio, projects, Abdulrahman Al-Khateeb',
    },
  ],
  titleTemplate: '%s | Khateeb',
});
</script>
