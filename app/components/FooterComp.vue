<template>
	<footer class="bg-accent-foreground text-accent-background py-12 pb-20">
		<div class="container mx-auto px-4 md:px-8">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
				<!-- Brand Section -->
				<div class="flex flex-col justify-between space-y-4">
					<a href="/" class="group inline-flex w-fit items-center gap-3 transition-all hover:opacity-90">
						<MyLogo class="h-8 transition-transform duration-300 group-hover:rotate-60" />
						<h1 class="text-2xl font-black md:text-3xl">Khateeb</h1>
					</a>
					<p class="text-sm text-neutral-300">
						Crafting digital experiences with passion and precision.
					</p>
					<p class="text-sm text-neutral-400">
						© {{ new Date().getFullYear() }} Khateeb. All rights reserved.
					</p>
				</div>

				<!-- About Section -->
				<div class="space-y-4">
					<h2 class="text-lg font-semibold">About Me</h2>
					<p class="text-sm leading-relaxed text-neutral-300 md:text-base">
						{{ objective.split('.')[0] }}.
					</p>
				</div>

				<!-- Social Links -->
				<div class="space-y-4">
					<h2 class="text-lg font-semibold">Connect With Me</h2>
					<ul class="flex flex-wrap gap-4">
						<li v-for="(value, key, index) in accounts" :key="index">
							<a :href="value" :aria-label="`Follow on ${key}`" target="_blank" rel="noopener noreferrer" class="border-accent-background/20 hover:border-accent-background hover:bg-accent-background/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all">
								<i :class="`fa-brands fa-${key} text-accent-background text-lg`"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { accounts, objective } from 'assets/mydata.json';
</script>
