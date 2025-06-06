
import type { Metadata } from 'next';
import { LayoutDashboard } from 'lucide-react';
import { BrandPageLayout } from '@/components/layout/BrandPageLayout';

const brandMainImage = "https://placehold.co/800x400.png";
const brandMainImageAlt = "My Team Dashboard interface showing team schedule and analytics";

export async function generateMetadata(): Promise<Metadata> {
  const title = 'My Team Dashboard - Efficient Team Management';
  const description = 'Explore My Team Dashboard by Rally Athletes, the ultimate platform for sports team management, communication, and performance tracking.';
  return {
    title: title,
    description: description,
    keywords: ['My Team Dashboard', 'team management software', 'sports team communication', 'coaching tools', 'athlete performance tracking', 'Rally Athletes brand'],
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: brandMainImage,
          width: 800,
          height: 400,
          alt: brandMainImageAlt,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [brandMainImage],
    },
  };
}

export default function MyTeamDashboardPage() {
  const introParagraphs = [
    "My Team Dashboard, a core offering from Rally Athletes, is meticulously designed to revolutionize how sports teams operate by streamlining every facet of management. We empower coaches, players, parents, and administrators with a comprehensive suite of intuitive tools covering dynamic scheduling, instant communication channels, robust roster management, and insightful performance analytics.",
    "Imagine a world where practice changes are instantly communicated, game strategies are easily shared, and player progress is transparently tracked. Our platform cultivates this environment, fostering seamless collaboration and ensuring every team member is aligned and informed. My Team Dashboard acts as the central nervous system for your team, digitizing workflows and eliminating administrative bottlenecks.",
    "By centralizing operations—from managing player availability and tracking attendance to sharing crucial documents and analyzing game footage—My Team Dashboard liberates coaches and managers from time-consuming administrative tasks. This allows them to dedicate their valuable time and energy to what truly matters: strategic planning, skill development, and nurturing athlete growth. Elevate your team's efficiency and focus with My Team Dashboard."
  ];

  return (
    <BrandPageLayout
      brandIcon={<LayoutDashboard />}
      brandName="My Team Dashboard"
      brandSlogan="A comprehensive platform for team management, communication, and performance tracking. Simplify your coaching and team operations."
      mainImageSrc={brandMainImage}
      mainImageAlt={brandMainImageAlt}
      mainImageDataAiHint="dashboard schedule"
      whatIsTitle="What is My Team Dashboard?"
      introductionParagraphs={introParagraphs}
      ctaLink="/contact" // Example CTA
      ctaText="Request a Demo"
    />
  );
}
