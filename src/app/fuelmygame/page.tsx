
import type { Metadata } from 'next';
import { Flame } from 'lucide-react';
import { BrandPageLayout } from '@/components/layout/BrandPageLayout';

const brandMainImage = "https://placehold.co/800x400.png";
const brandMainImageAlt = "Healthy food and nutrition plan for athletes by Fuel My Game";

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Fuel My Game - Personalized Sports Nutrition';
  const description = 'Discover Fuel My Game, a Rally Athletes brand offering personalized nutrition plans and resources to optimize athlete performance and recovery.';
  return {
    title: title,
    description: description,
    keywords: ['Fuel My Game', 'sports nutrition', 'athlete diet', 'meal planning', 'performance nutrition', 'Rally Athletes brand'],
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

export default function FuelMyGamePage() {
  const introParagraphs = [
    "Fuel My Game, a vital part of the Rally Athletes family, is committed to revolutionizing how athletes approach nutrition. We understand that peak performance starts with optimal fueling, which is why we offer personalized nutrition plans, cutting-edge resources, and expert guidance.",
    "Our platform helps athletes understand their unique dietary needs, make informed food choices, and develop sustainable eating habits that support their training, enhance recovery, and elevate their game. With Fuel My Game, athletes can confidently nourish their bodies to achieve their full potential."
  ];

  return (
    <BrandPageLayout
      brandIcon={<Flame />}
      brandName="Fuel My Game"
      brandSlogan="Personalized nutrition plans and resources to help athletes optimize performance and recovery. Eat like a champion."
      mainImageSrc={brandMainImage}
      mainImageAlt={brandMainImageAlt}
      mainImageDataAiHint="nutrition healthy food"
      whatIsTitle="What is Fuel My Game?"
      introductionParagraphs={introParagraphs}
      ctaLink="/contact" // Example CTA
      ctaText="Explore Nutrition Plans"
    />
  );
}
