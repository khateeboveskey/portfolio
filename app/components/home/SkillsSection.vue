<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <UiSectionHeader subtitle="What I'm good at">Skills</UiSectionHeader>
    <div
      class="flex flex-wrap justify-center md:justify-between items-center gap-4"
    >
      <NuxtLink
        v-for="skill in featuredSkills"
        :key="skill.name"
        :to="`/skills/${slugify(skill.name)}`"
        :aria-label="skill.name"
        :title="skill.name"
        class="group"
      >
        <UIcon
          :name="skill.icon"
          class="size-16 md:size-24 lg:size-30 grayscale group-hover:grayscale-0 group-focus-visible:grayscale-0 transition-all"
        />
      </NuxtLink>
    </div>
    <div class="mt-8 flex justify-center">
      <UiArrowLink to="/skills">Show all skills</UiArrowLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: skills } = await useSkills();

const featuredSkills = computed(() =>
  featuredOrFallback(skills.value?.hard ?? []),
);
</script>
