
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ScoutMeSports - Connecting Talent & Opportunity',
  description: 'Learn more about ScoutMeSports, a Rally Athletes brand dedicated to helping athletes get discovered.',
};

export default function ScoutMePage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rally Athletes
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12 md:mb-16">
          <div className="inline-block p-4 bg-primary/10 rounded-lg mb-6">
            <Users className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">ScoutMeSports</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting talented athletes with scouts and opportunities worldwide. Your journey to professional sports starts here.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">What is ScoutMeSports?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                ScoutMeSports, a premier brand under the Rally Athletes umbrella, is dedicated to bridging the gap between aspiring athletes and professional scouting networks. We provide a dynamic platform where athletes can showcase their talents, achievements, and potential to a global audience of scouts, coaches, and recruiters.
              </p>
              <div className="relative h-64 md:h-96 w-full my-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="Athlete showcasing skills for ScoutMeSports"
                  data-ai-hint="athlete scouting"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-muted-foreground text-lg">
                Our innovative tools and comprehensive athlete profiles make it easier than ever for talent to be discovered and for organizations to find the perfect fit for their teams. Whether you're an emerging athlete aiming for the next level or a scout looking for hidden gems, ScoutMeSports is your ultimate resource.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">
                    Learn More or Get Started
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">Part of the Rally Athletes Family</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                ScoutMeSports is proud to be a key component of Rally Athletes, working alongside other innovative brands to empower the entire sports ecosystem.
            </p>
            <Button variant="outline" asChild>
                <Link href="/about">Discover Rally Athletes</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
