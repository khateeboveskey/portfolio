<template>
	<section id="about" class="flex flex-col px-4 pt-4 sm:pt-12 md:px-32 md:pt-24">
		<div class="flex flex-col justify-start gap-10 md:flex-row md:gap-20">
			<div class="flex flex-col gap-8 flex-1/2">
				<span class="text-accent-foreground dark:text-gray-100 text-center text-xl font-semibold text-nowrap md:text-left md:text-3xl">
					Abdulrahman
					<MyLogo class="mx-2 inline-block h-5 -translate-y-0.5 sm:mx-4 sm:h-5 md:mx-2 md:h-5" />
					Al-Khateeb
				</span>
				<h2 class="text-accent-foreground dark:text-gray-100 text-left text-4xl font-bold md:text-left md:text-5xl">
					{{ $t('about.tagline') }}
				</h2>
			</div>
			<div class="flex flex-col justify-between flex-1/2">
				<p class="text-xl md:text-2xl dark:text-gray-300">
					{{ objective }}
				</p>
			</div>
		</div>
		<StatesBar />
	</section>
</template>

<script setup lang="ts">
import { objective } from 'assets/mydata.json';
</script>
