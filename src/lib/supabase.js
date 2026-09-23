import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const SUPABASE_NOT_CONFIGURED_MESSAGE =
  "Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di file .env lalu restart dev server.";

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
