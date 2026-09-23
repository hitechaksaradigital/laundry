-- =============================================================
-- Migrasi untuk project Supabase yang SUDAH punya tabel orders
-- Jalankan di SQL Editor setelah schema.sql (aman dijalankan ulang)
-- =============================================================

create extension if not exists "pgcrypto";

create table if not exists public.customers (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  member_tier text not null default 'Umum'
              check (member_tier in ('Umum', 'Member', 'Silver', 'Gold', 'VIP')),
  address     text,
  points      integer not null default 0,
  deposit     numeric(14,2) not null default 0,
  created_at  timestamptz not null default now()
);

create unique index if not exists customers_phone_key
  on public.customers (phone);

alter table public.orders
  add column if not exists customer_id uuid
  references public.customers (id) on delete set null;

alter table public.customers enable row level security;

drop policy if exists "Anon can select customers" on public.customers;
create policy "Anon can select customers"
  on public.customers for select
  to anon, authenticated
  using (true);

drop policy if exists "Anon can insert customers" on public.customers;
create policy "Anon can insert customers"
  on public.customers for insert
  to anon, authenticated
  with check (true);
