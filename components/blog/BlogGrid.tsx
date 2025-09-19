import React from 'react';
import { BlogPost } from '@/lib/types/blog';
import { BlogCard } from './BlogCard';
import { FeaturedBlogCard } from './FeaturedBlogCard';

interface BlogGridProps { posts: BlogPost[]; locale: string; }

export function BlogGrid({ posts, locale }: BlogGridProps) {
  if (!posts.length) return <p className="py-12 text-center text-gray-500 dark:text-gray-400">No posts</p>;
  const [first, ...rest] = posts;
  return (
    <div className="grid gap-10">
      {first && <FeaturedBlogCard post={first} locale={locale} />}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map(p => <BlogCard key={p.id} post={p} locale={locale} />)}
      </div>
    </div>
  );
}
