import { createClient } from "@supabase/supabase-js";

type EventRow = {
  id: string;
  name_spanish: string;
  name_english: string;
  name_portuguese: string;
  description_spanish: string;
  description_english: string;
  description_portuguese: string;
  location_spanish: string;
  location_english: string;
  location_portuguese: string;
  date_time: string;
  cost: string;
  media_url: string | null;
  register_link: string | null;
  duration: number;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getEvents(locale: string) {
  let nameColumn: keyof EventRow,
    descriptionColumn: keyof EventRow,
    locationColumn: keyof EventRow;

  if (locale === "en") {
    nameColumn = "name_english";
    descriptionColumn = "description_english";
    locationColumn = "location_english";
  } else if (locale === "pt") {
    nameColumn = "name_portuguese";
    descriptionColumn = "description_portuguese";
    locationColumn = "location_portuguese";
  } else {
    nameColumn = "name_spanish";
    descriptionColumn = "description_spanish";
    locationColumn = "location_spanish";
  }

  const { data, error } = await supabase.from("events").select("*");
  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }

  return (data || []).map((item) => ({
    id: item.id,
    name: item[nameColumn],
    media_url: item.media_url,
    description: item[descriptionColumn],
    location: item[locationColumn],
    date_time: item.date_time,
    cost: item.cost,
    register_link: item.register_link,
    duration: item.duration,
  }));
}
