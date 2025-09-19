/**
 * Composable for form validation and management
 */
import { ref, computed } from 'vue';
import { isValidEmail, isValidMessageLength, getTextDirection } from '../utils';
import { MIN_MESSAGE_LENGTH } from '../constants';

export function useContactForm() {
  const email = ref('');
  const message = ref('');
  const messageDirection = ref<'ltr' | 'rtl'>('ltr');

  const isEmailValid = computed(() => {
    return email.value ? isValidEmail(email.value) : false;
  });

  const isMessageValid = computed(() => {
    return message.value ? isValidMessageLength(message.value, MIN_MESSAGE_LENGTH) : false;
  });

  const isFormValid = computed(() => {
    return isEmailValid.value && isMessageValid.value && email.value && message.value;
  });

  const updateMessageDirection = (event: Event) => {
    const text = (event.target as HTMLTextAreaElement).value;
    messageDirection.value = getTextDirection(text);
  };

  const resetForm = () => {
    email.value = '';
    message.value = '';
    messageDirection.value = 'ltr';
  };

  return {
    email,
    message,
    messageDirection,
    isEmailValid,
    isMessageValid,
    isFormValid,
    updateMessageDirection,
    resetForm
  };
}