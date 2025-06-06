
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'My Team Dashboard - Efficient Team Management',
  description: 'Explore My Team Dashboard by Rally Athletes, the ultimate platform for sports team management and communication.',
};

export default function MyTeamDashboardPage() {
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
            <LayoutDashboard className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">My Team Dashboard</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform for team management, communication, and performance tracking. Simplify your coaching and team operations.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">What is My Team Dashboard?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-lg">
                My Team Dashboard, a core offering from Rally Athletes, is meticulously designed to revolutionize how sports teams operate by streamlining every facet of management. We empower coaches, players, parents, and administrators with a comprehensive suite of intuitive tools covering dynamic scheduling, instant communication channels, robust roster management, and insightful performance analytics.
              </p>
              <div className="relative h-64 md:h-96 w-full my-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="My Team Dashboard interface showing team schedule"
                  data-ai-hint="dashboard schedule"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <p className="text-muted-foreground text-lg">
                Imagine a world where practice changes are instantly communicated, game strategies are easily shared, and player progress is transparently tracked. Our platform cultivates this environment, fostering seamless collaboration and ensuring every team member is aligned and informed. My Team Dashboard acts as the central nervous system for your team, digitizing workflows and eliminating administrative bottlenecks.
              </p>
              <p className="text-muted-foreground text-lg">
                By centralizing operations—from managing player availability and tracking attendance to sharing crucial documents and analyzing game footage—My Team Dashboard liberates coaches and managers from time-consuming administrative tasks. This allows them to dedicate their valuable time and energy to what truly matters: strategic planning, skill development, and nurturing athlete growth. Elevate your team's efficiency and focus with My Team Dashboard.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">A Rally Athletes Brand</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                My Team Dashboard exemplifies Rally Athletes' commitment to providing integrated solutions that enhance efficiency and success in sports.
            </p>
            <Button variant="outline" asChild>
                <Link href="/about">Discover Rally Athletes</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
