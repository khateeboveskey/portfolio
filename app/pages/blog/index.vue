<template>
  <section class="px-4 pb-16 md:px-8 md:pb-24 lg:px-16 xl:px-32">
    <UiSectionHeader as="h1" subtitle="What I've Written">Blog</UiSectionHeader>
    <p v-if="!items?.length" class="text-center">No articles yet.</p>
    <ul class="space-y-4 md:space-y-6 lg:space-y-10">
      <li v-for="item in items" :key="item.stem">
        <HomeArticlesSectionUiArticleCard :article="item" :heading-level="2" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const { data: items } = await useAsyncData('blog-list', async () =>
  sortByPublishedDate(
    await queryCollection('articles')
      .select(
        'stem',
        'title',
        'description',
        'category',
        'datePublished',
        'urlTo',
      )
      .all(),
  ),
);

const title = 'Blog';
const description =
  "Articles by A.Rahman Al-Khateeb on UX, software design, and engineering principles — including Doherty Threshold, Norman's Doors, Aesthetic-Usability Effect, model collapse, and more.";

useSeoMeta({
  title,
  ogTitle: 'Blog — Articles by Khateeb',
  description,
  ogDescription: description,
  ogType: 'website',
  twitterTitle: 'Blog — Articles by Khateeb',
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'Blog',
  subtitle: 'Articles on UX, design & engineering',
  badge: 'Writing',
});

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
    name: 'Blog',
    description,
  }),
  defineItemList({
    itemListElement:
      items.value?.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `/blog/${stemToSlug(item.stem)}`,
        name: item.title,
      })) ?? [],
  }),
]);
</script>
