<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <UiSectionHeader subtitle="What I can deal with">Skills</UiSectionHeader>
    <NuxtMarquee
      class="text-default/50"
      pause-on-hover
      gradient
      auto-fill
      gradient-color="var(--ui-bg)"
    >
      <div
        v-for="(skill, index) in hardSkills"
        :key="skill.name"
        :title="skill.name"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <i
          :class="[
            'text-5xl md:text-6xl lg:text-7xl me-8',
            { colored: hoveredIndex === index },
            skill.deviconClass,
          ]"
        />
      </div>
    </NuxtMarquee>
  </section>
</template>

<script setup lang="ts">
const { data: skills } = await useAsyncData('skills', () =>
  queryCollection('skills').first(),
);

const hardSkills = computed(() => skills.value?.hard ?? []);
const hoveredIndex = ref<number | null>(null);
</script>
