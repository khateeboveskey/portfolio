<template>
  <NuxtLink
    v-if="withName"
    to="/"
    class="flex flex-row items-center gap-2 *:transition-transform"
  >
    <!-- Decorative: the visible "Khateeb" text already names the link. -->
    <img src="/logo.svg" alt="" class="h-6 w-auto aspect-[979.79/504.34]" />
    <span class="text-2xl font-black md:text-3xl">Khateeb</span>
  </NuxtLink>
  <!-- Decorative mark used inside headings and section dividers. The aspect
  ratio reserves its width before the SVG loads, so text doesn't shift. -->
  <img v-else src="/logo.svg" alt="" class="aspect-[979.79/504.34]" />
</template>

<script setup lang="ts">
defineProps({
  withName: Boolean,
});
</script>
