export const LOGO_URL =
  "https://lh3.googleusercontent.com/aida/AEtjO1V6SWV5PJk0fEZWRII2f2AoJjWMcpLsQk6QDx-4CDR874gi3YL-_A1N4u7Jqi2IT8j4keRiFp6NsDSkKIauYBE3D2wtIqNlqf_p_VTYup3J79DR6j2brHxSjJGPtcvtb9WUuQNpbkWXK_T_vY84mRCDevl69e7ZdwawZWGTtXEH2Uz8CiFBa9KczMyi3oqzeIjl6elKzx2WhT8E6M1fclSffy6Aq-mNAtS8O4oHmAFkK3TD51p8x_Cx-t0";

export const PROFILE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3HdRvjE0j0Wwh72o4W96_F-5HYFLiCu4n1bsB2xiBOcIfhIMNzCzbNVOX3EMtJ0eS0Ys5gDJ8IjqkNQ0SzuKvbT-hGl39In3bBSD27akPDw3iGZhKRnk957Nu2xu5Fd_u0nDXahhVcZjUd_68BFT4Gzatscm85DR3pujCJVuWdRjnFpgbAnC_MXxg-m4GoCr2GL6HWbsL1spjGe4VcmHvpgtElh38JkOvYRiHbIGXtThEUWCARBsj";

export const NAV_ITEMS = [
  { path: "/", label: "Dashboard & Analitik", icon: "analytics" },
  { path: "/kasir-pos-transaksi", label: "Kasir POS & Transaksi", icon: "point_of_sale" },
  { path: "/alur-pengerjaan-kanban", label: "Alur Pengerjaan & Kanban", icon: "view_kanban" },
  { path: "/portal-pelanggan-pickup", label: "Portal Pelanggan & Pickup", icon: "local_shipping" },
  { path: "/inventaris-bahan", label: "Inventaris & Bahan", icon: "inventory_2" },
  { path: "/laporan-keuangan", label: "Laporan & Keuangan", icon: "payments" },
  { path: "/pengaturan-cabang-pengguna", label: "Pengaturan Cabang & Pengguna", icon: "settings" },
];

export const CHART_DATA = [
  { day: "Sen", volume: 240, barHeight: 90, barY: 110, barX: 35, revenue: { cx: 49, cy: 135 } },
  { day: "Sel", volume: 310, barHeight: 120, barY: 80, barX: 130, revenue: { cx: 144, cy: 95 } },
  { day: "Rab", volume: 280, barHeight: 105, barY: 95, barX: 225, revenue: { cx: 239, cy: 110 } },
  { day: "Kam", volume: 360, barHeight: 140, barY: 60, barX: 320, revenue: { cx: 334, cy: 70 } },
  { day: "Jum", volume: 420, barHeight: 160, barY: 40, barX: 415, revenue: { cx: 429, cy: 50 } },
  { day: "Sab", volume: 490, barHeight: 180, barY: 20, barX: 510, revenue: { cx: 524, cy: 25 }, highlight: true },
  { day: "Min", volume: 450, barHeight: 168, barY: 32, barX: 605, revenue: { cx: 619, cy: 38 } },
];

export const REVENUE_PATH =
  "M 49 135 Q 95 110 144 95 T 239 110 T 334 70 T 429 50 T 524 25 T 619 38";

export const REVENUE_AREA_PATH = `${REVENUE_PATH} L 619 200 L 49 200 Z`;

export const SERVICE_DISTRIBUTION = [
  {
    label: "Cuci Komplit (Reguler)",
    percent: 52,
    count: "1.324",
    colorClass: "bg-primary-container",
    segment: { stroke: "#070666", dashArray: "156.8 301.6", dashOffset: "0" },
  },
  {
    label: "Dry Clean Premium",
    percent: 24,
    count: "612",
    colorClass: "bg-secondary",
    segment: { stroke: "#186586", dashArray: "72.4 301.6", dashOffset: "-156.8" },
  },
  {
    label: "Cuci Kering Lipat",
    percent: 16,
    count: "408",
    colorClass: "bg-on-primary-container",
    segment: { stroke: "#777cd3", dashArray: "48.2 301.6", dashOffset: "-229.2" },
  },
  {
    label: "Bed Cover & Satuan",
    percent: 8,
    count: "204",
    colorClass: "bg-secondary-container",
    segment: { stroke: "#99daff", dashArray: "24.1 301.6", dashOffset: "-277.4" },
  },
];

export const BRANCHES = [
  {
    index: "01",
    indexClass: "bg-primary-container text-on-primary",
    name: "Cabang Utama - Senopati",
    role: "Hub Sentral & Dry Cleaning Unit",
    revenue: "Rp 24.500.000",
    targetLabel: "Target: 85% tercapai",
    targetPercent: 85,
    targetBarClass: "bg-primary-container",
    machinePercent: 88,
    machinePercentLabel: "88%",
    machineBarClass: "bg-secondary",
    machineLabelClass: "text-secondary",
  },
  {
    index: "02",
    indexClass: "bg-secondary text-on-secondary",
    name: "Cabang BSD Serpong",
    role: "Drop Point & Express Laundry Kiloan",
    revenue: "Rp 15.200.000",
    targetLabel: "Target: 78% tercapai",
    targetPercent: 78,
    targetBarClass: "bg-primary-container",
    machinePercent: 64,
    machinePercentLabel: "64%",
    machineBarClass: "bg-secondary",
    machineLabelClass: "text-secondary",
  },
  {
    index: "03",
    indexClass: "bg-surface-container-highest text-on-surface",
    name: "Cabang Kemang",
    role: "Retail Boutique & Garment Care",
    revenue: "Rp 9.050.000",
    targetLabel: "Target: 91% tercapai",
    targetPercent: 91,
    targetBarClass: "bg-primary-container",
    machinePercent: 92,
    machinePercentLabel: "92% (Tinggi)",
    machineBarClass: "bg-error",
    machineLabelClass: "text-error",
  },
];

