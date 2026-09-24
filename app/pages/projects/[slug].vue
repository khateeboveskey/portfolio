<template>
  <article class="px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:px-16 xl:px-32">
    <div class="max-w-4xl">
      <UiArrowLink to="/projects" back>Back to projects</UiArrowLink>

      <template v-if="item">
        <header class="mt-6 border-b-2 border-default pb-6">
          <p
            class="text-primary text-sm font-medium tracking-wider uppercase md:text-base"
          >
            {{ item.type }} &middot; {{ item.year }}
          </p>
          <h1 class="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {{ item.name }}
          </h1>
          <p v-if="item.description" class="mt-4 text-lg">
            {{ item.description }}
          </p>
        </header>

        <h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Tech Stack</h2>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="tech in item.stack"
            :key="tech"
            class="border border-default px-3 py-1 text-sm"
          >
            {{ tech }}
          </li>
        </ul>

        <UiExternalLinkButton v-if="item.url" :href="item.url" class="mt-8">
          Visit project
        </UiExternalLinkButton>

        <!-- Full-page capture, so it goes after the summary. Sized from the
        real file dimensions so nothing jumps when it arrives; eager but not
        high priority, since it's above the fold on desktop only. -->
        <NuxtImg
          v-if="item.screenshot"
          :src="`/imgs/projects-screenshots/${item.screenshot}`"
          :alt="`${item.name} screenshot`"
          :width="item.screenshotWidth"
          :height="item.screenshotHeight"
          sizes="sm:100vw lg:896px"
          format="webp"
          loading="eager"
          class="mt-10 h-auto w-full border-2 border-default"
        />

        <div v-if="item.body" class="mt-8 whitespace-pre-line">
          {{ item.body }}
        </div>
      </template>

      <p v-else class="mt-8">Project not found.</p>
    </div>
  </article>
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

// og:image / twitter:image come from defineOgImage below (1200×630). The raw
// screenshots are up to 8 MB and 14,000px tall, too big for social cards.
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'article',
  twitterTitle: title,
  twitterDescription: description,
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
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Projects', item: '/projects' },
      { name: title },
    ],
  }),
]);
</script>
