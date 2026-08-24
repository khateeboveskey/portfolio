interface SortableProject {
  year: number;
  stem?: string;
}

/**
 * Numeric prefix of a project stem: `projects/17-sikkah-farah-al-omr` -> 17.
 *
 * Entries are filed `<n>-<slug>.yml` in the order they were added, so within a
 * single `year` the prefix is the only "which came later" signal the content
 * carries. Unprefixed stems fall back to 0 and sink to the bottom of their year.
 */
function stemOrder(stem: string | undefined): number {
  const match = /(?:^|\/)(\d+)-/.exec(stem ?? '');
  return match?.[1] ? parseInt(match[1], 10) : 0;
}

/**
 * Order projects newest first: `year` descending, ties broken by the entry's
 * numeric file prefix descending.
 *
 * `queryCollection('projects')` returns rows in stem order, which is a string
 * sort — `10-ataa-tenant-store` lands before `2-zameel-app-admin` and the newest
 * work ends up buried mid-grid. Sorting here rather than with `.order('year')`
 * keeps the tie-break deterministic, which matters because most entries share
 * the same year.
 */
export function sortProjectsByRecency<T extends SortableProject>(
  items: readonly T[] | null | undefined,
): T[] {
  return [...(items ?? [])].sort(
    (a, b) => b.year - a.year || stemOrder(b.stem) - stemOrder(a.stem),
  );
}
