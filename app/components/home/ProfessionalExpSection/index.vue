<template>
  <section class="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    <UiSectionHeader subtitle="What I've done"
      >Professional Experience</UiSectionHeader
    >
    <ul class="space-y-6 sm:space-y-8 md:space-y-11">
      <li
        v-for="(exp, index) in professionalExperience"
        :key="index"
        class="w-full"
      >
        <ExperienceCard
          :job-title="exp.position"
          :company="exp.company"
          :company-url="exp.website"
          :order="index + 1"
          :year="parseInt(exp.startDate.slice(-4))"
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
</script>
