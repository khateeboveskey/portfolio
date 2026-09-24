<template>
  <article class="px-4 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24 lg:px-16 xl:px-32">
    <div class="max-w-4xl">
      <UiArrowLink to="/skills" back>Back to skills</UiArrowLink>

      <template v-if="skill">
        <header
          class="mt-6 flex items-center gap-4 border-b-2 border-default pb-6"
        >
          <UIcon :name="skill.icon" class="size-12 shrink-0" />
          <h1 class="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {{ skill.name }}
          </h1>
        </header>

        <p v-if="skill.description" class="mt-6 text-lg">
          {{ skill.description }}
        </p>
        <p v-else class="mt-6 italic">Skill description coming soon.</p>

        <div v-if="skill.body" class="mt-6 whitespace-pre-line">
          {{ skill.body }}
        </div>

        <UiExternalLinkButton
          v-if="skill.website"
          :href="skill.website"
          class="mt-8"
        >
          Visit {{ websiteHost }}
        </UiExternalLinkButton>
      </template>

      <p v-else class="mt-8">Skill not found.</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data } = await useSkills();

const skill = computed(() =>
  data.value?.hard?.find((s) => slugify(s.name) === slug.value),
);

const websiteHost = computed(() => {
  try {
    return new URL(skill.value?.website ?? '').host.replace(/^www\./, '');
  } catch {
    return 'website';
  }
});

const title = computed(() => skill.value?.name ?? 'Skill');
const description = computed(() => {
  if (!skill.value) return 'Skill in the portfolio of A.Rahman Al-Khateeb.';
  if (skill.value.description?.trim()) return skill.value.description;
  return `${skill.value.name} — one of the tools and technologies used by A.Rahman Al-Khateeb across web and full-stack projects.`;
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'profile',
  twitterTitle: title,
  twitterDescription: description,
});

defineOgImage('Page', {
  title: () => skill.value?.name ?? 'Skill',
  subtitle: 'Skill in the Khateeb stack',
  badge: 'Skill',
});

useSchemaOrg([
  defineWebPage({
    name: title,
    description,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Skills', item: '/skills' },
      { name: title },
    ],
  }),
]);
</script>
