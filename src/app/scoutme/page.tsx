
import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { BrandPageLayout, generateBrandPageMetadata } from '@/components/layout/BrandPageLayout';

export async function generateMetadata(): Promise<Metadata> {
  return generateBrandPageMetadata({
    title: 'ScoutMe Sports - Connecting Talent & Opportunity',
    description: 'Learn more about ScoutMe Sports, a Rally Athletes brand dedicated to helping athletes get discovered.',
  });
}

export default function ScoutMeSportsPage() {
  const introParagraphs = [
    "ScoutMe Sports, a premier brand within the Rally Athletes family, is engineered to dismantle the barriers between promising athletes and the professional scouting world. Our dynamic, global platform empowers athletes to present their unique talents, verified achievements, and future potential to an extensive network of collegiate coaches, professional scouts, and international recruiters.",
    "Athletes can build comprehensive, multimedia-rich profiles—complete with verified statistics, academic records, compelling highlight reels, and personal statements. This allows them to take control of their recruitment narrative, ensuring their skills and dedication are visible to decision-makers far beyond their local reach. ScoutMe Sports provides the tools to shine a spotlight on every aspect of an athlete's journey and aspirations.",
    "For scouts, coaches, and organizations, ScoutMe Sports offers an unparalleled talent discovery engine. Our platform provides advanced search filters, verified data points, and direct communication channels, streamlining the often complex and time-consuming process of identifying and evaluating prospective talent. Find the perfect fit for your program with greater efficiency and confidence, tapping into a diverse pool of aspiring athletes.",
    "By seamlessly connecting these two crucial sides of the sports ecosystem, ScoutMe Sports revolutionizes talent identification. Whether you're an up-and-coming athlete ready to make your mark, or a recruitment professional searching for the next generation of stars, ScoutMe Sports is the definitive resource to turn potential into opportunity."
  ];

  return (
    <BrandPageLayout
      brandIcon={<Users />}
      brandName="ScoutMe Sports"
      brandSlogan="Connecting talented athletes with scouts and opportunities worldwide. Your journey to professional sports starts here."
      pageTitle="ScoutMe Sports - Connecting Talent & Opportunity"
      pageDescription="Learn more about ScoutMe Sports, a Rally Athletes brand dedicated to helping athletes get discovered."
      mainImageSrc="https://placehold.co/800x400.png"
      mainImageAlt="Athlete showcasing skills for ScoutMe Sports"
      mainImageDataAiHint="athlete scouting"
      whatIsTitle="What is ScoutMe Sports?"
      introductionParagraphs={introParagraphs}
      ctaLink="/contact"
      ctaText="Learn More & Get Started"
    />
  );
}
