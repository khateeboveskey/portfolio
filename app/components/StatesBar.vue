<template>
	<div class="border-accent-foreground mt-10 grid w-full grid-cols-3 grid-rows-1 justify-between border-2 md:mt-16">
		<div class="even:bg-accent-foreground even:text-accent-background grid place-items-center p-3 sm:p-4 md:p-5" v-for="(si, index) in snapInfoGroup" :key="index" ref="snapRefs">
			<NumberFlow :spin-timing="{
				duration: 1500, easing: 'ease-in-out'
			}" class="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" prefix="+" :value="visible[index] ? Number(si.content) : 0" />
			<span class="text-center text-sm tracking-wider uppercase sm:text-base md:text-lg lg:text-xl">
				{{ si.title }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { projects } from 'assets/mydata.json';
import NumberFlow from '@number-flow/vue';

const experienceYears: number = new Date().getFullYear() - projects[projects.length - 1].year;

const snapInfoGroup = [
	{
		title: 'Projects',
		content: projects.length,
	},
	{
		title: 'Years Experience',
		content: `${experienceYears}`,
	},
	{
		title: 'Student Trained',
		content: '100',
	},
];

const snapRefs = ref<HTMLDivElement[]>([]);
const visible = ref<boolean[]>(snapInfoGroup.map(() => false));

let observer: IntersectionObserver;

onMounted(() => {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const index = snapRefs.value.indexOf(entry.target as HTMLDivElement);
				if (entry.isIntersecting && index !== -1) {
					visible.value[index] = true;
					observer.unobserve(entry.target); // Stop observing once visible
				}
			});
		},
		{ threshold: 1 } // Trigger when 10% of the element is visible
	);

	snapRefs.value.forEach((el) => {
		if (el) observer.observe(el);
	});
});

onBeforeUnmount(() => {
	if (observer) observer.disconnect();
});
</script>
