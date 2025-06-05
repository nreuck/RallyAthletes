import type { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Gem, Users, Zap, ShieldCheck } from 'lucide-react'; // Gem for Values, Zap for Innovation, ShieldCheck for Integrity
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Rally Athletes',
  description: 'Learn about the mission, vision, and values that drive Rally Athletes to innovate in the sports technology industry.',
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
    icon: Users, // Re-using Users as it's general enough for 'Community'
    title: 'Community',
    description: 'Building strong, supportive connections within the global sports ecosystem.',
  },
  {
    icon: Gem,
    title: 'Excellence',
    description: 'Striving for the highest quality and performance in our products, services, and support.',
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To empower athletes and sports organizations through innovative digital solutions, fostering growth, engagement, and peak performance. We aim to provide accessible, powerful tools that make a tangible difference in the sports journey.
              </p>
              <h2 className="font-headline text-3xl font-semibold mb-4 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-primary" /> Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading digital ecosystem in sports, connecting every athlete, team, and fan with the tools they need to succeed and enjoy the game. We envision a future where technology seamlessly enhances every aspect of sport.
              </p>
            </div>
          </div>
        </section>

        <section>
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
      </div>
    </div>
  );
}
