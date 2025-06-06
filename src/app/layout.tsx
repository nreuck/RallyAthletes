
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable name
});

export const metadata: Metadata = {
  title: {
    default: 'Rally Athletes - Powering Athletes, Uniting Brands',
    template: '%s | Rally Athletes',
  },
  description: 'Central hub for Rally Athletes brands: ScoutMe Sports, My Team Dashboard, and Fuel My Game. Discover our mission to empower athletes and sports organizations.',
  keywords: ['Rally Athletes', 'ScoutMe Sports', 'My Team Dashboard', 'Fuel My Game', 'sports technology', 'athlete empowerment'],
  // Add more metadata here like openGraph, icons, etc. for production
  // e.g., manifest: '/site.webmanifest',
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
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
