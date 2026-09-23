-- =============================================================
-- Kosongkan SEMUA data pesanan yang tersimpan (data percobaan/default)
-- Jalankan di Supabase SQL Editor.
-- Tidak bisa dilakukan dari aplikasi karena RLS tidak mengizinkan DELETE.
-- =============================================================

delete from public.orders;
