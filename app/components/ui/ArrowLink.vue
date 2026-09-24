<template>
  <NuxtLink
    :to="props.to"
    class="text-primary inline-flex items-center gap-2 py-1 text-sm font-medium tracking-widest uppercase hover:underline"
  >
    <span v-if="props.back" aria-hidden="true">&larr;</span>
    <slot />
    <span v-if="!props.back" aria-hidden="true">&rarr;</span>
  </NuxtLink>
</template>

<script setup lang="ts">
// The site's text-link style: "Show all projects →" / "← Back to blog".
const props = defineProps<{
  to: string;
  /** Point the arrow back (for "Back to …" links). */
  back?: boolean;
}>();
</script>
