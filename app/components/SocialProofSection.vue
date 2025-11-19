<template>
  <section class="px-4 md:px-8 lg:px-16 xl:px-32">
    <SectionHeader subtitle="What greate people say about me">Social Proof</SectionHeader>
    <div class="flex flex-column md:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 justify-center">
      <div v-for="(reference, index) in socialProof" :key="index" class="bg-accent-background-muted flex flex-col w-4/5 md:w-1/2 lg:w-1/3">
        <div class="bg-accent p-4 sm:p-5">
          <h4 class="text-xl sm:text-2xl font-bold text-white mb-2 text-center">{{ reference.name }}</h4>
          <span class="text-xs sm:text-sm text-white font-lighter block text-center">{{ reference.degree }}</span>
          <span class="text-xs sm:text-sm text-white font-lighter block text-center">{{ reference.position }}</span>
        </div>
        <div class="relative overflow-hidden flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-quote absolute -bottom-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-50 lg:h-50 opacity-5">
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </svg>
          <p class="text-accent-foreground italic p-4 sm:p-6 lg:p-10 text-sm sm:text-base relative z-10">"{{ reference.quote }}"</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialProof } from 'assets/mydata.json';
</script>