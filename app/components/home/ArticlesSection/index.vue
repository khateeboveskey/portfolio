<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <UiSectionHeader subtitle="What I've Written">Articles</UiSectionHeader>
    <ul class="space-y-4 md:space-y-6 lg:space-y-10">
      <li v-for="article in articles" :key="article.stem">
        <HomeArticlesSectionUiArticleCard :article="article" />
      </li>
    </ul>
    <div class="mt-8 flex justify-center">
      <UiArrowLink to="/blog">Show all articles</UiArrowLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData('articles', async () => {
  const all = await queryCollection('articles')
    .select(
      'stem',
      'title',
      'description',
      'category',
      'datePublished',
      'urlTo',
      'featured',
    )
    .all();
  return featuredOrFallback(sortByPublishedDate(all));
});
</script>
