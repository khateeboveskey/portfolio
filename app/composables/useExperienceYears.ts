/**
 * Live years-of-experience counter, anchored to the `startDate` of the current
 * frontend role (`content/experience/6-frontend-developer.yml`) and floored to
 * the nearest half year: 1, 1.5, 2, 2.5, …
 *
 * The "now" reference is stored in shared state so the prerendered HTML and the
 * hydrating client agree, then refreshed on mount so a long-cached page still
 * shows the current number.
 */
export async function useExperienceYears() {
  // Registered before the await below: lifecycle hooks need the active
  // component instance, which a plain async composable loses after awaiting.
  const now = useState<number>('experience:now', () => Date.now());
  onMounted(() => {
    now.value = Date.now();
  });

  const { data: startDate } = await useAsyncData(
    'experience:years-anchor',
    async () => {
      const items = await queryCollection('experience').all();
      return (
        items.find((item) => item.stem === EXPERIENCE_ANCHOR_STEM)?.startDate ??
        null
      );
    },
  );

  const years = computed(() =>
    yearsOfExperienceSince(startDate.value ?? undefined, now.value),
  );
  const yearsLabel = computed(() => formatExperienceYears(years.value));

  /** Fill the `{{years}}` placeholder in content copy. */
  const withYears = (text: string) => fillExperienceYears(text, years.value);

  return { years, yearsLabel, withYears };
}
