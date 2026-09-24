/**
 * Content dates are written by hand (`2023-5-3`, `3/2025`, `present`), so they
 * are parsed explicitly instead of through `new Date(string)`: Safari returns
 * `Invalid Date` for non-padded ISO-like strings, and local-time parsing lets
 * the prerendered HTML and the hydrated page disagree across time zones.
 * Everything is handled in UTC.
 */

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  timeZone: 'UTC',
});

/** Parse `YYYY-M-D` (zero padding optional) into a UTC date. */
export function parsePublishedDate(value: string | undefined): Date | null {
  const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value?.trim() ?? '');
  if (!match) return null;
  const [, year, month, day] = match.map(Number) as [
    number,
    number,
    number,
    number,
  ];
  return new Date(Date.UTC(year, month - 1, day));
}

/** `2023-5-3` -> `May 3, 2023`; unparseable values are returned unchanged. */
export function formatPublishedDate(value: string | undefined): string {
  const date = parsePublishedDate(value);
  return date ? dayFormatter.format(date) : (value ?? '');
}

/** `2023-5-3` -> `2023-05-03`, for `<time datetime>` and structured data. */
export function toIsoDate(value: string | undefined): string | undefined {
  return parsePublishedDate(value)?.toISOString().slice(0, 10) ?? value;
}

/**
 * Experience dates (`D/M/YYYY`, `M/YYYY`, `present`) -> `Mar 2025` / `Present`.
 * Relies on {@link parseExperienceDate} for the accepted formats.
 */
export function formatExperienceDate(value: string | undefined): string {
  const time = parseExperienceDate(value);
  if (time === Infinity) return 'Present';
  return time > 0 ? monthFormatter.format(new Date(time)) : (value ?? '');
}

/** `3/2025` + `present` -> `Mar 2025 – Present`. */
export function formatExperiencePeriod(start: string, end: string): string {
  return `${formatExperienceDate(start)} – ${formatExperienceDate(end)}`;
}

/** Newest first by `datePublished` (`YYYY-M-D`), compared as real dates. */
export function sortByPublishedDate<T extends { datePublished: string }>(
  items: readonly T[] | null | undefined,
): T[] {
  const time = (item: T) =>
    parsePublishedDate(item.datePublished)?.getTime() ?? 0;
  return [...(items ?? [])].sort((a, b) => time(b) - time(a));
}
