/**
 * Windowed page list for pagination controls.
 *
 * Why this exists: the pagers on the products listing page and the category
 * pages rendered ONE BUTTON PER PAGE inside a single `display:flex` row that
 * had no `flex-wrap`. With 374 products at 6 per page that is 63 buttons, whose
 * combined min-content is roughly 3168px. The product column is a flex item
 * with the default `min-width:auto`, so it could not shrink below that, and the
 * outer `flex-wrap:wrap` container therefore wrapped — pushing the category
 * sidebar onto its own full-width row ABOVE the products instead of leaving it
 * on the left.
 *
 * Capping the rendered buttons removes that min-content source at the root, so
 * the layout stays stable no matter how large the catalogue grows.
 *
 * Example: current=1, total=63 -> [1, 2, 3, 4, 5, 6, "gap", 63]
 *          current=30, total=63 -> [1, "gap", 28, 29, 30, 31, 32, "gap", 63]
 */
export type PageItem = number | "gap";

export function getPageItems(current: number, total: number, max = 7): PageItem[] {
  if (total <= 1) return total === 1 ? [1] : [];
  if (total <= max) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items: PageItem[] = [1];
  const inner = max - 2; // numeric slots between the first and last page
  let start = Math.max(2, current - Math.floor(inner / 2));
  const end = Math.min(total - 1, start + inner - 1);
  // Keep a full window when the current page is near the end.
  start = Math.max(2, Math.min(start, end - inner + 1));

  if (start > 2) items.push("gap");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("gap");
  items.push(total);

  return items;
}
