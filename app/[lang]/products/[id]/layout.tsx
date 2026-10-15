import { alternatesWithHreflang } from "../../../../lib/hreflang";
import { buildDescription, buildUniqueTitles } from "../../../../lib/seo";
import type { Metadata } from "next";
import { allProducts } from "../../../data/products";
import { getProductTranslation } from "../../../data/productTranslations";

type Props = { params: Promise<{ lang: string; id: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"];

export function generateStaticParams() {
  return allProducts.flatMap((p) => locales.map((lang) => ({ lang, id: p.id })));
}

export const dynamicParams = false;

/**
 * Product <title> values are resolved for the whole catalogue at once, then
 * memoised per locale.
 *
 * A single product name cannot be trusted to produce a unique title on its own:
 * the names are long, many share the same generic prefix, and a few catalogue
 * records even carry an identical localised name. buildUniqueTitles() appends
 * the (unique) catalogue id to any title that would otherwise repeat, so every
 * product URL keeps a distinct title. Building the map is cheap — it is string
 * work over data that is already in memory.
 */
const titlesByLocale = new Map<string, Map<string, string>>();

function titlesForLocale(lang: string): Map<string, string> {
  const cached = titlesByLocale.get(lang);
  if (cached) return cached;
  const titles = buildUniqueTitles(
    allProducts.map((product) => ({
      key: product.id,
      name: getProductTranslation(product.id, lang)?.name || product.name,
      distinct: product.id.toUpperCase(),
    }))
  );
  titlesByLocale.set(lang, titles);
  return titles;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Product Not Found | Lelion Autoparts",
    };
  }

  const trans = getProductTranslation(id, lang);
  const name = trans?.name || product.name;
  const desc = trans?.desc || product.desc;
  const title = titlesForLocale(lang).get(id) || name;
  const description = buildDescription(desc, name);
  const canonicalPath = "/" + lang + "/products/" + product.id;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/products/" + id, canonicalPath),
    openGraph: {
      title,
      description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      type: "website",
      images: [{ url: product.image, width: 800, height: 600, alt: name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
  };
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
