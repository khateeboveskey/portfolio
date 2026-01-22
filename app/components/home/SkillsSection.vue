<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <UiSectionHeader subtitle="What I'm good at">Skills</UiSectionHeader>
    <div
      class="flex flex-wrap justify-center md:justify-between items-center gap-4"
    >
      <NuxtLink
        v-for="skill in skills?.hard"
        :key="skill.name"
        :to="skill.website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UIcon
          :name="skill.icon"
          class="size-16 md:size-24 lg:size-30 grayscale hover:grayscale-0 transition-all"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: skills } = await useAsyncData('skills', () =>
  queryCollection('skills').first(),
);
</script>
