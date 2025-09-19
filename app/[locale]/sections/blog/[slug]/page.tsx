import { getBlogBySlug, getBlogs } from '../../../(helpers)/getBlogs';
import { BlogSidebarSuggestions } from '@/components/blog/BlogSidebarSuggestions';
import { SocialLinks } from '@/components/blog/SocialLinks';
import { Locale } from '@/lib/types/blog';
import { notFound } from 'next/navigation';
import React from 'react';
import { BlogContent } from '@/components/blog/BlogContent';

interface BlogDetailPageProps { params: Promise<{ locale: Locale; slug: string }>; }

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  const post = await getBlogBySlug(slug, locale);
  if (!post) notFound();
  const all = await getBlogs(locale);

  // Calcular tiempo de lectura estimado
  const wordsPerMinute = 200;
  const textContent = post.content?.replace(/<[^>]*>/g, '') || '';
  const wordCount = textContent.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  // Formatear fecha de publicación
  const publishedDate = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;


  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-orange-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <article className="lg:col-span-8">
            {/* Header del artículo */}
            <header className="mb-8 lg:mb-12">
              {/* Imagen de portada mejorada */}
              {post.coverImage && (
                <div className="relative mb-8 group overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Información superpuesta en la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-20">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.category && (
                        <span className="px-3 py-1 bg-orange-400 text-white text-sm font-medium rounded-full shadow-lg">
                          {post.category}
                        </span>
                      )}
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Redes sociales */}
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
                <SocialLinks socialLinks={post.socialLinks} />
              </div>
            </header>

            {/* Contenido del artículo con estilos mejorados */}
            <div className="bg-white dark:bg-zinc-900/50 rounded-2xl shadow-xl p-6 lg:p-10 backdrop-blur-sm border border-gray-200 dark:border-zinc-800">
              {post.content && (
                <BlogContent
                  content={post.content}
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:text-gray-900 dark:prose-headings:text-gray-100
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-3xl prose-h1:lg:text-4xl prose-h1:mb-6
                    prose-h2:text-2xl prose-h2:lg:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-xl prose-h3:lg:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-strong:font-semibold
                    prose-a:text-orange-400 dark:prose-a:text-orange-400 prose-a:font-medium
                    prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
                    prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:bg-orange-50
                    dark:prose-blockquote:bg-orange-950/20 prose-blockquote:p-6 prose-blockquote:rounded-r-lg
                    prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-800
                    dark:prose-blockquote:text-gray-200
                    prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1
                    prose-code:rounded prose-code:text-sm prose-code:text-gray-800 dark:prose-code:text-gray-200
                    prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-200
                    dark:prose-pre:border-gray-800 prose-pre:rounded-lg prose-pre:shadow-lg
                    prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
                    [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:mx-auto
                    [&_img]:max-w-full [&_img]:h-auto [&_img]:transition-transform [&_img:hover]:scale-[1.02]
                    [&_table]:my-8 [&_table]:border-collapse [&_table]:rounded-lg [&_table]:overflow-hidden [&_table]:shadow-lg
                    [&_th]:bg-orange-400 [&_th]:text-white [&_th]:font-semibold [&_th]:p-3
                    [&_td]:p-3 [&_td]:border-b [&_td]:border-gray-200 dark:[&_td]:border-gray-700"
                />
              )}
            </div>
          </article>

          {/* Sidebar mejorado */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              <div className="bg-white dark:bg-zinc-900/50 rounded-2xl shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-zinc-800">
                <BlogSidebarSuggestions posts={all} currentSlug={post.slug} locale={locale} />
              </div>

              {/* Información adicional del post */}
              {post.tags.length > 0 && (
                <div className="bg-white dark:bg-zinc-900/50 rounded-2xl shadow-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/50 text-orange-400 dark:text-orange-400 text-sm rounded-full hover:bg-orange-200 dark:hover:bg-orange-900/70 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // Optionally could prebuild, leaving empty to fallback to runtime fetch
  return [];
}