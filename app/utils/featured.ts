/**
 * Returns items marked `featured: true`. If none are marked, returns all items
 * so the home page never shows an empty section.
 *
 * Use this whenever the home page needs to surface a curated subset of a
 * collection while the full list will live on a future "show all" page.
 */
export function featuredOrFallback<T extends { featured?: boolean }>(
  items: readonly T[] | null | undefined,
): T[] {
  if (!items || items.length === 0) return [];
  const featured = items.filter((item) => item.featured);
  return featured.length > 0 ? featured : [...items];
}
