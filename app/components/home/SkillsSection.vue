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
      >
        <UIcon
          :name="skill.icon"
          class="size-16 md:size-24 lg:size-30 grayscale hover:grayscale-0 transition-all"
        />
      </NuxtLink>
    </div>
    <div class="mt-8 flex justify-center">
      <NuxtLink
        to="/skills"
        class="text-primary text-sm font-medium uppercase tracking-widest hover:underline"
      >
        Show all skills &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: skills } = await useAsyncData('skills:home', () =>
  queryCollection('skills').first(),
);

const featuredSkills = computed(() =>
  featuredOrFallback(skills.value?.hard ?? []),
);
</script>
