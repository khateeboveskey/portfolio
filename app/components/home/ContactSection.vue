<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="bg-primary mx-4 md:mx-8 lg:mx-16 xl:mx-32 -mb-48 mt-24 md:mt-48 relative flex flex-col md:flex-row gap-6 md:gap-10"
  >
    <div class="flex flex-col justify-between w-full md:flex-1/2 p-6 md:p-12">
      <div>
        <h2
          id="contact-heading"
          class="text-white text-3xl md:text-4xl font-bold"
        >
          Contact Me
        </h2>
        <p class="text-white text-base md:text-lg mt-4">
          I am always open to new opportunities and collaborations. Feel free to
          reach out to me.
        </p>
      </div>
      <div class="space-y-4 mt-8 md:mt-10">
        <h3 class="text-lg text-white font-semibold">Or find me at:</h3>
        <AppSocialLinks />
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
            autocomplete="email"
            required
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            :aria-invalid="showEmailError"
            :aria-describedby="
              showEmailError ? 'contact-email-error' : undefined
            "
            class="mt-2 p-2 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white w-full"
          />
          <span
            v-if="showEmailError"
            id="contact-email-error"
            class="text-brand-400 text-sm mt-1"
          >
            Please enter a valid email address
          </span>
        </label>
        <label class="flex flex-col text-white">
          Your message:
          <!-- dir="auto" follows the first strong character, so Arabic
          messages flip to RTL on their own. -->
          <textarea
            v-model="message"
            name="message"
            required
            minlength="10"
            dir="auto"
            :aria-invalid="showMessageError"
            :aria-describedby="
              showMessageError ? 'contact-message-error' : undefined
            "
            class="mt-2 p-2 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white h-32 w-full"
          />
          <span
            v-if="showMessageError"
            id="contact-message-error"
            class="text-brand-400 text-sm mt-1"
          >
            Message must be at least 10 characters long
          </span>
        </label>
        <button
          type="submit"
          :disabled="!isFormValid"
          :class="[
            'mt-4 py-2 px-6 transition-colors w-full md:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
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
const email = ref('');
const message = ref('');

const isEmailValid = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.value);
});

const isMessageValid = computed(() => {
  return message.value.length >= 10;
});

const isFormValid = computed(() => isEmailValid.value && isMessageValid.value);

const showEmailError = computed(() => !!email.value && !isEmailValid.value);
const showMessageError = computed(
  () => !!message.value && !isMessageValid.value,
);

const validateForm = (e: Event) => {
  if (!isFormValid.value) {
    e.preventDefault();
  }
};
</script>
