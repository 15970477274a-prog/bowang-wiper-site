import { blogPosts } from "./blog";
import { getBlogTranslation } from "./blogTranslations";

/**
 * Flat, serialisable shape for the blog index cards.
 *
 * The index page used to import `blogPosts` and `getBlogTranslation` inside a
 * client component, which shipped the whole corpus plus five translation tables
 * to the browser. Resolving the localised strings here keeps that data on the
 * server; only the fields a card actually renders cross the boundary.
 */
export type BlogListItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
};

export function blogListItems(locale: string): BlogListItem[] {
  return blogPosts
    .map((post) => {
      const translation = getBlogTranslation(post.id, locale);
      return {
        id: post.id,
        title: translation?.title || post.title,
        excerpt: translation?.excerpt || post.excerpt,
        date: post.date,
        author: post.author,
        category: post.category,
        image: post.image,
        tags: post.tags,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
