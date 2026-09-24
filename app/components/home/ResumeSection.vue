<script setup lang="ts">
const { generateResume, isGenerating } = useResumeGenerator();
</script>

<template>
  <section class="mt-32 py-16 pt-32 bg-muted">
    <div
      class="flex flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:px-8 lg:px-16 xl:px-32"
    >
      <div class="text-center md:text-left">
        <p class="text-dimmed mb-2 text-lg font-medium md:text-xl">
          This was me in a nutshell
        </p>
        <h2 class="text-default text-2xl font-bold md:text-3xl lg:text-4xl">
          Want to know more? Download my resume
        </h2>
      </div>
      <UButton
        icon="material-symbols:download-sharp"
        size="xl"
        :loading="isGenerating"
        @click="generateResume"
      >
        Download Resume
      </UButton>
    </div>
  </section>
</template>
