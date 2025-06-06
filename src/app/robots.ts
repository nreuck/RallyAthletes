
import type { MetadataRoute } from 'next';

// Ensure NEXT_PUBLIC_SITE_URL is set in your environment variables for production.
// Example: NEXT_PUBLIC_SITE_URL=https://www.rallyathletes.com
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rallyathletes.com'; 

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Add disallow rules here if needed for specific paths not to be crawled, e.g.,
        // disallow: '/admin/',
        // disallow: '/private-user-data/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
