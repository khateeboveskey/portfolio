<template>
  <div>
    <HomeHeroSection />
    <HomeTitlesBar />
    <HomeAboutSection />
    <HomeProfessionalExpSection />
    <HomeSkillsSection />
    <HomeProjectsSection />
    <HomeSocialProofSection />
    <HomeArticlesSection />
    <HomeContactSection />
    <HomeResumeSection />
  </div>
</template>

<script setup lang="ts">
const title = "Khateeb's Portfolio — Full-stack Developer & Technical Trainer";
const description =
  'A.Rahman S. Al-Khateeb (Khateeb) — Full-stack Developer & Technical Trainer with 3+ years of experience. Vue, Nuxt, TypeScript, Laravel. Browse projects, articles, skills, and experience.';

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: '/',
  twitterTitle: title,
  twitterDescription: description,
});

defineOgImage('Page', {
  title: 'A.Rahman S. Al-Khateeb',
  subtitle: 'Full-stack Developer & Technical Trainer',
  badge: 'Portfolio',
});

useSchemaOrg([
  defineWebSite({
    name: "Khateeb's Portfolio",
    description,
    inLanguage: 'en-US',
  }),
  defineWebPage({
    name: title,
    description,
    primaryImageOfPage: '/imgs/me.png',
  }),
]);
</script>
