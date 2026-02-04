<template>
  <div v-if="data" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">SKILLS</h2>
    
    <div v-if="data.hard && data.hard.length > 0" class="mb-3">
      <h3 class="mb-2 text-base font-semibold">Technical Skills</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in data.hard"
          :key="skill.name"
          class="rounded bg-gray-200 px-3 py-1 text-sm"
        >
          {{ skill.name }}
        </span>
      </div>
    </div>
    
    <div v-if="data.soft && data.soft.length > 0" class="mb-3">
      <h3 class="mb-2 text-base font-semibold">Soft Skills</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in data.soft"
          :key="skill"
          class="rounded bg-gray-200 px-3 py-1 text-sm"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('skills', () =>
  queryCollection('skills').first(),
);
</script>
