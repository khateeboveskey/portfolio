<template>
	<section class="flex flex-col items-center justify-between px-4 pt-4 sm:pt-12 md:flex-row md:px-32 md:pt-8">
		<div class="mb-8 text-center md:mb-12 md:w-1/3 md:text-left">
			<h1 class="m-4 mb-4 text-3xl font-bold sm:m-0 sm:mb-6 sm:text-4xl md:text-4xl lg:text-5xl">
				{{ $t('hero.greeting') }} {{ $t('hero.name') }}
				<MyLogo class="inline-block h-5 -translate-y-1 sm:h-6 md:h-8 lg:h-10" />
			</h1>
			<p class="mb-2 text-xl font-semibold sm:mb-3 sm:text-2xl md:text-3xl">
				{{ $t('hero.title') }}
			</p>
			<p class="mb-6 text-base opacity-90 sm:mb-8 sm:text-lg md:text-xl">
				{{ $t('hero.description') }}
			</p>
			<div class="flex gap-3 justify-center md:justify-start">
				<CTAButton :text="$t('hero.cta.contact')" class="w-full sm:w-auto" />
				<UBadge v-if="isAvailableToWork" color="green" variant="subtle" size="lg">
					{{ $t('hero.availability') }}
				</UBadge>
			</div>
		</div>
		<div class="relative w-full md:me-14 md:w-1/2">
			<MyLogo class="stroke-accent absolute inset-0 z-0 h-full w-full overflow-visible fill-transparent stroke-20" />
			<NuxtImg quality="50" format="webp" preload src="/imgs/me.png" alt="Me" class="relative mx-auto saturate-0" sizes="sm:300px md:384px" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { isAvailableToWork } from 'assets/mydata.json';
</script>