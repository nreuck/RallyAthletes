
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockBlogPosts, type BlogPost } from '@/lib/blogData';
import { CalendarDays, UserCircle, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogPostPageProps {
  params: { slug: string };
}

async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return mockBlogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const postIndex = mockBlogPosts.findIndex((p) => p.slug === params.slug);
  const post = mockBlogPosts[postIndex];

  if (!post) {
    notFound();
  }

  const previousPost = postIndex > 0 ? mockBlogPosts[postIndex - 1] : null;
  const nextPost = postIndex < mockBlogPosts.length - 1 ? mockBlogPosts[postIndex + 1] : null;

  return (
    <article className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <nav className="mb-6 text-sm text-muted-foreground flex items-center">
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground truncate max-w-[200px] md:max-w-none">{post.title}</span>
        </nav>

        <header className="mb-8 md:mb-12">
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 text-muted-foreground text-sm mb-4">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center font-medium">
              <UserCircle className="h-4 w-4 mr-1.5" />
              By Rally Athletes Team
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
             <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
        </header>

        {post.imageUrl && (
          <div className="relative h-64 md:h-96 w-full mb-8 md:mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.imageAlt}
              data-ai-hint={post.imageHint || "article image"}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary prose-p:text-lg prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:font-semibold">
          <p>{post.content.introduction}</p>
          
          {post.content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-headline text-2xl md:text-3xl mt-8 mb-4">{section.heading}</h2>
              <p>{section.paragraph}</p>
            </div>
          ))}

          <h3 className="font-headline text-xl md:text-2xl mt-8 mb-4">Conclusion</h3>
          <p>{post.content.conclusion}</p>
        </div>

        <nav className="mt-12 md:mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Button variant="outline" asChild>
              <Link href={`/blog/${previousPost.slug}`} className="flex items-center group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <div>
                  <span className="text-xs text-muted-foreground">Previous Post</span>
                  <p className="font-medium line-clamp-1">{previousPost.title}</p>
                </div>
              </Link>
            </Button>
          ) : <div />} 
          {nextPost ? (
            <Button variant="outline" asChild>
              <Link href={`/blog/${nextPost.slug}`} className="flex items-center text-right group">
                 <div>
                  <span className="text-xs text-muted-foreground">Next Post</span>
                  <p className="font-medium line-clamp-1">{nextPost.title}</p>
                </div>
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : <div />}
        </nav>
      </div>
    </article>
  );
}
