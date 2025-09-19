import React from 'react';
import { cn } from '@/lib/utils';

interface BlogContentProps {
  content: string;
  className?: string;
  mode?: 'auto' | 'html' | 'text';
}

function hasHtmlTags(text: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(text);
}

export function BlogContent({ content, className, mode = 'auto' }: BlogContentProps) {
  if (mode === 'html' || (mode === 'auto' && hasHtmlTags(content))) {
    return (
      <div
        className={cn('prose dark:prose-invert max-w-none', className)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  return (
    <div className={cn('prose dark:prose-invert max-w-none whitespace-pre-line', className)}>
      {content}
    </div>
  );
}
