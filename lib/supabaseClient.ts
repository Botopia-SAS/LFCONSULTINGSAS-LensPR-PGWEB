// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Esto se usa si vas a hacer llamadas desde el cliente (client-side)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
