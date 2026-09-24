<template>
  <section class="w-full px-4 md:px-8 lg:px-16 xl:px-32">
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
          :year="experienceEndLabel(exp.endDate)"
          :category="exp.category"
          :to="`/experience/${stemToSlug(exp.stem)}`"
          class="w-full"
        />
      </li>
    </ul>
    <div class="mt-8 flex justify-center">
      <UiArrowLink to="/experience">Show all experience</UiArrowLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from '@/components/home/ProfessionalExpSection/ui/ExperienceCard.vue';
const { data: professionalExperience } = await useAsyncData(
  'experience',
  async () => {
    // Only what the cards render: keeps achievements out of the payload.
    const all = await queryCollection('experience')
      .select(...EXPERIENCE_CARD_FIELDS)
      .all();
    return sortExperienceByEndDate(featuredOrFallback(all));
  },
);
</script>
