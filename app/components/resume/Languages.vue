<template>
  <div v-if="data" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">LANGUAGES</h2>
    <div class="grid grid-cols-2 gap-2">
      <div v-for="(proficiency, language) in data" :key="language">
        <p class="text-sm">
          <strong>{{ language }}:</strong> {{ proficiency }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: personalInfo } = await usePersonalInfo();
const data = computed(() => personalInfo.value?.languages);
</script>
