-- =============================================================
-- AquaClean Enterprise POS - Skema Database Supabase (PostgreSQL)
-- Jalankan di Supabase Dashboard > SQL Editor > New query > Run
-- =============================================================

create extension if not exists "pgcrypto";

-- Tabel pesanan (POS / Kasir)
create table if not exists public.orders (
  id               uuid primary key default gen_random_uuid(),
  invoice_no       text not null unique,
  queue_code       text,
  customer_name    text,
  customer_phone   text,
  member_tier      text,
  payment_status   text not null default 'lunas'
                   check (payment_status in ('lunas', 'cod')),
  payment_method   text not null default 'tunai'
                   check (payment_method in ('qris', 'tunai', 'transfer')),
  items            jsonb not null default '[]'::jsonb,
  subtotal         numeric(14,2) not null default 0,
  service_fee      numeric(14,2) not null default 0,
  discount         numeric(14,2) not null default 0,
  total            numeric(14,2) not null default 0,
  cash_received    numeric(14,2) not null default 0,
  change_amount    numeric(14,2) not null default 0,
  coupon_code      text,
  points_used      boolean not null default false,
  perfume          text,
  inspection_notes jsonb default '[]'::jsonb,
  branch           text default 'Cabang Utama - Senopati',
  cashier          text default 'Budi Santoso',
  status           text not null default 'baru'
                   check (status in ('baru', 'dicuci', 'siap', 'diambil', 'batal')),
  note             text,
  created_at       timestamptz not null default now()
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);
create index if not exists orders_invoice_no_idx  on public.orders (invoice_no);
create index if not exists orders_status_idx      on public.orders (status);

-- Row Level Security: aplikasi (anon key) hanya boleh INSERT + SELECT
alter table public.orders enable row level security;

drop policy if exists "Anon can select orders" on public.orders;
create policy "Anon can select orders"
  on public.orders for select
  to anon, authenticated
  using (true);

drop policy if exists "Anon can insert orders" on public.orders;
create policy "Anon can insert orders"
  on public.orders for insert
  to anon, authenticated
  with check (true);

-- Catatan:
-- * Tidak ada policy UPDATE/DELETE -> klien tidak bisa mengubah/menghapus data.
-- * Isi .env dengan URL & anon key dari Supabase > Project Settings > API.
