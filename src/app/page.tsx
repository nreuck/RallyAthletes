
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrandCard } from '@/components/BrandCard';
import { Users, LayoutDashboard, Flame, Newspaper, Send, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { BlogPostCard } from '@/components/BlogPostCard';
import { mockBlogPosts } from '@/lib/blogData';

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
  const latestPosts = mockBlogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-6">
            <ShieldCheck className="h-16 w-16 sm:h-20 sm:w-20 text-primary" />
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powering Athletes, <span className="text-primary">Uniting Brands</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Rally Athletes unites groundbreaking sports technology under one roof. Discover our family of brands—ScoutMe Sports, My Team Dashboard, and Fuel My Game—each platform meticulously engineered to elevate every dimension of the athletic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section id="brands" className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">Our Flagship Brands</h2>
          <p className="text-center text-muted-foreground mb-10 sm:mb-12 max-w-2xl mx-auto">
            Each brand under Rally Athletes offers unique value, tailored to meet the diverse needs of athletes, coaches, and sports organizations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {brands.map((brand) => (
              <BrandCard key={brand.name} {...brand} />
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-6 text-base sm:text-lg">
                At Rally Athletes, we're fueled by innovation and a commitment to athlete success. We build specialized platforms that empower individuals and teams, helping them reach their full potential and transform their game.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/about">Discover Our Mission</Link>
              </Button>
            </div>
            <div className="relative h-56 sm:h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team collaboration at Rally Athletes office"
                data-ai-hint="team sports"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <Link href="/blog" aria-label="Visit Our Blog">
                <Newspaper className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6 hover:text-accent transition-colors" />
            </Link>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Latest Insights & News</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Stay informed with the latest updates, success stories, and industry trends from the world of Rally Athletes.
            </p>
          </div>
          {latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  imageUrl={post.imageUrl}
                  imageAlt={post.imageAlt}
                  imageHint={post.imageHint}
                  tags={post.tags}
                  isPriority={index < 3} 
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-base sm:text-lg">No blog posts available yet. Check back soon!</p>
          )}
          <div className="text-center mt-10 sm:mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/blog">Visit Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link href="/contact" aria-label="Contact Us">
            <Send className="h-12 w-12 sm:h-16 sm:w-16 text-accent mx-auto mb-4 sm:mb-6 hover:text-primary transition-colors" />
          </Link>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Have questions or want to learn more about Rally Athletes? We’d love to hear from you.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
