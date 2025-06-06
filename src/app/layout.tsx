
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Rally Athletes - Powering Athletes, Uniting Brands',
    template: '%s | Rally Athletes',
  },
  description: 'Central hub for Rally Athletes brands: ScoutMe Sports, My Team Dashboard, and Fuel My Game. Discover our mission to empower athletes and sports organizations.',
  keywords: ['Rally Athletes', 'ScoutMe Sports', 'My Team Dashboard', 'Fuel My Game', 'sports technology', 'athlete empowerment'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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

