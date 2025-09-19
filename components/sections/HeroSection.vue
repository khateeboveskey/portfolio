<template>
	<section class="flex flex-col items-center justify-between px-4 pt-4 sm:pt-12 md:flex-row md:px-32 md:pt-8">
		<div class="mb-8 text-center md:mb-12 md:w-1/3 md:text-left">
			<h1 class="m-4 mb-4 text-3xl font-bold sm:m-0 sm:mb-6 sm:text-4xl md:text-4xl lg:text-5xl">
				Hi, I'm Khateeb. A Full-stack Developer
				<UiMyLogo class="inline-block h-5 -translate-y-1 sm:h-6 md:h-8 lg:h-10" />
				Who Loves to Code.
			</h1>
			<p class="mb-6 text-base opacity-90 sm:mb-8 sm:text-lg md:text-2xl">
				I code, train, and do good stuff.
			</p>
			<UiCTAButton text="Got an idea?" class="w-full sm:w-auto" />
		</div>
		<div class="relative w-full md:me-14 md:w-1/2">
			<UiMyLogo class="stroke-accent absolute inset-0 z-0 h-full w-full overflow-visible fill-transparent stroke-20" />
			<NuxtImg quality="50" format="webp" preload src="/imgs/me.png" alt="Me" class="relative mx-auto saturate-0" sizes="sm:300px md:384px" />
		</div>
	</section>
</template>