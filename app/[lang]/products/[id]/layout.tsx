import type { Metadata } from "next";
import { allProducts } from "../../../data/products";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Product Not Found | Bowang Autoparts",
    };
  }

  const title = `${product.name} | OEM/ODM ${product.category} Wiper Blade - Bowang Autoparts`;
  const description = product.desc;
  const url = `https://www.lelionautopart.com/products/${product.id}`;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    keywords: product.keywords.join(", "),
    alternates: { languages: { en: "https://www.lelionautopart.com/en", es: "https://www.lelionautopart.com/es", ru: "https://www.lelionautopart.com/ru", fr: "https://www.lelionautopart.com/fr", de: "https://www.lelionautopart.com/de", zh: "https://www.lelionautopart.com/zh" },  canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}