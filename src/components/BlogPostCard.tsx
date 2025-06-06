
// components/BlogPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  imageHint?: string;
  tags?: string[];
}

export function BlogPostCard({ slug, title, excerpt, date, imageUrl, imageAlt, imageHint, tags }: BlogPostCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            data-ai-hint={imageHint || "technology abstract"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {tags.slice(0, 2).map(tag => ( // Show max 2 tags on card
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
        <Link href={`/blog/${slug}`} className="block hover:text-primary">
          <CardTitle className="font-headline text-xl mb-1 line-clamp-2">{title}</CardTitle>
        </Link>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3 text-sm">{excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary hover:text-accent group">
          <Link href={`/blog/${slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
