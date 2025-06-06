
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'ScoutMe Sports - Connecting Talent & Opportunity',
  description: 'Learn more about ScoutMe Sports, a Rally Athletes brand dedicated to helping athletes get discovered.',
};

export default function ScoutMeSportsPage() {
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
            <Users className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">ScoutMe Sports</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting talented athletes with scouts and opportunities worldwide. Your journey to professional sports starts here.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">What is ScoutMe Sports?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                ScoutMe Sports, a premier brand within the Rally Athletes family, is engineered to dismantle the barriers between promising athletes and the professional scouting world. Our dynamic, global platform empowers athletes to present their unique talents, verified achievements, and future potential to an extensive network of collegiate coaches, professional scouts, and international recruiters.
              </p>
              <p className="text-muted-foreground text-lg">
                Athletes can build comprehensive, multimedia-rich profiles—complete with verified statistics, academic records, compelling highlight reels, and personal statements. This allows them to take control of their recruitment narrative, ensuring their skills and dedication are visible to decision-makers far beyond their local reach. ScoutMe Sports provides the tools to shine a spotlight on every aspect of an athlete's journey and aspirations.
              </p>
              <div className="relative h-64 md:h-96 w-full my-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="Athlete showcasing skills for ScoutMe Sports"
                  data-ai-hint="athlete scouting"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <p className="text-muted-foreground text-lg">
                For scouts, coaches, and organizations, ScoutMe Sports offers an unparalleled talent discovery engine. Our platform provides advanced search filters, verified data points, and direct communication channels, streamlining the often complex and time-consuming process of identifying and evaluating prospective talent. Find the perfect fit for your program with greater efficiency and confidence, tapping into a diverse pool of aspiring athletes.
              </p>
               <p className="text-muted-foreground text-lg">
                By seamlessly connecting these two crucial sides of the sports ecosystem, ScoutMe Sports revolutionizes talent identification. Whether you're an up-and-coming athlete ready to make your mark, or a recruitment professional searching for the next generation of stars, ScoutMe Sports is the definitive resource to turn potential into opportunity.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">
                    Learn More & Get Started
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">A Rally Athletes Brand</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                ScoutMe Sports is proud to be a key component of Rally Athletes, working alongside other innovative brands to empower the entire sports ecosystem.
            </p>
            <Button variant="outline" asChild>
                <Link href="/about">Discover Rally Athletes</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
