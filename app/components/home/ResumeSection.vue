<template>
  <section class="mt-32 py-16 pt-32 bg-muted">
    <div
      class="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row md:justify-between md:px-8"
    >
      <div class="text-center md:text-left">
        <h3 class="text-dimmed mb-2 text-lg font-medium md:text-xl">
          This was me in a nutshell
        </h3>
        <h2 class="text-default text-2xl font-bold md:text-3xl lg:text-4xl">
          Want to know more? download my resume
        </h2>
      </div>
      <UButton
        href="khateeb-resume.pdf"
        target="_blank"
        icon="material-symbols:download-sharp"
        download
        size="xl"
      >
        Download Resume
      </UButton>
    </div>
  </section>
</template>
