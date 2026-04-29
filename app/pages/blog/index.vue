<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <p v-if="!items?.length" class="text-muted">No articles yet.</p>
    <ul class="space-y-6">
      <li
        v-for="item in items"
        :key="item.stem"
        class="border border-default p-6 hover:bg-elevated transition"
      >
        <NuxtLink :to="`/blog/${stemToSlug(item.stem)}`" class="block">
          <span class="text-xs text-muted uppercase tracking-wide">{{
            item.category
          }}</span>
          <h2 class="text-2xl font-semibold mt-1">{{ item.title }}</h2>
          <p class="text-sm text-muted mt-1">{{ item.datePublished }}</p>
          <p class="mt-3 line-clamp-3">{{ item.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Blog' });

const { data: items } = await useAsyncData('blog-list', () =>
  queryCollection('articles').all(),
);
</script>
