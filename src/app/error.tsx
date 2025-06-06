
"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-10 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6" />
      <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected issue. Please try again, or if the problem persists, contact support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Try Again
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
        >
          <Link href="/">
            <Home className="mr-2 h-5 w-5" /> Go to Homepage
          </Link>
        </Button>
      </div>
      {error?.digest && (
        <p className="text-xs text-muted-foreground mt-4">Error Digest: {error.digest}</p>
      )}
    </div>
  );
}
