"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BlogCategoryFilter } from './BlogCategoryFilter';

interface Props { categories: string[]; active?: string; labelAll: string; }

export default function CategoryFilterClient({ categories, active, labelAll }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const onChange = (category?: string) => {
    const sp = new URLSearchParams(params ? params.toString() : undefined);
    if (category) sp.set('category', category); else sp.delete('category');
    router.push('?' + sp.toString());
  };
  return <BlogCategoryFilter categories={categories} active={active} onChange={onChange} labelAll={labelAll} />;
}
