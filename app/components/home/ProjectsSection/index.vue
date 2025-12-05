<template>
  <section id="projects">
    <div class="container mx-auto px-4">
      <UiSectionHeader subtitle="What I've Made">Projects</UiSectionHeader>
      <div
        class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        <HomeProjectsSectionUiProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "@/assets/mydata.json";
</script>
