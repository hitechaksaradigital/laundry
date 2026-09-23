import {
  SUPABASE_NOT_CONFIGURED_MESSAGE,
  isSupabaseConfigured,
  supabase,
} from "../lib/supabase";

const TABLE = "orders";

function assertConfigured() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(SUPABASE_NOT_CONFIGURED_MESSAGE);
  }
}

export async function createOrder(payload) {
  assertConfigured();
  const { data, error } = await supabase
    .from(TABLE)
    .insert(payload)
    .select()
    .single();
  if (error) {
    throw new Error(`Gagal menyimpan pesanan: ${error.message}`);
  }
  return data;
}

export async function listOrders(limit = 20) {
  assertConfigured();
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) {
    throw new Error(`Gagal memuat pesanan: ${error.message}`);
  }
  return data ?? [];
}
