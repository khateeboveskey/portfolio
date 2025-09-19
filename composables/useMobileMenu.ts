/**
 * Composable for managing mobile navigation menu
 */
import { ref, readonly } from 'vue';

export function useMobileMenu() {
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };

  const openMenu = () => {
    isMenuOpen.value = true;
  };

  return {
    isMenuOpen: readonly(isMenuOpen),
    toggleMenu,
    closeMenu,
    openMenu
  };
}