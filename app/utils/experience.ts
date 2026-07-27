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

/**
 * Stem of the experience entry that anchors the "years of experience" counter.
 * Everything user-facing (stats bar, objective text, SEO copy) counts from this
 * role's `startDate`.
 */
export const EXPERIENCE_ANCHOR_STEM = 'experience/6-frontend-developer';

/** Placeholder replaced with the live years-of-experience number in content. */
const EXPERIENCE_YEARS_TOKEN = /\{\{\s*years\s*\}\}/g;

/**
 * Whole months elapsed between two dates, ignoring the time of day.
 */
function monthsElapsed(from: Date, to: Date): number {
  const months =
    (to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
    (to.getUTCMonth() - from.getUTCMonth());

  // Not a full month yet if we haven't reached the anniversary day.
  return to.getUTCDate() < from.getUTCDate() ? months - 1 : months;
}

/**
 * Years of experience since `startDate`, floored to the nearest half year, so
 * the number only moves every six months: 0, 0.5, 1, 1.5, 2, 2.5, …
 *
 * `startDate` accepts the same formats as {@link parseExperienceDate}.
 */
export function yearsOfExperienceSince(
  startDate: string | undefined,
  now: number | Date = Date.now(),
): number {
  const startMs = parseExperienceDate(startDate);
  if (!Number.isFinite(startMs) || startMs <= 0) return 0;

  const months = monthsElapsed(new Date(startMs), new Date(now));
  if (months <= 0) return 0;

  return Math.floor(months / 6) / 2;
}

/**
 * Render a half-year count for display: `1`, `1.5`, `2`, …
 */
export function formatExperienceYears(years: number): string {
  return Number.isInteger(years) ? String(years) : years.toFixed(1);
}

/**
 * Replace the `{{years}}` placeholder in content copy with the live count.
 */
export function fillExperienceYears(text: string, years: number): string {
  return text.replace(EXPERIENCE_YEARS_TOKEN, formatExperienceYears(years));
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
