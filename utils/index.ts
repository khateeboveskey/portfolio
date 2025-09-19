/**
 * Utility functions for the portfolio application
 */
import { EMAIL_VALIDATION_REGEX, ARABIC_CHAR_REGEX } from '../constants';

/**
 * Validates if an email address is valid
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_VALIDATION_REGEX.test(email);
}

/**
 * Checks if text is in Arabic (RTL direction)
 */
export function isArabicText(text: string): boolean {
  const firstChar = text.trim().charAt(0);
  return ARABIC_CHAR_REGEX.test(firstChar);
}

/**
 * Gets text direction based on first character
 */
export function getTextDirection(text: string): 'ltr' | 'rtl' {
  return isArabicText(text) ? 'rtl' : 'ltr';
}

/**
 * Calculates years of experience based on the oldest project
 */
export function calculateExperienceYears(projects: { year: number }[]): number {
  if (!projects.length) return 0;
  const oldestYear = Math.min(...projects.map(p => p.year));
  return new Date().getFullYear() - oldestYear;
}

/**
 * Validates message length
 */
export function isValidMessageLength(message: string, minLength: number = 10): boolean {
  return message.length >= minLength;
}

/**
 * Formats a phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as international number if starts with country code
  if (cleaned.startsWith('967')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  return phone;
}

/**
 * Truncates text to specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Creates a safe external link object
 */
export function createExternalLink(url: string) {
  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer'
  };
}