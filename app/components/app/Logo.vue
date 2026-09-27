<template>
  <NuxtLink
    v-if="withName"
    to="/"
    class="flex flex-row items-center gap-2 *:transition-transform"
  >
    <img src="/logo.svg" alt="" class="h-6 w-auto aspect-[979.79/504.34]" />
    <span class="text-2xl font-black md:text-3xl">Khateeb</span>
  </NuxtLink>
  <img v-else src="/logo.svg" alt="" class="aspect-[979.79/504.34]" />
</template>

<script setup lang="ts">
// Both variants are decorative (alt=""): with the name, the visible "Khateeb"
// text labels the link; without it, the mark sits inside headings and section
// dividers. The aspect ratio reserves the mark's width before the SVG loads.
//
// Keep each v-if/v-else branch a single element with nothing between them
// (not even an HTML comment): in dev, Vue keeps comments, the branch becomes a
// fragment, and the size classes passed in by the parent are silently dropped.
defineProps({
  withName: Boolean,
});
</script>
