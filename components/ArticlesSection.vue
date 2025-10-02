<template>
	<section class="px-4 md:px-8 lg:px-16 xl:px-32">
		<SectionHeader :subtitle="$t('articles.subtitle')">{{ $t('articles.title') }}</SectionHeader>
		<ul class="space-y-4 md:space-y-6 lg:space-y-10">
			<li v-for="(article, index) in experience.personal.creativeWriting" :key="index">
				<a :href="article.url" target="_blank" class="border-accent-foreground dark:border-gray-600 hover:bg-accent-foreground dark:hover:bg-gray-700 hover:text-accent-background dark:hover:text-gray-100 group flex min-h-[12rem] flex-col items-start justify-between border-2 p-4 md:h-48 md:flex-row md:items-center md:gap-10 md:px-6 md:py-6 lg:px-10 lg:py-9">
					<div class="mb-4 flex-1 space-y-2 md:mb-0 md:space-y-3">
						<div class="text-accent text-sm font-medium tracking-wider uppercase md:text-base">
							{{ article.category }}
							<span class="text-accent-foreground dark:text-gray-100 group-hover:text-accent-background dark:group-hover:text-gray-100 ml-2 opacity-50">
								{{
									new Intl.DateTimeFormat('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									}).format(new Date(article.datePublished))
								}}
							</span>
						</div>
						<h3 class="line-clamp-2 text-xl font-bold md:text-2xl dark:text-gray-100">{{ article.title }}</h3>
					</div>
					<div id="details" class="flex w-full flex-1 flex-col items-start justify-between gap-3 md:min-h-full md:w-auto md:items-end md:gap-3">
						<div class="line-clamp-3 text-left text-sm opacity-75 md:text-justify md:text-base dark:text-gray-300">
							{{ article.description }}
						</div>
						<div class="text-accent text-sm md:text-base">{{ $t('articles.showOn') }} {{ article.urlTo }}
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-arrow-out-up-right w-4 inline ms-1 -translate-y-[2px]">
								<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
								<path d="m21 3-9 9" />
								<path d="M15 3h6v6" />
							</svg>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import { experience } from 'assets/mydata.json';
</script>
