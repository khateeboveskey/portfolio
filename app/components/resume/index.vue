<template>
  <div>{{ info?.personalInfo.name }}</div>
</template>

<script setup lang="ts">
const { data: info } = await usePersonalInfo();
</script>
