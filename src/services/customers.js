import {
  SUPABASE_NOT_CONFIGURED_MESSAGE,
  isSupabaseConfigured,
  supabase,
} from "../lib/supabase";

const TABLE = "customers";

function assertConfigured() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);
  }
}

export async function listCustomers(limit = 50) {
  assertConfigured();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) {
    throw new Error(`Gagal memuat pelanggan: ${error.message}`);
  }
  return data ?? [];
}

export async function createCustomer(payload) {
  assertConfigured();
  const { data, error } = await supabase
    .from(TABLE)
    .insert(payload)
    .select()
    .single();
  if (error) {
    throw new Error(`Gagal menyimpan pelanggan: ${error.message}`);
  }
  return data;
}