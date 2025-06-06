
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, ArrowLeft } from 'lucide-react';
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
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Rally Athletes
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
                My Team Dashboard, a core offering from Rally Athletes, is designed to streamline every aspect of sports team management. We provide coaches, players, and administrators with intuitive tools for scheduling, communication, roster management, and performance analysis.
              </p>
              <div className="relative h-64 md:h-96 w-full my-6 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://placehold.co/800x400.png"
                  alt="My Team Dashboard interface showing team schedule"
                  data-ai-hint="dashboard schedule"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-muted-foreground text-lg">
                Our platform fosters seamless collaboration, ensures everyone stays informed, and helps unlock peak team performance. By centralizing team operations, My Team Dashboard allows coaches and managers to focus on strategy and player development, rather than administrative burdens.
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
            <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4">A Rally Athletes Solution</h2>
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
