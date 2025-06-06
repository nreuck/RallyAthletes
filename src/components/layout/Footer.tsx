
// components/layout/Footer.tsx
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Rally Athletes Home">
              <ShieldCheck className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-semibold">Rally Athletes</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Driven by innovation and athlete success, Rally Athletes unites platforms to empower the sports community towards peak performance and meaningful connections.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
             <h3 className="font-headline text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer" aria-label="Rally Athletes on LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" aria-label="Rally Athletes on Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" aria-label="Rally Athletes on Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rally Athletes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
