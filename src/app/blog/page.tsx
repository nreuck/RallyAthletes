
import type { Metadata } from 'next';
import { BlogPostCard } from '@/components/BlogPostCard';
import { mockBlogPosts } from '@/lib/blogData';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Rally Athletes',
  description: 'Read the latest news, insights, and success stories from Rally Athletes and our brands.',
};

export default function BlogPage() {
  const posts = mockBlogPosts; // In a real app, fetch this data

  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Rally Athletes Blog</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, industry insights, and success stories from the world of Rally Athletes.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <p className="text-xl text-muted-foreground mb-4">No articles published yet.</p>
            <p className="text-md text-muted-foreground">Check back soon for the latest insights and news from Rally Athletes!</p>
          </div>
        )}
      </div>
    </div>
  );
}
