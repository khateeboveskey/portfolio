<template>
  <UContainer class="py-12">
    <NuxtLink to="/blog" class="text-sm text-muted hover:underline"
      >&larr; Back to blog</NuxtLink
    >

    <article v-if="item" class="mt-4">
      <header class="border-b-2 border-default pb-6">
        <p class="text-sm uppercase tracking-wider text-muted">
          {{ item.category }} &middot; {{ item.datePublished }}
        </p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">{{ item.title }}</h1>
        <p class="mt-3">{{ item.description }}</p>
      </header>

      <section v-if="item.body" class="mt-6 whitespace-pre-line">
        {{ item.body }}
      </section>
      <section v-else class="mt-6 text-muted italic">
        Full content coming soon.
      </section>

      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener"
        class="mt-8 inline-block border-2 border-default px-4 py-2 text-sm font-bold hover:bg-inverted hover:text-inverted"
      >
        Read on {{ item.urlTo }} &rarr;
      </a>
    </article>

    <p v-else class="mt-8 text-muted">Article not found.</p>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: items } = await useAsyncData(`article-${slug.value}`, () =>
  queryCollection('articles').all(),
);

const item = computed(() =>
  items.value?.find((a) => stemToSlug(a.stem) === slug.value),
);

const pagePath = computed(() => `/blog/${slug.value}`);

const title = computed(() => item.value?.title ?? 'Article');
const description = computed(
  () =>
    item.value?.description ??
    'Article on the Khateeb Portfolio blog — UX, software design, and engineering.',
);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'article',
  ogUrl: pagePath,
  twitterTitle: title,
  twitterDescription: description,
  articlePublishedTime: () => item.value?.datePublished,
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
    datePublished: () => item.value?.datePublished,
    articleSection: () => item.value?.category,
    inLanguage: 'en-US',
  }),
]);
</script>
