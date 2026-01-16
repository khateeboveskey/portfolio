<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
  {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox',
  },
];

const schema = z.object({
  email: z.email('Invalid email'),
  password: z
    .string('Password is required')
    .min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload);
}

definePageMeta({
  layout: 'empty',
});
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Login"
        description="Enter your credentials to access admin account."
        :fields="fields"
        @submit="onSubmit"
      >
        <template #header>
          <div class="flex flex-col items-center justify-center gap-4">
            <div class="flex gap-4 items-center">
              <img src="/logo.svg" alt="khateeb-logo" class="h-12" />
              <div class="font-black text-2xl">
                <h1>Khateeb</h1>
                <h1>Portfolio</h1>
              </div>
            </div>
            <p>Admin Login</p>
          </div>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
