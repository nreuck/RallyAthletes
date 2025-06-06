
"use client";

import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string | StaticImport;
  alt: string;
  dataAiHint: string;
  priority?: boolean;
  containerClassName?: string;
  imageClassName?: string;
}

export function ResponsiveImage({
  src,
  alt,
  dataAiHint,
  priority = false,
  containerClassName,
  imageClassName,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        data-ai-hint={dataAiHint}
        layout="fill"
        objectFit="cover"
        priority={priority}
        className={cn(imageClassName)}
      />
    </div>
  );
}
