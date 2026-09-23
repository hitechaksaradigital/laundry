const ACTIVE_STAGES = [
  { label: "Cuci", value: 28 },
  { label: "Kering", value: 34 },
  { label: "Setrika", value: 45 },
  { label: "Siap", value: 35, highlight: true },
];

export default function KpiCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {/* Revenue Metric Card */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-secondary-container/20 blur-xl pointer-events-none"></div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
              Total Pendapatan (MTD)
            </span>
            <span className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
              Rp 48.750.000
            </span>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low text-secondary">
            <span className="material-symbols-outlined text-xl">
              account_balance_wallet
            </span>
          </div>
        </div>
        <div className="mt-space-md flex items-center gap-2">
          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-xs text-label-xs font-bold">
            <span className="material-symbols-outlined text-xs">
              trending_up
            </span>
            +14.2%
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            vs bulan sebelumnya
          </span>
        </div>
      </div>

      {/* Active Orders Breakdown */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
              Pesanan Aktif Berjalan
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
                142
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                Beban Aktif
              </span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low text-primary-container">
            <span className="material-symbols-outlined text-xl">
              local_laundry_service
            </span>
          </div>
        </div>
        <div className="mt-space-md grid grid-cols-4 gap-1 text-center">
          {ACTIVE_STAGES.map((stage) => (
            <div
              key={stage.label}
              className={`py-1.5 px-1 rounded-lg ${
                stage.highlight ? "bg-secondary-container/40" : "bg-surface-container-low"
              }`}
            >
              <p
                className={`font-code-num text-code-num font-bold ${
                  stage.highlight ? "text-secondary" : "text-on-surface"
                }`}
              >
                {stage.value}
              </p>
              <p
                className={`font-label-xs text-label-xs truncate ${
                  stage.highlight
                    ? "text-secondary font-bold"
                    : "text-on-surface-variant"
                }`}
              >
                {stage.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Turnaround Time */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
              Rata-rata Waktu Siklus (TAT)
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
                18.5
              </span>
              <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                Jam
              </span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low text-secondary">
            <span className="material-symbols-outlined text-xl">schedule</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Reguler: 24 Jam
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
            <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
              Express: 6 Jam
            </span>
          </div>
        </div>
      </div>

      {/* CSAT Score */}
      <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
              Indeks Kepuasan Pelanggan
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-display-md text-display-md text-on-surface font-bold tracking-tight">
                4.9
              </span>
              <span className="font-label-md text-label-md text-on-surface-variant">
                / 5.0
              </span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-surface-container-low text-primary-container">
            <span className="material-symbols-outlined text-xl">reviews</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center justify-between">
          <div className="flex text-amber-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
          </div>
          <span className="font-label-xs text-label-xs text-on-surface-variant font-medium">
            984 Ulasan Terverifikasi
          </span>
        </div>
      </div>
    </section>
  );
}
