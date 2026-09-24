<template>
  <section
    class="flex flex-col items-center justify-between px-4 pt-4 sm:pt-12 md:px-8 lg:flex-row lg:px-16 lg:pt-8 xl:px-32"
  >
    <div class="mb-8 text-default text-center md:mb-12 lg:w-1/3 lg:text-left">
      <h1
        class="m-4 mb-4 text-3xl font-bold sm:m-0 sm:mb-6 sm:text-4xl lg:text-5xl"
      >
        Hi, I'm Khateeb. A Fullstack Developer
        <AppLogo
          class="inline-block h-5 -translate-y-1 sm:h-6 md:h-8 lg:h-10"
        />
        Who Loves to Code.
      </h1>
      <p class="mb-6 text-base opacity-90 sm:mb-8 sm:text-lg md:text-2xl">
        I code, train, and do good stuff.
      </p>
      <UiCTAButton
        text="Got an idea?"
        class="w-full sm:w-auto justify-center lg:justify-start"
      />
    </div>
    <div class="relative w-full lg:me-14 lg:w-1/2">
      <AppLogo class="absolute inset-0 z-0 h-full w-full" />
      <!-- The LCP element: requested eagerly at high priority straight from
      the HTML. Its intrinsic size is fixed, so width/height only set the
      aspect ratio and the CSS width does the sizing. -->
      <NuxtImg
        src="/imgs/me.png"
        alt="A.Rahman Al-Khateeb (Khateeb)"
        width="384"
        height="545"
        sizes="300px sm:384px"
        quality="50"
        format="webp"
        loading="eager"
        fetchpriority="high"
        class="relative mx-auto h-auto w-[300px] saturate-0 sm:w-96"
      />
    </div>
  </section>
</template>
