
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrandCard } from '@/components/BrandCard';
import { Users, LayoutDashboard, Flame, Newspaper, Send } from 'lucide-react';
import Image from 'next/image';

const brands = [
  {
    icon: Users,
    name: 'ScoutMe Sports',
    description: 'Connecting talented athletes with scouts and opportunities worldwide. Your journey to professional sports starts here.',
    link: '/scoutme',
  },
  {
    icon: LayoutDashboard,
    name: 'My Team Dashboard',
    description: 'A comprehensive platform for team management, communication, and performance tracking. Simplify your coaching and team operations.',
    link: '/myteamdashboard',
  },
  {
    icon: Flame,
    name: 'Fuel My Game',
    description: 'Personalized nutrition plans and resources to help athletes optimize performance and recovery. Eat like a champion.',
    link: '/fuelmygame',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Powering Athletes, <span className="text-primary">Uniting Brands</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Rally Athletes unites groundbreaking sports technology under one roof. Discover our family of brands—ScoutMe Sports, My Team Dashboard, and Fuel My Game—each platform meticulously engineered to elevate every dimension of the athletic journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
              <Link href="#brands">Explore Our Brands</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-lg transform transition-transform hover:scale-105">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Showcase Section */}
      <section id="brands" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Our Flagship Brands</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Each brand under Rally Athletes offers unique value, tailored to meet the diverse needs of athletes, coaches, and sports organizations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.name} {...brand} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                At Rally Athletes, we're fueled by innovation and a commitment to athlete success. We build specialized platforms that empower individuals and teams, helping them reach their full potential and transform their game.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">Discover Our Mission</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team collaboration"
                data-ai-hint="team sports"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub / Blog CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore industry insights, success stories, and the latest updates from Rally Athletes and our brands.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/blog">Visit Our Blog</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Send className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions or want to learn more about Rally Athletes? We’d love to hear from you.
          </p>
          <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
