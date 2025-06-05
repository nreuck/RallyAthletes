
import type { Metadata } from 'next';
import CareersPageClient from '@/components/CareersPageClient';

export const metadata: Metadata = {
  title: 'Careers at Rally Athletes',
  description: 'Join our innovative team and help shape the future of sports technology. Explore open positions at Rally Athletes.',
};

export default function CareersPage() {
  return <CareersPageClient />;
}
