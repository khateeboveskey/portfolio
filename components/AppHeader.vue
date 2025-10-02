<template>
	<header class="flex flex-row items-center justify-between px-4 py-4 md:px-32 md:py-8">
		<MyLogo with-name />

		<!-- Hamburger Menu Button -->
		<button @click="toggleMenu" class="md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				<path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Navigation Menu -->
		<nav :class="{ hidden: !isMenuOpen }" class="bg-accent-background dark:bg-gray-900 fixed top-16 left-0 z-10 w-full p-4 pt-0 md:relative md:top-0 md:flex md:w-auto md:bg-transparent md:p-0">
			<ul class="flex flex-col gap-4 text-lg md:flex-row md:gap-10 md:items-center">
				<li>
					<NavLink to="/">{{ $t('navigation.home') }}</NavLink>
				</li>
				<li>
					<NavLink to="#about">{{ $t('navigation.about') }}</NavLink>
				</li>
				<li>
					<NavLink to="#projects">{{ $t('navigation.projects') }}</NavLink>
				</li>
				<li>
					<NavLink to="#contact">{{ $t('navigation.contact') }}</NavLink>
				</li>
				<!-- Theme Toggle -->
				<li>
					<UButton 
						:icon="colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
						color="gray"
						variant="ghost"
						aria-label="Theme toggle"
						@click="toggleTheme"
					/>
				</li>
				<!-- Language Toggle -->
				<li>
					<UButton 
						:label="locale === 'en' ? 'ع' : 'EN'"
						color="gray"
						variant="ghost"
						aria-label="Language toggle"
						@click="toggleLanguage"
					/>
				</li>
			</ul>
		</nav>

		<!-- CTA Button -->
		<span class="hidden md:block">
			<ul class="flex gap-3 text-lg items-center">
				<li>
					<UButton 
						:icon="colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
						color="gray"
						variant="ghost"
						aria-label="Theme toggle"
						@click="toggleTheme"
					/>
				</li>
				<li>
					<UButton 
						:label="locale === 'en' ? 'ع' : 'EN'"
						color="gray"
						variant="ghost"
						aria-label="Language toggle"
						@click="toggleLanguage"
					/>
				</li>
				<li>
					<CTAButton />
				</li>
			</ul>
		</span>
	</header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const toggleTheme = () => {
	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const toggleLanguage = () => {
	setLocale(locale.value === 'en' ? 'ar' : 'en');
};
</script>
