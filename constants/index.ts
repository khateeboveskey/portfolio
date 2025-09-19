/**
 * Application constants
 */

export const EXTERNAL_RESOURCES = {
  FONT_AWESOME: {
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css',
    integrity: 'sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==',
    crossorigin: 'anonymous',
    referrerpolicy: 'no-referrer'
  },
  DEVICONS: {
    href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
  },
  GOOGLE_FONTS: {
    FUNNEL_DISPLAY: 'https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap',
    IBM_PLEX_ARABIC: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap'
  }
} as const;

export const NAVIGATION_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' }
] as const;

export const CONTACT_EMAIL = 'khateeboveskey@gmail.com';

export const INTERSECTION_OBSERVER_OPTIONS = {
  threshold: 1
} as const;

export const NUMBER_FLOW_ANIMATION = {
  duration: 1500,
  easing: 'ease-in-out'
} as const;

export const EMAIL_VALIDATION_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const ARABIC_CHAR_REGEX = /[\u0600-\u06FF]/;

export const MIN_MESSAGE_LENGTH = 10;

export const CURRENT_YEAR = new Date().getFullYear();