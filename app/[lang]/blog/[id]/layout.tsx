import { alternatesWithHreflang } from "../../../../lib/hreflang";
import { truncateTitle } from "../../../../lib/seo";
import type { Metadata } from "next";
import { blogPosts } from "../../../data/blog";
import { getBlogTranslation } from "../../../data/blogTranslations";

type Props = { params: Promise<{ lang: string; id: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"];

export function generateStaticParams() {
  return blogPosts.flatMap((p) => locales.map((lang) => ({ lang, id: p.id })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return {
      metadataBase: new URL("https://www.lelionautopart.com"),
      title: "Post Not Found | Lelion Autoparts",
    };
  }

  const trans = getBlogTranslation(id, lang);
  const postTitle = trans?.title || post.title;
  const excerpt = trans?.excerpt || post.excerpt;
  const title = truncateTitle(postTitle, 36) + " | Lelion Autoparts";
  const description = excerpt.length > 160 ? excerpt.substring(0, 157) + "..." : excerpt;
  const canonicalPath = "/" + lang + "/blog/" + post.id;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/blog/" + id, canonicalPath),
    openGraph: {
      title,
      description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 800, height: 600, alt: postTitle }],
    },
    twitter: { card: "summary_large_image", title, description, images: [post.image] },
  };
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
