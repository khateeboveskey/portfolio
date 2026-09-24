<template>
  <section id="projects">
    <div class="px-4 md:px-8 lg:px-16 xl:px-32">
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
      <div class="mt-8 flex justify-center">
        <UiArrowLink to="/projects">Show all projects</UiArrowLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects:home', async () => {
  // Only what the cards render: keeps descriptions out of the payload.
  const all = await queryCollection('projects')
    .select(...PROJECT_CARD_FIELDS)
    .all();
  return featuredOrFallback(sortProjectsByRecency(all));
});
</script>
