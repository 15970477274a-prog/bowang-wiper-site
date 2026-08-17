/**
 * Truncate the name portion of a title tag so the full title stays within
 * ~60 chars (Google's SERP display limit), cutting at a word boundary.
 * The brand suffix is appended separately by callers.
 */
export function truncateTitle(name: string, maxLen = 42): string {
  if (name.length <= maxLen) return name;
  const cut = name.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = lastSpace > 20 ? cut.slice(0, lastSpace) : cut;
  return trimmed.replace(/[\s,;:.\-]+$/, "") + "...";
}
