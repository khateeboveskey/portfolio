<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      COURSES & CERTIFICATIONS
    </h2>
    <div class="grid grid-cols-1 gap-2">
      <div v-for="course in data" :key="course._path">
        <p class="text-sm">
          <strong>{{ course.title }}</strong> - {{ course.host }} ({{
            course.year
          }})
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('courses', () =>
  queryCollection('courses').order('year', 'DESC').all(),
);
</script>
