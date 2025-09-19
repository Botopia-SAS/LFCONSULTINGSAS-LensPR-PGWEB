export interface BlogRow {
  id: string;
  slug: string;
  title_spanish: string | null;
  excerpt_spanish: string | null;
  content_spanish: string | null;
  title_english: string | null;
  excerpt_english: string | null;
  content_english: string | null;
  title_portuguese: string | null;
  excerpt_portuguese: string | null;
  content_portuguese: string | null;
  meta_title_spanish: string | null;
  meta_description_spanish: string | null;
  meta_title_english: string | null;
  meta_description_english: string | null;
  meta_title_portuguese: string | null;
  meta_description_portuguese: string | null;
  cover_image_url: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  published: boolean | null;
  published_at: string | null;
  order_number: number | null;
  client_id: string | null;
  created_at: string | null;
  updated_at: string | null;
  social_links: any; // JSON from Supabase, will map later
  category_spanish: string | null;
  category_english: string | null;
  category_portuguese: string | null;
  tags_english: string | null;
  tags_spanish: string | null;
  tags_portuguese: string | null;
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
  icon_url?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  coverImage: string | null;
  ogImage: string | null;
  canonicalUrl: string | null;
  publishedAt: string | null;
  order: number;
  category: string | null;
  tags: string[];
  socialLinks: SocialLink[];
  meta: {
    title: string | null;
    description: string | null;
  };
}

export interface BlogListFilters {
  category?: string;
  search?: string;
}

export type Locale = 'es' | 'en' | 'pt';
