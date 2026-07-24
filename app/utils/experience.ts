/**
 * Parse an experience `endDate`/`startDate` string into a sortable timestamp.
 *
 * Accepted formats:
 *   - "present"     -> Infinity (always sorts to the top)
 *   - "D/M/YYYY"    -> that day
 *   - "M/YYYY"      -> first day of that month
 *
 * Unparseable values fall back to 0 so they sink to the bottom rather than
 * throwing.
 */
export function parseExperienceDate(value: string | undefined): number {
  if (!value) return 0;
  if (value.trim().toLowerCase() === 'present') return Infinity;

  const parts = value.split('/').map((p) => parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;

  let day = 1;
  let month = 1;
  let year = 0;
  if (parts.length === 3) {
    [day, month, year] = parts as [number, number, number];
  } else if (parts.length === 2) {
    [month, year] = parts as [number, number];
  } else {
    return 0;
  }

  return Date.UTC(year, month - 1, day);
}

interface SortableExperience {
  startDate: string;
  endDate: string;
  stem?: string;
}

/**
 * Order experience entries by `endDate` descending, so ongoing roles
 * (`endDate: present`) sit on top. Ties break by `startDate` descending, then
 * by `stem` descending for a stable order.
 */
export function sortExperienceByEndDate<T extends SortableExperience>(
  items: readonly T[] | null | undefined,
): T[] {
  const cmp = (x: number, y: number) => (x === y ? 0 : x > y ? 1 : -1);

  return [...(items ?? [])].sort((a, b) => {
    const endDiff = cmp(
      parseExperienceDate(b.endDate),
      parseExperienceDate(a.endDate),
    );
    if (endDiff !== 0) return endDiff;

    const startDiff = cmp(
      parseExperienceDate(b.startDate),
      parseExperienceDate(a.startDate),
    );
    if (startDiff !== 0) return startDiff;

    return (b.stem ?? '').localeCompare(a.stem ?? '');
  });
}
