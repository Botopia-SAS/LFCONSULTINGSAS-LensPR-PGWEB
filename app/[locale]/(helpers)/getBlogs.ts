import { supabase } from "@/lib/supabaseClient";
import { BlogRow, BlogPost, Locale, SocialLink } from "@/lib/types/blog";

function mapRowToPost(row: BlogRow, locale: Locale): BlogPost {
  const title =
    locale === "en"
      ? row.title_english
      : locale === "pt"
      ? row.title_portuguese
      : row.title_spanish;
  const excerpt =
    locale === "en"
      ? row.excerpt_english
      : locale === "pt"
      ? row.excerpt_portuguese
      : row.excerpt_spanish;
  const content =
    locale === "en"
      ? row.content_english
      : locale === "pt"
      ? row.content_portuguese
      : row.content_spanish;
  const metaTitle =
    locale === "en"
      ? row.meta_title_english
      : locale === "pt"
      ? row.meta_title_portuguese
      : row.meta_title_spanish;
  const metaDescription =
    locale === "en"
      ? row.meta_description_english
      : locale === "pt"
      ? row.meta_description_portuguese
      : row.meta_description_spanish;
  const category =
    locale === "en"
      ? row.category_english
      : locale === "pt"
      ? row.category_portuguese
      : row.category_spanish;
  const tagsRaw =
    locale === "en"
      ? row.tags_english
      : locale === "pt"
      ? row.tags_portuguese
      : row.tags_spanish;
  const tags =
    tagsRaw && typeof tagsRaw === "string"
      ? tagsRaw
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

  // Parse social links from JSON, con tipado estricto
  type CustomLink = { url: string; label?: string; icon_url?: string };
  type SocialLinksJson = { custom?: CustomLink[] } & Record<string, unknown>;

  const socialLinks: SocialLink[] = [];
  if (row.social_links) {
    let parsedLinks: SocialLinksJson | null = null;

    if (typeof row.social_links === "string") {
      try {
        parsedLinks = JSON.parse(row.social_links) as SocialLinksJson;
      } catch {
        parsedLinks = null;
      }
    } else if (typeof row.social_links === "object") {
      parsedLinks = row.social_links as SocialLinksJson;
    }

    if (parsedLinks) {
      for (const [platform, value] of Object.entries(parsedLinks)) {
        if (platform === "custom") continue;
        if (typeof value === "string" && value.trim()) {
          socialLinks.push({ platform, url: value });
        }
      }
      if (Array.isArray(parsedLinks.custom)) {
        for (const customLink of parsedLinks.custom) {
          if (
            customLink &&
            typeof customLink.url === "string" &&
            customLink.url.trim()
          ) {
            socialLinks.push({
              platform: "custom",
              url: customLink.url,
              label: customLink.label,
              icon_url: customLink.icon_url,
            });
          }
        }
      }
    }
  }

  return {
    id: row.id,
    slug: row.slug,
    title: title ?? "Untitled",
    excerpt: excerpt ?? null,
    content: content ? content.replace(/\n/g, "<br>") : null,
    coverImage: row.cover_image_url,
    ogImage: row.og_image_url,
    canonicalUrl: row.canonical_url,
    publishedAt: row.published_at,
    order: row.order_number ?? 9999,
    category: category ?? null,
    tags,
    socialLinks,
    meta: { title: metaTitle, description: metaDescription },
  };
}

export async function getBlogs(locale: Locale) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("published", true)
      .order("order_number", { ascending: true });

    if (error) {
      console.error("Supabase error fetching blogs:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return [] as BlogPost[];
    }

    if (!data) {
      console.warn("No blog data returned from Supabase");
      return [] as BlogPost[];
    }

    return (data as BlogRow[]).map((r) => mapRowToPost(r, locale));
  } catch (err) {
    console.error("Unexpected error in getBlogs:", err);
    return [] as BlogPost[];
  }
}

export async function getBlogBySlug(slug: string, locale: Locale) {
  try {
    console.log("Attempting to fetch blog with slug:", slug);

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) {
      console.error("Supabase error fetching blog by slug:", {
        slug,
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
        fullError: error,
      });
      return null;
    }

    if (!data) {
      console.warn("No blog found with slug:", slug);
      return null;
    }

    return mapRowToPost(data as BlogRow, locale);
  } catch (err) {
    console.error("Unexpected error in getBlogBySlug:", err);
    return null;
  }
}

export async function getBlogCategories(locale: Locale) {
  try {
    const posts = await getBlogs(locale);
    const set = new Set(
      posts.map((p) => p.category).filter(Boolean) as string[]
    );
    return Array.from(set).sort();
  } catch (err) {
    console.error("Unexpected error in getBlogCategories:", err);
    return [];
  }
}

export async function hasBlogsAvailable(): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("id")
      .eq("published", true)
      .limit(1);

    if (error) {
      console.error("Error checking for blogs:", error);
      return false;
    }

    return (data?.length ?? 0) > 0;
  } catch (err) {
    console.error("Unexpected error checking for blogs:", err);
    return false;
  }
}
