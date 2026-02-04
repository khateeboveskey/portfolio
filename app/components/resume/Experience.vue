<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      PROFESSIONAL EXPERIENCE
    </h2>
    <div v-for="exp in data" :key="exp._path" class="mb-4">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold">{{ exp.position }}</h3>
          <p class="text-sm italic text-gray-700">{{ exp.company }}</p>
        </div>
        <div class="text-right text-sm text-gray-600">
          {{ formatDate(exp.startDate) }} - {{ formatDate(exp.endDate) }}
        </div>
      </div>
      <ul class="ml-5 mt-2 list-disc text-sm">
        <li v-for="(achievement, idx) in exp.achievements" :key="idx">
          {{ achievement }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('experience', () =>
  queryCollection('experience').order('endDate', 'DESC').all(),
);

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};
</script>
