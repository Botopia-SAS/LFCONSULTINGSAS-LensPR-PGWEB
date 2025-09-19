import { getBlogs, getBlogCategories } from '../../(helpers)/getBlogs';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { Locale } from '@/lib/types/blog';
import CategoryFilterClient from '@/components/blog/CategoryFilterClient';
import React from 'react';
import { getTranslations } from 'next-intl/server';

interface BlogListPageProps { params: Promise<{ locale: Locale }>; searchParams: Promise<{ category?: string }>; }

export default async function BlogPage({ params, searchParams }: BlogListPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const allPosts = await getBlogs(locale);
  const categories = await getBlogCategories(locale);
  const { category: activeCategory } = await searchParams;
  const posts = activeCategory ? allPosts.filter(p => p.category === activeCategory) : allPosts;
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-center">{t('title')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">{t('description')}</p>
      </header>
      <CategoryFilterClient categories={categories} active={activeCategory} labelAll={t('all')} />
  <BlogGrid posts={posts} locale={locale} />
    </main>
  );
}
