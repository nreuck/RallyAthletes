
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Fuel My Game - Personalized Sports Nutrition',
  description: 'Discover Fuel My Game, a Rally Athletes brand offering personalized nutrition plans to optimize athlete performance.',
};

export default function FuelMyGamePage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/" aria-label="Navigate back to Rally Athletes homepage">
              <ArrowLeft className="mr-2 h-4 w-4" /> <ShieldCheck className="mr-2 h-4 w-4 text-primary" /> Back to Rally Athletes
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12 md:mb-16">
          <div className="inline-block p-4 bg-primary/10 rounded-lg mb-6">
            <Flame className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Fuel My Game</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized nutrition plans and resources to help athletes optimize performance and recovery. Eat like a champion.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">What is Fuel My Game?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Fuel My Game, a vital part of the Rally Athletes family, is committed to revolutionizing how athletes approach nutrition. We understand that peak performance starts with optimal fueling, which is why we offer personalized nutrition plans, cutting-edge resources, and expert guidance.
              </p>
              <div className="relative h-64 md:h-96 w-full my-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="Healthy food for athletes by Fuel My Game"
                  data-ai-hint="nutrition healthy food"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <p className="text-muted-foreground text-lg">
                Our platform helps athletes understand their unique dietary needs, make informed food choices, and develop sustainable eating habits that support their training, enhance recovery, and elevate their game. With Fuel My Game, athletes can confidently nourish their bodies to achieve their full potential.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">
                    Explore Nutrition Plans
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">A Rally Athletes Brand</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Fuel My Game leverages the innovative spirit of Rally Athletes to deliver best-in-class nutritional support for athletes at all levels.
            </p>
            <Button variant="outline" asChild>
                <Link href="/about">Learn About Rally Athletes</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}

