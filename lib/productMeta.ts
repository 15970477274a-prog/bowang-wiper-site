/**
 * Build a usable meta description for a product page.
 *
 * Why this exists: 277 of the 372 products in the catalogue ship a `desc`
 * shorter than 70 characters (the shortest is 16: "Bus Wiper Blades"), and 38
 * of them share the byte-identical string "wholesale special wiper blade".
 * Those values were being published verbatim as the product page meta
 * description (verified live on /en/products/bw-829-229), so across six locales
 * roughly 500 URLs carried a stub or duplicate description.
 *
 * When `desc` is substantial we keep it untouched. When it is a stub we lead
 * with the product name (the only reliably unique part) and append as many
 * selling-point clauses as fit inside the SERP limit, dropping clauses from the
 * end rather than truncating mid-word.
 *
 * Deliberately free of numeric claims (MOQ, lead time, warranty): the catalogue
 * says "300 PCS" per product while the category pages advertise "100 PCS", so
 * any number here would contradict another page on the same site.
 */

const MIN_USABLE = 70;
const MAX_LEN = 158;

type LocaleCopy = { sep: string; joiner: string; tail: string; clauses: string[] };

const COPY: Record<string, LocaleCopy> = {
  en: {
    sep: " — ",
    joiner: ", ",
    tail: ".",
    clauses: [
      "factory-direct from an ISO 9001 certified Chinese wiper blade manufacturer",
      "OEM/ODM branding and packaging",
      "free samples for qualified buyers",
    ],
  },
  es: {
    sep: " — ",
    joiner: ", ",
    tail: ".",
    clauses: [
      "venta directa de fábrica por un fabricante chino de escobillas certificado ISO 9001",
      "marca y embalaje OEM/ODM",
      "muestras gratuitas para compradores calificados",
    ],
  },
  ru: {
    sep: " — ",
    joiner: ", ",
    tail: ".",
    clauses: [
      "напрямую с завода китайского производителя стеклоочистителей с сертификатом ISO 9001",
      "брендирование и упаковка OEM/ODM",
      "бесплатные образцы для квалифицированных покупателей",
    ],
  },
  fr: {
    sep: " — ",
    joiner: ", ",
    tail: ".",
    clauses: [
      "vente directe d'usine par un fabricant chinois de balais d'essuie-glace certifié ISO 9001",
      "marque et emballage OEM/ODM",
      "échantillons gratuits pour les acheteurs qualifiés",
    ],
  },
  de: {
    sep: " — ",
    joiner: ", ",
    tail: ".",
    clauses: [
      "direkt ab Werk vom ISO 9001-zertifizierten chinesischen Hersteller",
      "OEM/ODM-Branding und Verpackung",
      "kostenlose Muster für qualifizierte Käufer",
    ],
  },
  zh: {
    sep: " — ",
    joiner: "，",
    tail: "。",
    clauses: [
      "通过 ISO 9001 认证的中国雨刮片工厂直供",
      "支持 OEM/ODM 定制品牌与包装",
      "合格买家可申请免费打样",
    ],
  },
};

/**
 * Trim at a word boundary. Migrated product names are machine-cut at exactly
 * 100 chars ("...for Car BMW X1 X5 X"), so the joined string can overflow; we
 * shorten the NAME rather than the selling-point clause, and never leave a
 * half word dangling.
 */
function trimAtWord(text: string, budget: number): string {
  if (text.length <= budget) return text;
  const cut = text.slice(0, budget);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > budget * 0.5 ? cut.slice(0, lastSpace) : cut;
  return base.replace(/[\s,;:.\-–—]+$/, "");
}

export function buildProductMetaDescription(
  name: string,
  rawDesc: string,
  lang: string
): string {
  const desc = (rawDesc || "").trim();
  const productName = (name || "").trim();
  if (desc.length > MAX_LEN) return desc.slice(0, MAX_LEN - 3) + "...";
  if (desc.length >= MIN_USABLE) return desc;

  const copy = COPY[lang] || COPY.en;

  // Keep as many clauses as fit alongside the full product name.
  for (let n = copy.clauses.length; n >= 1; n--) {
    const candidate =
      productName + copy.sep + copy.clauses.slice(0, n).join(copy.joiner) + copy.tail;
    if (candidate.length <= MAX_LEN) return candidate;
  }

  // The name alone is too long to carry a clause, so shorten the name and keep
  // the clause intact. Use the primary clause (factory-direct / ISO 9001),
  // not the last one - that is the strongest point and it must not be the part
  // that gets dropped when space is tight.
  const clause = copy.clauses[0] + copy.tail;
  const budget = MAX_LEN - copy.sep.length - clause.length;
  if (budget >= 20) {
    return trimAtWord(productName, budget) + copy.sep + clause;
  }

  // Pathological case: even the shortest clause does not fit on its own.
  return clause.length > MAX_LEN ? clause.slice(0, MAX_LEN - 3) + "..." : clause;
}
