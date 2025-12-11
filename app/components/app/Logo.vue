<template>
  <NuxtLink
    v-if="withName"
    to="/"
    class="group flex flex-row items-center gap-2 *:transition-transform"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="text-primary fill-current h-6 group-hover:rotate-60"
      viewBox="0 0 1120 1120"
    >
      <polygon
        points="1118.5,408.4 968.5,148.6 708.5,298.7 708.5,-1.5 408.5,-1.5 408.5,298.7 148.5,148.6 -1.5,408.4 258.5,558.5 -1.5,708.6 148.5,968.4 408.5,818.3 408.5,1118.5 708.5,1118.5 708.5,818.3 968.5,968.4 1118.5,708.6 858.5,558.5"
      />
    </svg>
    <h1 class="text-2xl font-black md:text-3xl">Khateeb</h1>
  </NuxtLink>
  <svg
    v-else
    xmlns="http://www.w3.org/2000/svg"
    class="text-primary fill-current"
    viewBox="0 0 1120 1120"
  >
    <polygon
      points="1118.5,408.4 968.5,148.6 708.5,298.7 708.5,-1.5 408.5,-1.5 408.5,298.7 148.5,148.6 -1.5,408.4 258.5,558.5 -1.5,708.6 148.5,968.4 408.5,818.3 408.5,1118.5 708.5,1118.5 708.5,818.3 968.5,968.4 1118.5,708.6 858.5,558.5"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  withName: Boolean,
});
</script>
