<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      ROBOTICS PROJECTS
    </h2>
    <div v-for="project in data" :key="project._path" class="mb-3">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-base font-semibold">{{ project.title }}</h3>
          <p class="text-sm text-gray-700">{{ project.description }}</p>
          <p class="text-sm text-gray-600">
            <strong>Skills:</strong> {{ project.skillsUsed.join(', ') }}
          </p>
        </div>
        <div class="text-sm text-gray-600">{{ project.year }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('roboticsProjects', () =>
  queryCollection('roboticsProjects').order('year', 'DESC').all(),
);
</script>
