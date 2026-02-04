<template>
  <section class="mt-32 bg-muted py-16 pt-32">
    <div
      class="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:px-8"
    >
      <div class="text-center md:text-left">
        <h3 class="text-dimmed mb-2 text-lg font-medium md:text-xl">
          This was me in a nutshell
        </h3>
        <h2 class="text-default text-2xl font-bold md:text-3xl lg:text-4xl">
          Want to know more? download my resume
        </h2>
      </div>
      <div class="flex items-center gap-4">
        <USelect
          v-model="selectedVersion"
          :options="resumeVersionOptions"
          size="xl"
          class="w-64"
        />
        <UButton
          icon="material-symbols:download-sharp"
          size="xl"
          @click="downloadResume"
        >
          Download
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resumeVersions, resumeConfig } from '~/config/resume.config';

const selectedVersion = ref<'summarized' | 'normal' | 'detailed'>('normal');

const resumeVersionOptions = resumeVersions.map((v) => ({
  value: v.value,
  label: v.label,
}));

const downloadResume = () => {
  // Get the sections for the selected version
  const sections = resumeConfig[selectedVersion.value].sections;
  
  // Store the selected version and sections in sessionStorage for the print page
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('resumeVersion', selectedVersion.value);
    sessionStorage.setItem('resumeSections', JSON.stringify(sections));
    
    // Open a new window for printing
    const printWindow = window.open('/print-resume', '_blank');
    
    // After the window loads, trigger print
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        setTimeout(() => {
          printWindow.print();
        }, 500);
      });
    }
  }
};
</script>
