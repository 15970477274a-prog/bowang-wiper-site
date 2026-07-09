import { alternatesWithHreflang } from "../../../../lib/hreflang";
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

  const title = post.title + " | Bowang Autoparts Blog";
  const description = post.excerpt.length > 160 ? post.excerpt.substring(0, 157) + "..." : post.excerpt;
  const url = "https://www.lelionautopart.com/en/blog/" + post.id;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    keywords: post.tags.join(", "),
    alternates: alternatesWithHreflang("/blog/" + id, "/en/blog/" + id),
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 600, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [post.image] },
  };
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
