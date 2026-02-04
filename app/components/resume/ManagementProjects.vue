<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      PROJECT MANAGEMENT EXPERIENCE
    </h2>
    <div class="grid grid-cols-1 gap-2">
      <div v-for="project in data" :key="project._path">
        <p class="text-sm">
          <strong>{{ project.project }}</strong> - {{ project.role }} ({{
            project.methodology
          }})
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('managementProjects', () =>
  queryCollection('managementProjects').all(),
);
</script>
