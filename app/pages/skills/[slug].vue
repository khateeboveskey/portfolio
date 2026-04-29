<template>
  <UContainer class="py-12">
    <NuxtLink to="/skills" class="text-sm text-muted hover:underline"
      >&larr; Back to skills</NuxtLink
    >

    <article v-if="skill" class="mt-4">
      <header class="flex items-center gap-4 border-b-2 border-default pb-6">
        <i :class="skill.icon" class="text-5xl" />
        <div>
          <h1 class="text-3xl font-bold sm:text-4xl">{{ skill.name }}</h1>
          <a
            v-if="skill.website"
            :href="skill.website"
            target="_blank"
            rel="noopener"
            class="mt-1 inline-block text-sm hover:underline"
            >{{ skill.website }}</a
          >
        </div>
      </header>

      <section class="mt-6">
        <p v-if="skill.description">{{ skill.description }}</p>
        <p v-else class="text-muted italic">Skill description coming soon.</p>
      </section>

      <section v-if="skill.body" class="mt-6 whitespace-pre-line">
        {{ skill.body }}
      </section>
    </article>

    <p v-else class="mt-8 text-muted">Skill not found.</p>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));

const { data } = await useAsyncData(`skill-${slug.value}`, () =>
  queryCollection('skills').first(),
);

const skill = computed(() =>
  data.value?.hard?.find((s) => slugify(s.name) === slug.value),
);

useHead(() => ({
  title: skill.value?.name ?? 'Skill',
}));
</script>
