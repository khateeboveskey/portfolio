/**
 * Returns items marked `featured: true`. If none are marked, falls back to the
 * first `fallbackLimit` items so the home page never shows an empty section.
 *
 * Use this whenever the home page needs to surface a curated subset of a
 * collection while the full list will live on a future "show all" page.
 */
export function featuredOrFallback<T extends { featured?: boolean }>(
  items: readonly T[] | null | undefined,
  fallbackLimit: number,
): T[] {
  if (!items || items.length === 0) return [];
  const featured = items.filter((item) => item.featured);
  if (featured.length > 0) return featured;
  return items.slice(0, fallbackLimit);
}
