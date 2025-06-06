
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter as FontInter, PT_Sans as FontPTSans } from 'next/font/google';

const fontInter = FontInter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fontPTSans = FontPTSans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-pt-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rallyathletes.com';
const defaultOgImage = `${siteUrl}/rally-athletes-og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rally Athletes - Powering Athletes, Uniting Brands',
    template: '%s | Rally Athletes',
  },
  description: 'Central hub for Rally Athletes brands: ScoutMe Sports, My Team Dashboard, and Fuel My Game. Discover our mission to empower athletes and sports organizations.',
  keywords: ['Rally Athletes', 'ScoutMe Sports', 'My Team Dashboard', 'Fuel My Game', 'sports technology', 'athlete empowerment', 'sports platform', 'athletic development', 'sports software', 'youth sports', 'coach tools', 'athlete nutrition'],
  openGraph: {
    title: {
      default: 'Rally Athletes - Powering Athletes, Uniting Brands',
      template: '%s | Rally Athletes',
    },
    description: 'Central hub for Rally Athletes brands: ScoutMe Sports, My Team Dashboard, and Fuel My Game.',
    url: '/',
    siteName: 'Rally Athletes',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Rally Athletes Logo Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Rally Athletes - Powering Athletes, Uniting Brands',
      template: '%s | Rally Athletes',
    },
    description: 'Central hub for Rally Athletes brands: ScoutMe Sports, My Team Dashboard, and Fuel My Game.',
    images: [defaultOgImage],
    // site: '@RallyAthletes', // Optional: Add your Twitter handle
    // creator: '@RallyAthletes', // Optional: Add your Twitter handle
  },
  // manifest: '/site.webmanifest', // If you have one
  // icons: { 
  //   icon: '/favicon.ico', // You would place favicon.ico in public folder
  //   apple: '/apple-touch-icon.png', // You would place apple-touch-icon.png in public folder
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontInter.variable} ${fontPTSans.variable}`}>
      <head>
        {/* Google Fonts preconnects are no longer needed when using next/font */}
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
