<template>
	<a
		:href="props.companyUrl"
		target="_blank"
		class="border-accent-foreground hover:bg-accent-foreground hover:text-accent-background group flex flex-col items-start justify-between gap-4 border-2 p-4 py-6 sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
		<span class="flex flex-row gap-3 sm:gap-4 md:gap-5">
			<!-- Number -->
			<span
				class="bg-accent-foreground text-accent-background group-hover:bg-accent aspect-square px-3 py-2 text-base font-semibold sm:px-4 sm:py-3 sm:text-lg md:px-5 md:text-xl">
				{{ props.order }}
			</span>
			<!-- Job Titles -->
			<span>
				<h3 class="text-lg font-bold sm:text-xl md:text-2xl">{{ props.jobTitle }}</h3>
				<p class="text-sm sm:text-base">{{ props.company }}</p>
			</span>
		</span>
		<!-- Year -->
		<span
			class="flex w-full flex-row justify-between gap-2 text-base font-medium sm:gap-3 sm:text-lg md:w-auto md:gap-4">
			<span class="tracking-wider uppercase">{{ props.category }}</span>
			<span class="text-accent">{{ props.year }}</span>
		</span>
	</a>
</template>

<script setup lang="ts">
const props = defineProps({
	jobTitle: String,
	company: String,
	category: String,
	companyUrl: String,
	year: Number,
	order: Number,
});
</script>
