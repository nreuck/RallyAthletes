// src/app/not-found.tsx
import { Button } from '@/components/ui/button';
import { FileQuestion, Home, Compass, Mail } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Rally Athletes',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-10 text-center">
      <FileQuestion className="h-16 w-16 sm:h-20 sm:w-20 text-primary mb-6" />
      <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-md">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or perhaps you mistyped the URL.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground mb-8"
      >
        <Link href="/">
          <Home className="mr-2 h-5 w-5" /> Go to Homepage
        </Link>
      </Button>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Alternatively, you might find these pages helpful:</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/blog">
              <Compass className="mr-2 h-4 w-4" />
              Explore Our Blog
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
