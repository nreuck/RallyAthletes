
// components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const closeSheet = () => setIsSheetOpen(false);

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Rally Athletes Home">
            {/* Placeholder for logo before mount */}
            <div className="h-6 sm:h-7 w-8 bg-primary/20 rounded"></div>
            <span className="font-headline text-lg sm:text-xl font-semibold">Rally Athletes</span>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" disabled>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeSheet} aria-label="Rally Athletes Home">
          <Image 
            src="/rally-athletes-og-image.png" 
            alt="Rally Athletes Site Logo" 
            width={120} 
            height={63} 
            className="h-6 sm:h-7 w-auto" 
            priority
          />
          <span className="font-headline text-lg sm:text-xl font-semibold">Rally Athletes</span>
        </Link>

        <nav className="hidden md:flex gap-4 lg:gap-6 items-center" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px]">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={closeSheet} aria-label="Rally Athletes Home">
                  <Image 
                    src="/rally-athletes-og-image.png" 
                    alt="Rally Athletes Site Logo" 
                    width={120} 
                    height={63} 
                    className="h-7 w-auto" 
                  />
                  <span className="font-headline text-xl font-semibold">Rally Athletes</span>
                </Link>
                <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeSheet}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary py-2",
                        pathname === link.href ? "text-primary font-semibold" : "text-foreground"
                      )}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
