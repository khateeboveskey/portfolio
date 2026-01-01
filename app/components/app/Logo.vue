<template>
  <NuxtLink
    v-if="withName"
    to="/"
    class="flex flex-row items-center gap-2 *:transition-transform"
  >
    <img src="/logo.svg" alt="khateeb-logo" class="text-primary h-6" />
    <h1 class="text-2xl font-black md:text-3xl">Khateeb</h1>
  </NuxtLink>
  <img v-else src="/logo.svg" alt="khateeb-logo" class="fill-green-500 h-6" />
</template>

<script setup lang="ts">
defineProps({
  withName: Boolean,
});
</script>
