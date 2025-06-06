
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import React from 'react';

interface BrandPageLayoutProps {
  brandIcon: React.ReactElement; // Expecting a Lucide icon component instance e.g. <Users />
  brandName: string;
  brandSlogan: string;
  // pageTitle and pageDescription removed as metadata is handled by individual pages
  mainImageSrc: string;
  mainImageAlt: string;
  mainImageDataAiHint: string;
  whatIsTitle: string;
  introductionParagraphs: string[];
  ctaLink: string;
  ctaText: string;
}

export function BrandPageLayout({
  brandIcon,
  brandName,
  brandSlogan,
  mainImageSrc,
  mainImageAlt,
  mainImageDataAiHint,
  whatIsTitle,
  introductionParagraphs,
  ctaLink,
  ctaText,
}: BrandPageLayoutProps) {
  return (
    <div className="bg-background py-10 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 sm:mb-8">
          <Button variant="outline" asChild aria-label="Navigate back to Rally Athletes homepage">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <ShieldCheck className="mr-2 h-4 w-4 text-primary" /> Back to Rally Athletes
            </Link>
          </Button>
        </div>

        <header className="text-center mb-10 md:mb-16">
          <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-lg mb-4 sm:mb-6">
            {React.cloneElement(brandIcon, { className: "h-12 w-12 sm:h-16 sm:w-16 text-primary" })}
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{brandName}</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {brandSlogan}
          </p>
        </header>

        <section className="mb-10 md:mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl sm:text-2xl">{whatIsTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm sm:text-base">
              {introductionParagraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <ResponsiveImage
                src={mainImageSrc}
                alt={mainImageAlt}
                dataAiHint={mainImageDataAiHint}
                containerClassName="my-6"
                priority
              />
              {introductionParagraphs.slice(2).map((paragraph, index) => (
                <p key={`cont-${index}`} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <div className="pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  <Link href={ctaLink}>
                    {ctaText}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold mb-4">A Rally Athletes Brand</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {brandName} exemplifies Rally Athletes' commitment to providing integrated solutions that enhance efficiency and success in sports.
          </p>
          <Button variant="outline" asChild>
            <Link href="/about">Discover Rally Athletes</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
