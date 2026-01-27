<template>
  <section class="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    <UiSectionHeader subtitle="What I've done"
      >Professional Experience</UiSectionHeader
    >
    <ul class="space-y-6 sm:space-y-8 md:space-y-11">
      <li v-for="(exp, index) in sortedExperience" :key="index" class="w-full">
        <ExperienceCard
          :job-title="exp.position"
          :company="exp.company"
          :company-url="exp.website"
          :order="index + 1"
          :year="exp.endDate ? new Date(exp.endDate).getFullYear() : 'PRESENT'"
          :category="exp.category"
          class="w-full"
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from '@/components/home/ProfessionalExpSection/ui/ExperienceCard.vue';

const { data: professionalExperience } = await useAsyncData('experience', () =>
  queryCollection('experience').order('endDate', 'DESC').all(),
);

const sortedExperience = professionalExperience.value?.slice().sort((a, b) => {
  if (!a.endDate && !b.endDate) return 0;
  if (!a.endDate) return -1; // a has null endDate => first
  if (!b.endDate) return 1; // b has null endDate => first
  const dateA = new Date(a.endDate).getTime();
  const dateB = new Date(b.endDate).getTime();
  return dateB - dateA;
});
</script>
