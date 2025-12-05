<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <UiSectionHeader subtitle="What I can deal with">Skills</UiSectionHeader>
    <NuxtMarquee
      class="text-neutral-500"
      pause-on-hover
      gradient
      auto-fill
      gradient-color="var(--color-accent-background)"
    >
      <div
        v-for="(skill, index) in skills.hard"
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
import { skills } from "@/assets/mydata.json";

const hoveredIndex = ref<number | null>(null);
</script>
