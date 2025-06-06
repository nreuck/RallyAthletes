
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rallyathletes.com'; // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Add disallow rules here if needed, e.g.,
        // disallow: '/admin/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
