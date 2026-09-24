<template>
  <NuxtLink
    :to="`/blog/${stemToSlug(props.article.stem)}`"
    class="hover:bg-inverted hover:text-inverted group flex min-h-[12rem] flex-col items-start justify-between border-2 p-4 transition-colors md:h-48 md:flex-row md:items-center md:gap-10 md:px-6 md:py-6 lg:px-10 lg:py-9"
  >
    <div class="mb-4 flex-1 space-y-2 md:mb-0 md:space-y-3">
      <div
        class="text-primary group-hover:text-brand-400 text-sm font-medium tracking-wider uppercase md:text-base"
      >
        {{ props.article.category }}
        <time
          :datetime="toIsoDate(props.article.datePublished)"
          class="text-default group-hover:text-inverted ml-2 opacity-70"
        >
          {{ formatPublishedDate(props.article.datePublished) }}
        </time>
      </div>
      <component
        :is="`h${props.headingLevel}`"
        class="line-clamp-2 text-xl font-bold md:text-2xl"
      >
        {{ props.article.title }}
      </component>
    </div>
    <div
      class="flex w-full flex-1 flex-col items-start justify-between gap-3 md:min-h-full md:w-auto md:items-end md:gap-3"
    >
      <p
        class="line-clamp-3 text-left text-sm opacity-75 md:text-justify md:text-base"
      >
        {{ props.article.description }}
      </p>
      <!-- The card opens the article page on this site, which links out to
      the publication, so this is a byline rather than an external link. -->
      <p class="text-primary group-hover:text-brand-400 text-sm md:text-base">
        Published on {{ props.article.urlTo }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ArticlesCollectionItem } from '@nuxt/content';

type ArticleCardData = Pick<
  ArticlesCollectionItem,
  'stem' | 'title' | 'description' | 'category' | 'datePublished' | 'urlTo'
>;

const props = defineProps({
  article: {
    type: Object as PropType<ArticleCardData>,
    required: true,
  },
  /** 3 under a home-page section `h2`, 2 under a list page's `h1`. */
  headingLevel: {
    type: Number as PropType<2 | 3>,
    default: 3,
  },
});
</script>
