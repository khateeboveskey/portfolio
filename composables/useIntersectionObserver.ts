/**
 * Composable for managing intersection observer functionality
 */
import { ref, onMounted, onBeforeUnmount, readonly, type Ref } from 'vue';
import { INTERSECTION_OBSERVER_OPTIONS } from '../constants';

export function useIntersectionObserver(
  targetRefs: Ref<HTMLElement[]>,
  options = INTERSECTION_OBSERVER_OPTIONS
) {
  const visible = ref<boolean[]>([]);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    // Initialize visible array
    visible.value = targetRefs.value.map(() => false);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = targetRefs.value.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && index !== -1) {
            visible.value[index] = true;
            observer?.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      options
    );

    // Start observing all elements
    targetRefs.value.forEach((el) => {
      if (el) observer?.observe(el);
    });
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    visible: readonly(visible)
  };
}