import React from 'react';

interface BlogCategoryFilterProps {
  categories: string[];
  active?: string;
  onChange: (category?: string) => void;
  labelAll: string;
}

export function BlogCategoryFilter({ categories, active, onChange, labelAll }: BlogCategoryFilterProps) {
  if (!categories.length) return null;
  return (
    <div className="flex flex-wrap gap-3 py-6">
      <button
        onClick={() => onChange(undefined)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${!active ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
  >{labelAll}</button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${active===cat ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'}`}
        >{cat}</button>
      ))}
    </div>
  );
}
