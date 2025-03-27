import { createClient } from "@supabase/supabase-js";

type ClientRow = {
  id: string;
  country_spanish: string;
  country_english: string;
  country_portuguese: string;
  name_spanish: string;
  name_english: string;
  name_portuguese: string;
  job_title_spanish: string;
  job_title_english: string;
  job_title_portuguese: string;
  description_spanish: string;
  description_english: string;
  description_portuguese: string;
  media_url: string | null;
  logo_url: string | null;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getClients(locale: string) {
  let nameColumn: keyof ClientRow,
    descriptionColumn: keyof ClientRow,
    jobTitleColumn: keyof ClientRow,
    countryColumn: keyof ClientRow;

  if (locale === "en") {
    nameColumn = "name_english";
    descriptionColumn = "description_english";
    jobTitleColumn = "job_title_english";
    countryColumn = "country_english";
  } else if (locale === "pt") {
    nameColumn = "name_portuguese";
    descriptionColumn = "description_portuguese";
    jobTitleColumn = "job_title_portuguese";
    countryColumn = "country_portuguese";
  } else {
    nameColumn = "name_spanish";
    descriptionColumn = "description_spanish";
    jobTitleColumn = "job_title_spanish";
    countryColumn = "country_spanish";
  }

  const { data, error } = await supabase.from("clients").select("*");
  if (error) {
    console.error("Error fetching clients:", error);
    return [];
  }

  return (data || []).map((item) => ({
    id: item.id,
    name: item[nameColumn],
    media_url: item.media_url,
    description: item[descriptionColumn],
    jobTitle: item[jobTitleColumn],
    country: item[countryColumn],
  }));
}
