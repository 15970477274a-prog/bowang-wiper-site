import type { Metadata } from "next";
import { blogPosts } from "../../../data/blog";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Post Not Found | Bowang Autoparts",
    };
  }

  const title = `${post.title} | Bowang Autoparts Blog`;
  const url = `https://www.lelionautopart.com/blog/${post.id}`;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    alternates: { languages: { en: "https://www.lelionautopart.com/en", es: "https://www.lelionautopart.com/es", ru: "https://www.lelionautopart.com/ru", fr: "https://www.lelionautopart.com/fr", de: "https://www.lelionautopart.com/de", zh: "https://www.lelionautopart.com/zh" },  canonical: url },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 600, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}