<template>
	<section class="px-4 md:px-8 lg:px-16 xl:px-32">
		<UiSectionHeader subtitle="What I can deal with">Skills</UiSectionHeader>
		<!-- <div class="grid grid-cols-4 place-content-center  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
			<div v-for="(skill, index) in skills.hard" :key="skill.name" class="text-neutral-500 hover:text-accent-background grid aspect-square place-items-center" :title="skill.name" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
				<i :class="[
					'text-5xl md:text-6xl lg:text-7xl',
					{ colored: hoveredIndex === index },
					skill.deviconClass,
				]"></i>
			</div>
		</div> -->
		<NuxtMarquee class="text-neutral-500" pauseOnHover gradient autoFill gradientColor="var(--color-accent-background)">
			<div v-for="(skill, index) in skills.hard" :key="skill.name" :title="skill.name" @mouseover="hoveredIndex = index" @mouseleave="hoveredIndex = null">
				<i :class="[
					'text-5xl md:text-6xl lg:text-7xl me-8',
					{ colored: hoveredIndex === index },
					skill.deviconClass,
				]"></i>
			</div>
		</NuxtMarquee>
	</section>
</template>

<script setup lang="ts">
import { skills } from 'assets/mydata.json';

const hoveredIndex = ref<number | null>(null);
</script>
