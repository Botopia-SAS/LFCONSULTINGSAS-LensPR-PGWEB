import { createClient } from "@supabase/supabase-js";

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
  let titleColumn: keyof NewsRow,
    descriptionColumn: keyof NewsRow,
    editorialColumn: keyof NewsRow;

  if (locale === "en") {
    titleColumn = "title_english";
    descriptionColumn = "description_english";
    editorialColumn = "editorial_english";
  } else if (locale === "pt") {
    titleColumn = "title_portuguese";
    descriptionColumn = "description_portuguese";
    editorialColumn = "editorial_portuguese";
  } else {
    // Por defecto 'es'
    titleColumn = "title_spanish";
    descriptionColumn = "description_spanish";
    editorialColumn = "editorial_spanish";
  }

  // Obtener todos los datos y manejar la ausencia de columnas
  const { data, error } = await supabase.from("news").select("*"); // Seleccionamos todas las columnas

  if (error) {
    console.error("Error fetching news:", error);
    return [];
  }

  // Mapear los datos de manera segura
  return (data || []).map((item) => ({
    id: item.id,
    mediaUrl: item.media_url,
    createdAt: item.created_at,
    title: item[titleColumn] ?? "Título no disponible",
    description: item[descriptionColumn] ?? "Descripción no disponible",
    editorial: item[editorialColumn] ?? null, // Puede ser null si no existe
  }));
}
