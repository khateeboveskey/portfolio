<template>
  <a
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 border-2 border-default px-4 py-2 text-sm font-bold transition-colors hover:bg-inverted hover:text-inverted"
  >
    <slot />
    <span aria-hidden="true">&nearr;</span>
    <span class="sr-only">(opens in a new tab)</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string }>();
</script>
