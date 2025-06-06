
import type { Metadata } from 'next';
import { Flame } from 'lucide-react';
import { BrandPageLayout, generateBrandPageMetadata } from '@/components/layout/BrandPageLayout';

export async function generateMetadata(): Promise<Metadata> {
  return generateBrandPageMetadata({
    title: 'Fuel My Game - Personalized Sports Nutrition',
    description: 'Discover Fuel My Game, a Rally Athletes brand offering personalized nutrition plans to optimize athlete performance.',
  });
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
      pageTitle="Fuel My Game - Personalized Sports Nutrition"
      pageDescription="Discover Fuel My Game, a Rally Athletes brand offering personalized nutrition plans to optimize athlete performance."
      mainImageSrc="https://placehold.co/800x400.png"
      mainImageAlt="Healthy food for athletes by Fuel My Game"
      mainImageDataAiHint="nutrition healthy food"
      whatIsTitle="What is Fuel My Game?"
      introductionParagraphs={introParagraphs}
      ctaLink="/contact"
      ctaText="Explore Nutrition Plans"
    />
  );
}
