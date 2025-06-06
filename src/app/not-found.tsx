
// src/app/not-found.tsx
import { Button } from '@/components/ui/button';
import { FileQuestion, Home } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Rally Athletes',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-10 text-center">
      <FileQuestion className="h-16 w-16 text-primary mb-6" />
      <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Oops! The page you're looking for doesn't seem to exist. It might have been moved, deleted, or perhaps you mistyped the URL.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <Link href="/">
          <Home className="mr-2 h-5 w-5" /> Go to Homepage
        </Link>
      </Button>
    </div>
  );
}
