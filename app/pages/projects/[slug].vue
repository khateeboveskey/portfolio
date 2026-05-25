<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <NuxtLink to="/projects" class="text-sm text-muted hover:underline"
      >← Back to Projects</NuxtLink
    >
    <template v-if="item">
      <h1 class="text-4xl font-bold mt-4">{{ item.name }}</h1>
      <p class="text-sm text-muted mt-1">{{ item.type }} · {{ item.year }}</p>

      <NuxtImg
        v-if="item.screenshot"
        :src="`/imgs/projects-screenshots/${item.screenshot}`"
        :alt="item.name"
        class="w-full mt-6 border border-default"
        loading="lazy"
      />

      <p v-if="item.description" class="mt-6 text-lg">
        {{ item.description }}
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-3">Tech Stack</h2>
      <ul class="flex flex-wrap gap-2">
        <li
          v-for="tech in item.stack"
          :key="tech"
          class="px-3 py-1 border border-default text-sm"
        >
          {{ tech }}
        </li>
      </ul>

      <p v-if="item.url" class="mt-6">
        <a
          :href="item.url"
          target="_blank"
          class="text-primary hover:underline"
        >
          Visit project ↗
        </a>
      </p>

      <div v-if="item.body" class="mt-8 prose max-w-none whitespace-pre-line">
        {{ item.body }}
      </div>
    </template>
    <p v-else class="mt-8 text-muted">Project not found.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data: item } = await useAsyncData(
  () => `project-${slug.value}`,
  async () => {
    const all = await queryCollection('projects').all();
    return all.find((x) => stemToSlug(x.stem) === slug.value) ?? null;
  },
);

const pagePath = computed(() => `/projects/${slug.value}`);

const title = computed(() => item.value?.name ?? 'Project');
const description = computed(() => {
  if (!item.value) return 'Project by A.Rahman Al-Khateeb.';
  const base = item.value.description?.trim();
  if (base) return base;
  return `${item.value.name} — ${item.value.type} (${item.value.year}). Built with ${item.value.stack.join(', ')}.`;
});

const screenshotUrl = computed(() =>
  item.value?.screenshot
    ? `/imgs/projects-screenshots/${item.value.screenshot}`
    : undefined,
);

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'article',
  ogUrl: pagePath,
  ogImage: screenshotUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: screenshotUrl,
});

defineOgImage('Page', {
  title: () => item.value?.name ?? 'Project',
  subtitle: () =>
    item.value
      ? `${item.value.type} · ${item.value.year} · ${item.value.stack.slice(0, 4).join(' · ')}`
      : 'Project',
  badge: 'Project',
});

useSchemaOrg([
  {
    '@type': 'CreativeWork',
    name: () => item.value?.name,
    description: () => item.value?.description,
    image: screenshotUrl,
    url: () => item.value?.url ?? pagePath.value,
    keywords: () => item.value?.stack.join(', '),
    dateCreated: () => item.value?.year?.toString(),
    author: { '@type': 'Person', name: 'A.Rahman S. Al-Khateeb' },
  },
]);
</script>
