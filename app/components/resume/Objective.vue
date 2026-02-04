<template>
  <div v-if="data" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      OBJECTIVE
    </h2>
    <p class="text-justify text-sm">{{ data.objective }}</p>
  </div>
</template>

<script setup lang="ts">
const { data } = await usePersonalInfo();
</script>
