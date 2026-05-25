<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Experience</h1>
    <p v-if="!items?.length" class="text-muted">No experience entries yet.</p>
    <ul class="space-y-6">
      <li
        v-for="item in items"
        :key="item.stem"
        class="border border-default p-6 hover:bg-elevated transition"
      >
        <NuxtLink :to="`/experience/${stemToSlug(item.stem)}`" class="block">
          <div class="flex justify-between items-baseline gap-4 flex-wrap">
            <h2 class="text-2xl font-semibold">{{ item.position }}</h2>
            <span class="text-sm text-muted"
              >{{ item.startDate }} – {{ item.endDate }}</span
            >
          </div>
          <p class="text-lg text-muted mt-1">{{ item.company }}</p>
          <p class="text-sm mt-2">{{ item.category }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData('experience-list', () =>
  queryCollection('experience').all(),
);

const title = 'Experience';
const description =
  "A.Rahman Al-Khateeb's professional experience — frontend, full-stack, and training roles across SaaS, charity tech, and educational organizations.";

useSeoMeta({
  title,
  ogTitle: 'Experience — Khateeb',
  description,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: '/experience',
  twitterTitle: 'Experience — Khateeb',
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'Experience',
  subtitle: 'Frontend, full-stack & training roles',
  badge: 'Career',
});

useSchemaOrg([
  defineWebPage({
    name: 'Experience',
    description,
  }),
  defineItemList({
    itemListElement:
      items.value?.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/experience/${stemToSlug(item.stem)}`,
        name: `${item.position} — ${item.company}`,
      })) ?? [],
  }),
]);
</script>
