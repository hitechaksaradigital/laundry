export default function PeriodToolbar({ activePeriod, onPeriodChange }) {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
      <div className="flex flex-col">
        <div className="flex items-center gap-space-xs">
          <span className="font-label-xs text-label-xs tracking-wider uppercase text-secondary font-semibold">
            Tinjauan Eksekutif Hub
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <span className="font-code-num text-code-num text-on-surface-variant">
            Q3/Live Sync v4.18
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
          Konsol Kinerja Bisnis &amp; Cabang
        </h1>
      </div>
      {/* Date Range & Operational Export */}
      <div className="flex flex-wrap items-center gap-space-sm">
        <div className="inline-flex p-1 rounded-xl bg-surface-container-high shadow-sm">
          {["Hari Ini", "7 Hari", "Bulan Ini"].map((period) => (
            <button
              key={period}
              className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all ${
                activePeriod === period
                  ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              type="button"
              onClick={() => onPeriodChange(period)}
            >
              {period}
            </button>
          ))}
          <button
            className={`px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 ${
              activePeriod === "Kustom"
                ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            type="button"
            onClick={() => onPeriodChange("Kustom")}
          >
            <span>Kustom</span>
            <span className="material-symbols-outlined text-sm">
              calendar_today
            </span>
          </button>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-high transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-base text-secondary">
              table_view
            </span>
            <span>Excel</span>
          </button>
          <button
            className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-base">
              picture_as_pdf
            </span>
            <span>Unduh Laporan</span>
          </button>
        </div>
      </div>
    </section>
  );
}
