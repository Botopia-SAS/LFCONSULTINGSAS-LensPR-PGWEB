# Blog Components

Componentes implementados:
- `BlogCard` tarjeta estándar.
- `FeaturedBlogCard` tarjeta destacada (primer orden).
- `BlogGrid` compone destacada + grid.
- `BlogCategoryFilter` chips de categorías (client side nav con query param `?category=`).
- `BlogSidebarSuggestions` lista lateral en detalle.

Helpers:
- `getBlogs(locale)` obtiene posts publicados ordenados por `order_number`.
- `getBlogBySlug(slug, locale)` detalle.
- `getBlogCategories(locale)` categorías únicas por idioma.

Tipos en `lib/types/blog.ts`.

Cómo añadir un post (tabla `blogs`):
1. Insertar fila con `slug` único y campos multilenguaje.
2. Marcar `published=true` y elegir `order_number` (1 será destacado).
3. Llenar `cover_image_url` (recomendado 1200x630) y opcional `og_image_url`.
4. `content_<idioma>` debe incluir el `<h1>` o título inicial (no se renderiza título duplicado).
5. Para tags usar coma: `growth,vc,ecosystem` según idioma.

Categorías:
- Usa `category_<idioma>`; se generan chips dinámicamente.

SEO future:
- Los campos `meta_title_*` y `meta_description_*` están mapeados en el objeto `post.meta` para usar en `<head>` si se agrega layout específico.

Extensiones sugeridas futuras:
- Paginación server (añadir límite + cursor).
- Búsqueda full-text (Supabase `fts`).
- Render Markdown -> HTML antes de guardar o on-the-fly.

Interfaz principal `BlogPost` ya incluida; evitar `any` en nuevos componentes.
