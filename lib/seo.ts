/**
 * Shared <title> and meta-description helpers.
 *
 * 2026-10 rewrite — why this file replaced `truncateTitle()`:
 *
 * 1. No trailing "..." anywhere. The previous helper appended "..." after a
 *    fixed-length cut, so product titles were published as
 *    "BW-861 Multi-Function Universal Wiper... | Lelion Autoparts". Google
 *    truncates the SERP snippet itself; a hard-coded "..." only burns space and
 *    was the visible symptom of a mid-sentence cut.
 *
 * 2. Cut on the TAIL, not the head. Catalogue product names are long (median 84
 *    characters) and share long generic prefixes, e.g.
 *    "Wholesale Car External Accessories Front Windshield Wiper Blade for
 *    BMW 5 SERIES 2004-2009". The differentiating vehicle / year information
 *    sits at the END of the string, so cutting the tail to 60 characters
 *    collapsed 153 URLs onto identical titles ("...Front Windshield Wiper"
 *    repeated 22x). `condenseText()` drops generic leading words instead and
 *    keeps the distinctive tail.
 *
 * 3. Descriptions must be unique too. The imported catalogue reuses the same
 *    short description for many records ("wholesale special wiper blade" appears
 *    on 38 products), so `buildDescription()` appends the product name whenever
 *    the source description is too short to stand on its own.
 */

export const BRAND_NAME = "Lelion Autoparts";
/** ~600px SERP budget for a <title>. */
export const TITLE_MAX = 60;
/** Google truncates meta descriptions around 155-160 characters. */
export const DESC_MAX = 155;
/** Below this length a source description is too generic to be page-unique. */
export const SHORT_DESC = 110;

export type TitleOptions = {
  /** Brand suffix. Pass `null` to omit it. Defaults to {@link BRAND_NAME}. */
  brand?: string | null;
  /** Maximum total length. Defaults to {@link TITLE_MAX}. */
  max?: number;
};

/** Collapse all whitespace runs and trim. */
function squash(text: string): string {
  return String(text ?? "").replace(/\s+/g, " ").trim();
}

/** Remove leading/trailing separator punctuation left behind by a cut. */
function trimEdges(text: string): string {
  return text
    .replace(/^[\s,;:.|/\\\-–—]+/u, "")
    .replace(/[\s,;:.|/\\\-–—]+$/u, "");
}

/**
 * Clamp `text` to `max` characters on a word boundary, without appending any
 * ellipsis. Falls back to a hard cut only when no usable space exists.
 */
export function clampText(text: string, max: number = DESC_MAX): string {
  const value = squash(text);
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const space = cut.lastIndexOf(" ");
  const head = space > Math.floor(max * 0.5) ? cut.slice(0, space) : cut;
  return trimEdges(head);
}

/**
 * Length-capped copy of `text` that preserves its distinctive tail by dropping
 * generic leading words. Used for <title>, where the differentiator of a
 * catalogue product name sits at the end.
 */
export function condenseText(text: string, max: number = TITLE_MAX): string {
  const value = squash(text);
  if (value.length <= max) return value;
  const words = value.split(" ");
  let start = 0;
  while (start < words.length - 3 && words.slice(start + 1).join(" ").length > max) {
    start += 1;
  }
  return clampText(words.slice(start + 1).join(" "), max);
}

/**
 * Build a single page <title>.
 *
 * Order of preference: full name + brand, then the full name alone, then a
 * condensed name that keeps its tail. The result never contains a trailing
 * "..." and never exceeds `max`.
 */
export function buildTitle(name: string, options: TitleOptions = {}): string {
  const max = options.max ?? TITLE_MAX;
  const brand = options.brand === undefined ? BRAND_NAME : options.brand;
  const value = squash(name);

  if (brand) {
    const withBrand = value + " | " + brand;
    if (withBrand.length <= max) return withBrand;
  }
  if (value.length <= max) return value;
  return condenseText(value, max);
}

/**
 * Build a page meta description that is unique per page.
 *
 * If the source description is shorter than {@link SHORT_DESC} characters the
 * product name is appended, so records sharing one boilerplate sentence still
 * publish distinct descriptions.
 */
export function buildDescription(
  desc: string,
  name: string,
  max: number = DESC_MAX
): string {
  const body = squash(desc);
  const label = squash(name);
  const base =
    body.length >= SHORT_DESC || !label ? body : squash(body + " — " + label);
  return clampText(base, max);
}

export type TitleEntry = {
  /** Stable, unique key (the catalogue id). */
  key: string;
  /** Localised display name. */
  name: string;
  /**
   * Unique token appended when two entries would otherwise share a title.
   * Defaults to `key`.
   */
  distinct?: string;
};

/**
 * Resolve one unique <title> per entry.
 *
 * `buildTitle()` alone cannot guarantee uniqueness: two catalogue records may
 * carry the exact same localised name. (Real case: `bw-826-193` / `bw-826-205`
 * shared one Spanish and one Chinese name; the duplicate was consolidated into a
 * single page on 2026-10-15, but the guard stays so a future duplicate can never
 * publish two identical titles.) Any title produced more than once therefore gets
 * its catalogue id appended, which is unique by construction.
 */
export function buildUniqueTitles(
  entries: TitleEntry[],
  max: number = TITLE_MAX
): Map<string, string> {
  const titles = new Map<string, string>();
  const byTitle = new Map<string, string[]>();
  const byKey = new Map<string, TitleEntry>();

  for (const entry of entries) {
    byKey.set(entry.key, entry);
    const title = buildTitle(entry.name, { max });
    titles.set(entry.key, title);
    const bucket = byTitle.get(title);
    if (bucket) bucket.push(entry.key);
    else byTitle.set(title, [entry.key]);
  }

  for (const keys of byTitle.values()) {
    if (keys.length < 2) continue;
    for (const key of keys) {
      const entry = byKey.get(key);
      if (!entry) continue;
      const tail = entry.distinct || key;
      const suffix = " | " + tail;
      const budget = max - suffix.length;
      const head = budget > 20 ? condenseText(entry.name, budget) : "";
      titles.set(key, (head ? head + suffix : tail).slice(0, max));
    }
  }

  return titles;
}
