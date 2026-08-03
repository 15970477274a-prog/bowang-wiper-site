import { alternatesWithHreflang } from "../../../../lib/hreflang";
import type { Metadata } from "next";
import { allProducts } from "../../../data/products";
import { getProductTranslation } from "../../../data/productTranslations";

type Props = { params: Promise<{ lang: string; id: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"];

export function generateStaticParams() {
  return allProducts.flatMap((p) => locales.map((lang) => ({ lang, id: p.id })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Product Not Found | Bowang Autoparts",
    };
  }

  const trans = getProductTranslation(id, lang);
  const name = trans?.name || product.name;
  const desc = trans?.desc || product.desc;
  const title = name + " | Bowang Autoparts";
  const description = desc.length > 160 ? desc.substring(0, 157) + "..." : desc;
  const canonicalPath = "/" + lang + "/products/" + product.id;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    keywords: product.keywords.join(", "),
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
