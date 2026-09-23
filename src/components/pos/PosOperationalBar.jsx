export default function PosOperationalBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-space-md py-space-sm mb-space-md">
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container text-on-surface">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label-lg text-label-lg">Kasir POS Aktif</span>
          <span className="font-code-num text-code-num text-on-surface-variant">
            #POS-01
          </span>
        </div>
        <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-high text-on-surface">
          <span className="material-symbols-outlined text-secondary text-base">
            timer
          </span>
          <span className="font-label-md text-label-md">
            SLA Express Siap:{" "}
            <strong className="font-code-num text-code-num text-secondary">
              6 Jam
            </strong>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-on-surface-variant font-code-num text-code-num">
          <span className="material-symbols-outlined text-base text-secondary">
            sync
          </span>
          <span>Sinkron: 1 Detik Lalu</span>
        </div>
        <button
          className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface transition-colors shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-base">history</span>
          <span className="font-label-md text-label-md">
            Riwayat Antrean (14)
          </span>
        </button>
      </div>
    </div>
  );
}