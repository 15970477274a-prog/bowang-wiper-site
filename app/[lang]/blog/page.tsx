import { blogListItems } from "../../data/blogList";
import BlogClient from "../../../components/BlogClient";

type Props = { params: Promise<{ lang: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;
type Locale = (typeof locales)[number];

/**
 * Blog index — server component.
 *
 * It used to be `"use client"` and read `blogPosts` + `getBlogTranslation`
 * directly, which shipped the whole blog corpus and its five translation tables
 * (~350 KB) to every visitor to render twelve cards. Only the fields a card
 * renders are serialised into the page now.
 */
export default async function Page({ params }: Props) {
  const { lang } = await params;
  const locale: Locale = (locales as readonly string[]).includes(lang) ? (lang as Locale) : "en";

  return <BlogClient locale={locale} posts={blogListItems(locale)} />;
}
