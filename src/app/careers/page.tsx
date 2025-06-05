
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, MapPin, CalendarDays, ArrowRight, Send, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { companyBenefits, openPositions, type JobPosition } from '@/lib/careersData';

export const metadata: Metadata = {
  title: 'Careers at Rally Athletes',
  description: 'Join our innovative team and help shape the future of sports technology. Explore open positions at Rally Athletes.',
};

function JobPositionCard({ position }: { position: JobPosition }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{position.title}</CardTitle>
        <CardDescription className="text-sm text-primary">{position.department}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 shrink-0" />
          {position.location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Briefcase className="h-4 w-4 mr-2 shrink-0" />
          <Badge variant="secondary" className="mr-2">{position.type}</Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-2 shrink-0" />
          Posted: {new Date(position.postedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3">{position.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={position.applyLink}>
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function CareersPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At Rally Athletes, we're passionate about innovation and driven to empower the sports world. We're looking for talented individuals to help us build the future.
          </p>
        </header>

        <section id="why-join-us" className="mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Why Work With Rally Athletes?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                    <benefit.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section id="open-positions" className="mb-12 md:mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Current Openings</h2>
          {openPositions.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position) => (
                <JobPositionCard key={position.id} position={position} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-4">No open positions at the moment.</p>
              <p className="text-md text-muted-foreground max-w-lg mx-auto mb-6">
                We're always on the lookout for exceptional talent. If you believe your skills could benefit Rally Athletes, we'd love to hear from you!
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="mailto:careers@rallyathletes.com?subject=Speculative%20Application">
                  Send Us Your Resume <Send className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          )}
        </section>

        <section className="py-12 md:py-16 bg-secondary rounded-lg shadow-lg">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative h-64 md:h-80 w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-xl">
                <Image
                    src="https://placehold.co/800x400.png"
                    alt="Diverse team collaborating at Rally Athletes"
                    data-ai-hint="team collaboration office"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Be Part of Something Bigger</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              We believe in fostering a culture of innovation, collaboration, and growth. Join Rally Athletes and make a real impact on the future of sports technology.
            </p>
             <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/about">
                Learn More About Our Mission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
