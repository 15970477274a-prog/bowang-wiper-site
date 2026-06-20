import { MetadataRoute } from 'next';
import { allProducts } from './data/products';
import { blogPosts } from './data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lelionautopart.com';

  // 1. Static routes
  const staticRoutes = [
    '',
    '/products',
    '/about',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Category routes
  const categories = ['universal', 'specific-fit', 'multifunction', 'wiper-arm', 'hybrid', 'rear-wiper'];
  const categoryRoutes = categories.map((cat) => ({
    url: baseUrl + '/products/category/' + cat,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Product routes
  const productRoutes = allProducts.map((product) => ({
    url: baseUrl + '/products/' + product.id,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: baseUrl + '/blog/' + post.id,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
