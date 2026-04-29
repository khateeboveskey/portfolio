/**
 * Strip leading number prefix from a content file stem.
 * e.g. "experience/1-full-stack-developer-intern" -> "full-stack-developer-intern"
 */
export function stemToSlug(stem: string | undefined): string {
  if (!stem) return '';
  const last = stem.split('/').pop() ?? stem;
  return last.replace(/^\d+-/, '');
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
