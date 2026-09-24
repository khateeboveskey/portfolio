<template>
  <ul class="flex flex-wrap gap-3 md:gap-4">
    <li v-for="link in links" :key="link.key">
      <a
        :href="link.url"
        :aria-label="`${link.label} (opens in a new tab)`"
        target="_blank"
        rel="noopener noreferrer"
        class="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <UIcon :name="`fa6-brands:${link.key}`" class="size-[1.125rem]" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const LABELS: Record<string, string> = {
  facebook: 'Facebook',
  'x-twitter': 'X (Twitter)',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  youtube: 'YouTube',
};

const { data: info } = await usePersonalInfo();

const links = computed(() =>
  Object.entries(info.value?.accounts ?? {})
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, url]) => ({ key, url, label: LABELS[key] ?? key })),
);
</script>
