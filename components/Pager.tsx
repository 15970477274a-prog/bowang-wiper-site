"use client";

/**
 * Shared pager for the product listings.
 *
 * Rendering one button per page does not scale: a 62-page listing produced 62 buttons
 * spread over four rows. Only a window around the current page is rendered here - the
 * first and last page are always present, the current page keeps two neighbours on each
 * side, and any gap collapses into a single ellipsis that is not interactive.
 *
 * The page controls stay real <button> elements so tabbing and the existing
 * click-to-change-page behaviour are unchanged.
 */

export type PagerItem = number | "gap";

/**
 * Page numbers plus gap markers for the given position.
 *
 * A short list (7 pages or fewer) is shown in full - there is nothing to collapse.
 * Beyond that the window is strictly the current page +/- 2, with the first and last
 * page always added and any difference represented by a single gap marker.
 */
export function buildPagerItems(current: number, total: number): PagerItem[] {
  if (total <= 7) {
    return Array.from({ length: Math.max(0, total) }, (_, i) => i + 1);
  }

  const start = Math.max(1, current - 2);
  const end = Math.min(total, current + 2);

  const items: PagerItem[] = [];
  if (start > 1) {
    items.push(1);
    if (start > 2) items.push("gap");
  }
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total) {
    if (end < total - 1) items.push("gap");
    items.push(total);
  }
  return items;
}

type PagerProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  prevLabel: string;
  nextLabel: string;
};

export default function Pager({
  currentPage,
  totalPages,
  onPageChange,
  prevLabel,
  nextLabel,
}: PagerProps) {
  const items = buildPagerItems(currentPage, totalPages);

  return (
    <div className="pl-pager">
      <button
        className="pl-pager-btn"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
      >
        {prevLabel}
      </button>

      {items.map((item, i) =>
        item === "gap" ? (
          <span key={"gap-" + i} className="pl-pager-gap" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={item}
            className="pl-pager-num"
            onClick={() => onPageChange(item)}
            aria-current={item === currentPage ? "page" : undefined}
          >
            {item}
          </button>
        )
      )}

      <button
        className="pl-pager-btn"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
      >
        {nextLabel}
      </button>
    </div>
  );
}
