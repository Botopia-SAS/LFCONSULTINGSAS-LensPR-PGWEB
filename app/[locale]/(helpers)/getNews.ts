// app/[locale]/(helpers)/getNews.ts
import { createClient } from '@supabase/supabase-js';

type NewsRow = {
  id: number;
  media_url: string | null;
  created_at: string;
  title_spanish?: string | null;
  description_spanish?: string | null;
  editorial_spanish?: string | null;
  title_english?: string | null;
  description_english?: string | null;
  editorial_english?: string | null;
  title_portuguese?: string | null;
  description_portuguese?: string | null;
  editorial_portuguese?: string | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getNewsByLocale(locale: string) {
  let titleColumn: string, descriptionColumn: string, editorialColumn: string;

  if (locale === 'en') {
    titleColumn = 'title_english';
    descriptionColumn = 'description_english';
    editorialColumn = 'editorial_english';
  } else if (locale === 'pt') {
    titleColumn = 'title_portuguese';
    descriptionColumn = 'description_portuguese';
    editorialColumn = 'editorial_portuguese';
  } else {
    // Por defecto 'es'
    titleColumn = 'title_spanish';
    descriptionColumn = 'description_spanish';
    editorialColumn = 'editorial_spanish';
  }

  // Construir la cadena de columnas de forma segura
  const columns = [
    'id',
    'media_url',
    'created_at',
    titleColumn,
    descriptionColumn,
    editorialColumn,
  ].join(', ');

  // Realizamos la consulta a la tabla "news" y ordenamos por fecha de creación (descendente)
  // Hacemos un cast de la respuesta para evitar problemas de tipos.
  const { data, error } = await supabase
    .from('news')
    .select(columns) as { data: NewsRow[] | null; error: any };

  if (error) {
    console.error('Error fetching news:', error);
    return [];
  }

  // Mapear la data para renombrar las propiedades de forma consistente
  const results = (data || []).map((item) => ({
    id: item.id,
    mediaUrl: item.media_url,
    createdAt: item.created_at,
    title: item[titleColumn as keyof NewsRow] as string | null,
    description: item[descriptionColumn as keyof NewsRow] as string | null,
    editorial: item[editorialColumn as keyof NewsRow] as string | null,
  }));

  return results;
}
