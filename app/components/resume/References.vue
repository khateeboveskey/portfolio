<template>
  <div v-if="data && data.length > 0" class="mb-6">
    <h2 class="mb-3 border-b-2 border-gray-800 text-xl font-bold">
      REFERENCES
    </h2>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div v-for="ref in data" :key="ref._path" class="text-sm">
        <p class="font-semibold">{{ ref.name }}</p>
        <p class="text-gray-700">{{ ref.position }}</p>
        <p class="text-gray-600">{{ ref.degree }}</p>
        <p class="text-gray-600">{{ ref.location }}</p>
        <p v-if="ref.contact" class="text-gray-600">{{ ref.contact }}</p>
        <div v-if="ref.contacts">
          <p v-for="contact in ref.contacts" :key="contact" class="text-gray-600">
            {{ contact }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('references', () =>
  queryCollection('references').all(),
);
</script>
