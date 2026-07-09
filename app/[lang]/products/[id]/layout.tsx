import { alternatesWithHreflang } from "../../../../lib/hreflang";
import type { Metadata } from "next";
import { allProducts } from "../../../data/products";

type Props = { params: Promise<{ lang: string; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Product Not Found | Bowang Autoparts",
    };
  }

  const title = product.name + " | Bowang Autoparts";
  const description = product.desc.length > 160 ? product.desc.substring(0, 157) + "..." : product.desc;
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
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
  };
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
