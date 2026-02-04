<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">EDUCATION</h2>
    <div v-for="edu in data" :key="edu._path" class="mb-3">
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-lg font-semibold">{{ edu.degree }}</h3>
          <p class="text-sm italic text-gray-700">
            {{ edu.university || edu.institution || edu.school }}
          </p>
          <p class="text-sm text-gray-600">{{ edu.location }}</p>
        </div>
        <div class="text-right text-sm text-gray-600">
          {{ edu.startYear }} - {{ edu.endYear }}
        </div>
      </div>
      <div v-if="edu.relevantCoursework" class="mt-2">
        <p class="text-sm font-semibold">Relevant Coursework:</p>
        <p class="text-sm text-gray-700">
          {{ edu.relevantCoursework.join(', ') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('education', () =>
  queryCollection('education').order('endYear', 'DESC').all(),
);
</script>
