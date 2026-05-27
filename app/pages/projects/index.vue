<template>
  <div class="container mx-auto px-4 py-12 max-w-6xl">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    <p v-if="!items?.length" class="text-muted">No projects yet.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="item in items"
        :key="item.stem"
        :to="`/projects/${stemToSlug(item.stem)}`"
        class="border border-default p-5 hover:bg-elevated transition flex flex-col gap-2"
      >
        <NuxtImg
          v-if="item.screenshot"
          :src="`/imgs/projects-screenshots/${item.screenshot}`"
          :alt="item.name"
          class="w-full aspect-video object-cover object-top border border-default"
          loading="lazy"
        />
        <h2 class="text-xl font-semibold mt-2">{{ item.name }}</h2>
        <p class="text-sm text-muted">{{ item.type }} · {{ item.year }}</p>
        <p class="text-xs text-muted">{{ item.stack.join(', ') }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData('projects-list', () =>
  queryCollection('projects').all(),
);

const title = 'Projects';
const description =
  'Selected projects by A.Rahman Al-Khateeb — multi-tenant SaaS dashboards, e-commerce, charity platforms, mobile admin apps, CRMs, and tooling. Built with Vue, Nuxt, TypeScript, Laravel, and TailwindCSS.';

useSeoMeta({
  title,
  ogTitle: 'Projects by Khateeb',
  description,
  ogDescription: description,
  ogType: 'website',
  ogUrl: '/projects',
  twitterTitle: 'Projects by Khateeb',
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'Projects',
  subtitle: 'Selected work — SaaS, e-commerce, dashboards',
  badge: 'Portfolio',
});

useSchemaOrg([
  defineWebPage({
    name: 'Projects',
    description,
  }),
  defineItemList({
    itemListElement:
      items.value?.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/projects/${stemToSlug(item.stem)}`,
        name: item.name,
      })) ?? [],
  }),
]);
</script>
