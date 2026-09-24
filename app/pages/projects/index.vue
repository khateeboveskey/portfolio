<template>
  <section class="px-4 pb-16 md:px-8 md:pb-24 lg:px-16 xl:px-32">
    <UiSectionHeader as="h1" subtitle="What I've Made"
      >Projects</UiSectionHeader
    >
    <p v-if="!items?.length" class="text-center">No projects yet.</p>
    <div
      class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
    >
      <HomeProjectsSectionUiProjectCard
        v-for="(item, index) in items"
        :key="item.stem"
        :project="item"
        :priority="index === 0"
        :heading-level="2"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData('projects-list', async () =>
  sortProjectsByRecency(
    await queryCollection('projects')
      .select(...PROJECT_CARD_FIELDS)
      .all(),
  ),
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
    '@type': 'CollectionPage',
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
