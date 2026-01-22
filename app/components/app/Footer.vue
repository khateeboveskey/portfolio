<template>
  <footer class="bg-inverted text-inverted py-12 pb-20">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Brand Section -->
        <div class="flex flex-col justify-between space-y-4">
          <AppLogo with-name />
          <p class="text-sm text-inverted/80">
            Crafting digital experiences with passion and precision.
          </p>
          <p class="text-sm text-inverted/50">
            © {{ new Date().getFullYear() }} Khateeb. All rights reserved.
          </p>
        </div>

        <!-- About Section -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">About Me</h2>
          <p class="text-sm leading-relaxed text-inverted/80 md:text-base">
            {{ objective.split('.')[0] }}.
          </p>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Connect With Me</h2>
          <ul class="flex flex-wrap gap-4">
            <li v-for="(value, key, index) in accounts" :key="index">
              <a
                :href="value"
                :aria-label="`Follow on ${key}`"
                target="_blank"
                rel="noopener noreferrer"
                class="border-white/20 hover:border-white hover:bg-white/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all"
              >
                <i :class="`fa-brands fa-${key} text-white text-lg`" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { accounts, objective } from '@/assets/mydata.json';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
      integrity:
        'sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer',
    },
  ],
});
</script>
