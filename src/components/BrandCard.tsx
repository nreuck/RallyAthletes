
// components/BrandCard.tsx
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface BrandCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
}

export function BrandCard({ icon: Icon, name, description, link }: BrandCardProps) {
  return (
    <Link href={link} className="block h-full group">
      <Card className="flex flex-col h-full transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Icon className="h-10 w-10 text-primary" />
          <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-base text-foreground/90">{description}</p>
        </CardContent>
        <CardFooter>
          <span className="flex items-center text-sm font-medium text-primary group-hover:text-accent group-hover:underline p-0">
            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
