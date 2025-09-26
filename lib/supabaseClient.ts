// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Environment variables:", {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL
      ? "Set"
      : "Missing",
    SUPABASE_URL: process.env.SUPABASE_URL ? "Set" : "Missing",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ? "Set"
      : "Missing",
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY ? "Set" : "Missing",
  });
  throw new Error(
    "Missing Supabase environment variables. Please check your .env file."
  );
}

// Cliente Supabase que funciona tanto en cliente como servidor
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false, // Para server-side rendering
  },
});
