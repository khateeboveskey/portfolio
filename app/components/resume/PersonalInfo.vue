<template>
  <div v-if="data" class="mb-8">
    <div class="border-b-2 border-gray-800 pb-2 text-center">
      <h1 class="text-3xl font-bold">{{ data.personalInfo.name }}</h1>
      <p class="text-lg text-gray-700">{{ data.personalInfo.occupation }}</p>
    </div>
    <div class="mt-4 grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
      <div>
        <p><strong>Email:</strong> {{ data.contactInfo.email }}</p>
        <p><strong>Phone:</strong> {{ data.contactInfo.phone }}</p>
        <p v-if="data.contactInfo.website">
          <strong>Website:</strong> {{ data.contactInfo.website }}
        </p>
      </div>
      <div>
        <p><strong>Address:</strong> {{ data.personalInfo.address }}</p>
        <p><strong>DOB:</strong> {{ formatDate(data.personalInfo.dateOfBirth) }}</p>
        <p><strong>Nationality:</strong> {{ data.personalInfo.nationality }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await usePersonalInfo();

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
