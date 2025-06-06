
import type { Metadata } from 'next';
import CareersPageClient from '@/components/CareersPageClient';

export const metadata: Metadata = {
  title: 'Careers at Rally Athletes',
  description: 'Join our innovative team and help shape the future of sports technology. Explore open positions at Rally Athletes.',
  keywords: ['Rally Athletes careers', 'sports tech jobs', 'join our team', 'work in sports', 'engineering jobs', 'product manager jobs'],
  openGraph: {
    title: 'Careers at Rally Athletes',
    description: 'Explore exciting career opportunities at Rally Athletes and help build the future of sports technology.',
    // Default image from layout.tsx will be used
  },
  twitter: {
    title: 'Careers at Rally Athletes',
    description: 'Explore exciting career opportunities at Rally Athletes and help build the future of sports technology.',
    // Default image from layout.tsx will be used
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
