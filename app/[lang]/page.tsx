import { allProducts } from "../data/products";
import { getProductTranslation } from "../data/productTranslations";
import HomeClient, { type FeaturedProduct } from "../../components/HomeClient";

type Props = { params: Promise<{ lang: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;
type Locale = (typeof locales)[number];

/**
 * Home page — server component.
 *
 * It used to be `"use client"` and read `allProducts` + `getProductTranslation`
 * directly, which shipped the whole catalogue (534 KB of JS) and the entire
 * product-translation table (2.1 MB of JS) to every visitor in order to render
 * three featured cards. Only those three products are now serialised into the
 * page; everything else stays on the server.
 */
export default async function Page({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = (locales as readonly string[]).includes(lang)
    ? (lang as Locale)
    : "en";

  const featured: FeaturedProduct[] = allProducts.slice(0, 3).map((product) => {
    const translation = getProductTranslation(product.id, locale);
    return {
      id: product.id,
      name: translation?.name || product.name,
      desc: translation?.desc || product.desc,
      image: product.image,
      moq: product.moq,
    };
  });

  return <HomeClient locale={locale} featured={featured} />;
}
