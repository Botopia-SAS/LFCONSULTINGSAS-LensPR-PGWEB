import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types/blog';

interface BlogSidebarSuggestionsProps { posts: BlogPost[]; currentSlug?: string; locale: string; }

export function BlogSidebarSuggestions({ posts, currentSlug, locale }: BlogSidebarSuggestionsProps) {
  const suggestions = posts.filter(p => p.slug !== currentSlug).slice(0,4);
  if (!suggestions.length) return null;

  return (
    <aside className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Artículos relacionados</h3>

      <div className="space-y-4">
        {suggestions.map((p) => (
          <article key={p.id} className="group">
            <Link href={`/${locale}/sections/blog/${p.slug}`} className="block hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-lg p-3 transition-colors duration-200">
              <div className="flex gap-3">
                {p.coverImage && (
                  <div className="flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium leading-tight line-clamp-2 text-gray-900 dark:text-gray-100 mb-1">
                    {p.title}
                  </h4>

                  {p.excerpt && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {p.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Call to action para ver más artículos */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700">
        <Link
          href={`/${locale}/sections/blog`}
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors underline"
        >
          Ver todos los artículos →
        </Link>
      </div>
    </aside>
  );
}
