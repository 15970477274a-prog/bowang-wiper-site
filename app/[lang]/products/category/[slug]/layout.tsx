import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = `${categoryName} Wiper Blades Wholesale | Bowang Autoparts`;
  const description = `Factory-direct wholesale ${categoryName.toLowerCase()} wiper blades for global distributors. ISO 9001 & IATF 16949 certified manufacturer. OEM/ODM available, competitive bulk pricing.`;
  const url = `https://www.lelionautopart.com/products/category/${slug}`;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}