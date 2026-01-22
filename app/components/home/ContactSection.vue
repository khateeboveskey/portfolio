<template>
  <section
    id="contact"
    class="bg-primary mx-4 md:mx-8 lg:mx-32 -mb-48 mt-24 md:mt-48 relative flex flex-col md:flex-row gap-6 md:gap-10"
  >
    <div class="flex flex-col justify-between w-full md:flex-1/2 p-6 md:p-12">
      <div>
        <h2 class="text-white text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p class="text-white/75 text-base md:text-lg mt-4">
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
      </div>
      <div class="space-y-4 mt-8 md:mt-10">
        <h2 class="text-lg text-white font-semibold">Or find me at:</h2>
        <ul class="flex flex-wrap gap-3 md:gap-4">
          <li v-for="(value, key, index) in accounts" :key="index">
            <a
              :href="value"
              :aria-label="`Follow on ${key}`"
              target="_blank"
              rel="noopener noreferrer"
              class="border-white/20 hover:border-white hover:bg-white/10 flex h-10 w-10 items-center justify-center rounded-full border transition-all"
            >
              <i :class="`fa-brands fa-${key} text-white text-lg`" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full md:flex-1/2 bg-inverted p-6 md:p-12">
      <form
        action="https://formspree.io/f/xovevjzq"
        method="POST"
        class="flex flex-col gap-4"
        @submit="validateForm"
      >
        <label class="flex flex-col text-white">
          Your email:
          <input
            v-model="email"
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            class="mt-2 p-2 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white w-full"
          />
          <span v-if="!isEmailValid && email" class="text-primary text-sm mt-1"
            >Please enter a valid email address</span
          >
        </label>
        <label class="flex flex-col text-white">
          Your message:
          <textarea
            v-model="message"
            name="message"
            required
            minlength="10"
            :dir="messageDirection"
            :class="[
              'mt-2 p-2 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white h-32 w-full',
              { 'font-ibm-arabic': messageDirection === 'rtl' },
            ]"
            @input="checkDirection"
          />
          <span
            v-if="!isMessageValid && message"
            class="text-primary text-sm mt-1"
          >
            Message must be at least 10 characters long
          </span>
        </label>
        <button
          type="submit"
          :disabled="!isFormValid"
          :class="[
            'mt-4 py-2 px-6 transition-colors w-full md:w-auto',
            isFormValid
              ? 'bg-white hover:cursor-pointer hover:bg-white/90'
              : 'bg-white/50 cursor-not-allowed',
          ]"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const { data: info } = await useAsyncData('personalInfo', () =>
  queryCollection('personalInfo').first(),
);

const accounts = computed(() => info.value?.accounts ?? {});

const messageDirection = ref('ltr');
const email = ref('');
const message = ref('');

const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.value);
});

const isMessageValid = computed(() => {
  return message.value.length >= 10;
});

const isFormValid = computed(() => {
  return (
    isEmailValid.value && isMessageValid.value && email.value && message.value
  );
});

const validateForm = (e: Event) => {
  if (!isFormValid.value) {
    e.preventDefault();
  }
};

const checkDirection = (event: Event) => {
  const text = (event.target as HTMLTextAreaElement).value;
  const firstChar = text.trim().charAt(0);
  messageDirection.value = /[\u0600-\u06FF]/.test(firstChar) ? 'rtl' : 'ltr';
};
</script>
