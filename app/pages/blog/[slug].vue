<template>
  <article class="px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:px-16 xl:px-32">
    <div class="max-w-4xl">
      <UiArrowLink to="/blog" back>Back to blog</UiArrowLink>

      <template v-if="item">
        <header class="mt-6 border-b-2 border-default pb-6">
          <p
            class="text-primary text-sm font-medium tracking-wider uppercase md:text-base"
          >
            {{ item.category }} &middot;
            <time :datetime="toIsoDate(item.datePublished)">
              {{ formatPublishedDate(item.datePublished) }}
            </time>
          </p>
          <h1 class="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {{ item.title }}
          </h1>
          <p class="mt-4 text-lg">{{ item.description }}</p>
        </header>

        <div v-if="item.body" class="mt-6 whitespace-pre-line">
          {{ item.body }}
        </div>
        <p v-else class="mt-6 italic">Full content coming soon.</p>

        <UiExternalLinkButton v-if="item.url" :href="item.url" class="mt-8">
          Read on {{ item.urlTo }}
        </UiExternalLinkButton>
      </template>

      <p v-else class="mt-8">Article not found.</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: item } = await useAsyncData(
  () => `article-${slug.value}`,
  async () => {
    const all = await queryCollection('articles').all();
    return all.find((a) => stemToSlug(a.stem) === slug.value) ?? null;
  },
);

const title = computed(() => item.value?.title ?? 'Article');
const description = computed(
  () =>
    item.value?.description ??
    'Article on the Khateeb Portfolio blog — UX, software design, and engineering.',
);
const publishedAt = computed(() => toIsoDate(item.value?.datePublished));

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'article',
  twitterTitle: title,
  twitterDescription: description,
  articlePublishedTime: publishedAt,
  articleAuthor: ['A.Rahman S. Al-Khateeb'],
  articleSection: () => item.value?.category,
});

defineOgImage('Page', {
  title: () => item.value?.title ?? 'Article',
  subtitle: () => item.value?.category ?? 'Article',
  badge: 'Blog',
});

useSchemaOrg([
  defineArticle({
    headline: () => item.value?.title,
    description: () => item.value?.description,
    datePublished: publishedAt,
    articleSection: item.value ? [item.value.category] : undefined,
    inLanguage: 'en-US',
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: title },
    ],
  }),
]);
</script>