export const STOCK_ALERTS = [
  {
    name: "Deterjen Liquid Ultra",
    detail: "Sisa 3.5 Liter • Buffer: 10L",
    detailClass: "text-amber-900 font-medium",
    itemClass: "bg-amber-50/80",
    iconBoxClass: "bg-amber-200/60 text-amber-900",
    icon: "sanitizer",
    badgeClass: "bg-amber-200 text-amber-950",
    badge: "Restock",
  },
  {
    name: "Pewangi Lavender Bliss",
    detail: "Sisa 1.2 Liter (Kritis < 2L)",
    detailClass: "text-error font-semibold",
    itemClass: "bg-error-container/40",
    iconBoxClass: "bg-error-container text-error",
    icon: "water_bottle",
    badgeClass: "bg-error text-on-error",
    badge: "Darurat",
  },
  {
    name: "Plastik Jinjing 5kg",
    detail: "Sisa 40 pcs • Estimasi habis 2 hari",
    detailClass: "text-on-surface-variant",
    itemClass: "bg-surface-container-low",
    iconBoxClass: "bg-surface-container-highest text-on-surface-variant",
    icon: "shopping_bag",
    badgeClass: "bg-surface-container-high text-on-surface-variant",
    badge: "Waspada",
  },
];

export const ORDERS = [
  {
    id: "#AQC-8921",
    customer: "Ibu Sarah V.",
    phone: "+62 812-9988-7711 (Member VIP)",
    branch: "Senopati",
    intake: "Kasir: Budi",
    serviceBadge: "Express",
    serviceBadgeClass: "bg-amber-100 text-amber-900 font-bold",
    load: "Kiloan 6.2 kg",
    status: "Sedang Dicuci (M-04)",
    statusClass: "bg-secondary-container/60 text-on-secondary-container",
    dotClass: "bg-secondary",
    total: "Rp 93.000",
    primaryAction: "print",
    primaryActionTitle: "Cetak Tag Barcode",
    primaryActionClass: "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
  },
  {
    id: "#AQC-8920",
    customer: "Hendro Subroto",
    phone: "+62 856-1122-3344",
    branch: "BSD Serpong",
    intake: "Kasir: Siti",
    serviceBadge: "Dry Clean",
    serviceBadgeClass: "bg-surface-container-highest text-on-surface font-semibold",
    load: "Jas 2 Set + Dasi",
    status: "Antre Setrika Uap",
    statusClass: "bg-surface-container-high text-on-surface",
    dotClass: "bg-outline",
    total: "Rp 180.000",
    primaryAction: "print",
    primaryActionTitle: "Cetak Tag Barcode",
    primaryActionClass: "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
  },
  {
    id: "#AQC-8919",
    customer: "dr. Aditya Reza",
    phone: "+62 811-3444-2200",
    branch: "Kemang",
    intake: "Kurir: Andi (Pickup)",
    serviceBadge: "Special",
    serviceBadgeClass: "bg-surface-container-highest text-on-surface font-semibold",
    load: "Bed Cover King + 4 Bantal",
    status: "Siap Diambil / Diantar",
    statusClass: "bg-emerald-100 text-emerald-900",
    dotClass: "bg-emerald-600",
    total: "Rp 145.000",
    primaryAction: "chat",
    primaryActionTitle: "Kirim Notifikasi WA",
    primaryActionClass: "text-emerald-700 hover:bg-emerald-50",
  },
  {
    id: "#AQC-8918",
    customer: "Dewi Lestari",
    phone: "+62 813-8899-0022",
    branch: "Senopati",
    intake: "Kasir: Budi",
    serviceBadge: "Reguler",
    serviceBadgeClass: "bg-surface-container text-on-surface font-semibold",
    load: "Cuci Komplit 8.5 kg",
    status: "Pengeringan (Dryer-02)",
    statusClass: "bg-secondary-container/60 text-on-secondary-container",
    dotClass: "bg-secondary",
    total: "Rp 85.000",
    primaryAction: "print",
    primaryActionTitle: "Cetak Tag Barcode",
    primaryActionClass: "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high",
  },
  {
    id: "#AQC-8917",
    customer: "Michael Tan",
    phone: "+62 818-0992-1234 (Member Gold)",
    branch: "BSD Serpong",
    intake: "Kasir: Siti",
    serviceBadge: "Kering Lipat",
    serviceBadgeClass: "bg-surface-container text-on-surface font-semibold",
    load: "Pakaian Harian 4.0 kg",
    status: "Siap Diambil (Rak B-12)",
    statusClass: "bg-emerald-100 text-emerald-900",
    dotClass: "bg-emerald-600",
    total: "Rp 40.000",
    primaryAction: "chat",
    primaryActionTitle: "Kirim Notifikasi WA",
    primaryActionClass: "text-emerald-700 hover:bg-emerald-50",
  },
];


