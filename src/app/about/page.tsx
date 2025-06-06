
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Gem, Users, Zap, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Rally Athletes',
  description: 'Learn about the mission, vision, values, and leadership that drive Rally Athletes to innovate in the sports technology industry.',
};

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Continuously developing cutting-edge technology to meet the evolving needs of the sports world.',
  },
  {
    icon: Users,
    title: 'Athlete-Centric',
    description: 'Prioritizing the needs, development, and success of athletes at every level.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and ethical practices in all our endeavors.',
  },
  {
    icon: Users, 
    title: 'Community',
    description: 'Building strong, supportive connections within the global sports ecosystem.',
  },
  {
    icon: Gem,
    title: 'Excellence',
    description: 'Striving for the highest quality and performance in our products, services, and support.',
  },
];

interface Leader {
  name: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  bio: string;
}

const leadershipTeam: Leader[] = [
  {
    name: 'Alex Johnson',
    title: 'Chief Executive Officer',
    imageUrl: 'https://placehold.co/300x300.png',
    imageAlt: 'Alex Johnson, CEO',
    imageHint: 'professional headshot',
    bio: 'Alex brings over 20 years of experience in sports management and technology, driving innovation and growth at Rally Athletes.',
  },
  {
    name: 'Maria Garcia',
    title: 'Chief Technology Officer',
    imageUrl: 'https://placehold.co/300x300.png',
    imageAlt: 'Maria Garcia, CTO',
    imageHint: 'professional headshot',
    bio: 'Maria is a visionary technologist, leading the development of our cutting-edge platforms with a focus on user experience and scalability.',
  },
  {
    name: 'David Lee',
    title: 'Chief Operations Officer',
    imageUrl: 'https://placehold.co/300x300.png',
    imageAlt: 'David Lee, COO',
    imageHint: 'professional headshot',
    bio: 'David ensures operational excellence across all Rally Athletes brands, optimizing processes and fostering a culture of efficiency.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">About Rally Athletes</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to revolutionizing the sports landscape through innovative technology and unwavering commitment to athlete success.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Rally Athletes team working"
                data-ai-hint="diverse team meeting"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl font-semibold mb-4 flex items-center">
                <Target className="w-8 h-8 mr-3 text-primary" /> Our Mission
              </h2>
              <div className="mb-6 space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Rally Athletes, our mission is to create and unite purpose-built digital platforms that empower athletes, teams, and their support networks to achieve peak performance, seamless collaboration, and meaningful connections.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Through our family of brands—ScoutMe, Fuel My Game, and My Team Dashboard—we deliver intuitive tools and data-driven insights that help athletes showcase their talents, fuel their bodies with optimal nutrition, and streamline team management.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  By blending innovative technology, personalized experiences, and a deep understanding of the sports ecosystem, we enable every athlete, coach, parent, and organization to focus on what truly matters: growth, teamwork, and success both on and off the field.
                </p>
              </div>
              <h2 className="font-headline text-3xl font-semibold mb-4 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-primary" /> Our Vision
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>
                  We envision a future where every athlete—regardless of age, background, or discipline—has access to a unified, intelligent ecosystem that supports their journey from grassroots to elite levels. Rally Athletes will be recognized as the premier destination for holistic athlete development, where:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Talent Discovery through ScoutMe</strong> unlocks opportunities for athletes to be seen by recruiters, coaches, and programs worldwide, leveling the playing field for those who strive to go further.
                  </li>
                  <li>
                    <strong>Personalized Nutrition via Fuel My Game</strong> evolves into an indispensable resource that adapts to each athlete’s unique needs, anticipating trends in sports science and leveraging AI to optimize performance and recovery.
                  </li>
                  <li>
                    <strong>Effortless Team Operations powered by My Team Dashboard</strong> becomes the standard for clubs, leagues, and organizations to coordinate schedules, communications, and facilities without friction, so coaches and administrators can focus on strategy and development.
                  </li>
                </ul>
                <p>
                  By seamlessly integrating our brands under the Rally Athletes umbrella, we will pioneer a connected sports ecosystem—one that anticipates the needs of tomorrow’s athletes, fuels their passion today, and galvanizes communities around shared goals. We aim to inspire a global movement in which data-informed decisions, equitable access, and collaboration drive the next generation of sporting excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <Image
                      src={leader.imageUrl}
                      alt={leader.imageAlt}
                      data-ai-hint={leader.imageHint}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <CardTitle className="font-headline text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-primary">{leader.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16 bg-secondary rounded-lg shadow-lg">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              We're always looking for passionate and talented individuals to help us shape the future of sports technology. If you're driven by innovation and want to make an impact, explore our open positions.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/careers">
                View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
