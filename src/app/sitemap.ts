
import type { MetadataRoute } from 'next';
import { mockBlogPosts } from '@/lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rallyathletes.com'; // Replace with your actual domain

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
    changeFrequency: (path === '/' || path === '/blog') ? 'daily' : 'weekly' as 'daily' | 'weekly', // Type assertion
    priority: (path === '/') ? 1.0 : 0.8,
  }));

  const blogPosts = mockBlogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'weekly' as 'weekly', // Type assertion
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
