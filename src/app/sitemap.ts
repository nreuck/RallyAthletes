
import type { MetadataRoute } from 'next';
import { mockBlogPosts } from '@/lib/blogData';

// Ensure NEXT_PUBLIC_SITE_URL is set in your environment variables for production.
// Example: NEXT_PUBLIC_SITE_URL=https://www.rallyathletes.com
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rallyathletes.com'; 

  const staticPages = [
    '/',
    '/about',
    '/blog',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/scoutme',
    '/myteamdashboard',
    '/fuelmygame',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: (path === '/' || path === '/blog') ? 'daily' : 'weekly' as 'daily' | 'weekly', 
    priority: (path === '/') ? 1.0 : 0.8,
  }));

  const blogPosts = mockBlogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as 'weekly', 
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
