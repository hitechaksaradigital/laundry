import { useState } from "react";

export default function CustomerPanel() {
  const [query, setQuery] = useState(
    "Budi Santoso - 0812-3456-7890 | Poin: 240 Pts | Gold Member"
  );

  return (
    <div className="p-space-lg rounded-full bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary">
            person_search
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Data Pelanggan
          </span>
        </div>
        <span className="font-label-xs text-label-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
          F1: Cari Cepat
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">
        <div className="md:col-span-9 relative">
          <div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-container-low text-on-surface">
            <span className="material-symbols-outlined text-outline text-lg">
              search
            </span>
            <input
              className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline"
              placeholder="Ketik Nama, No. HP, atau Scan Kartu..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="p-0.5 rounded text-outline hover:text-on-surface"
              type="button"
              onClick={() => setQuery("")}
            >
              <span className="material-symbols-outlined text-base">
                close
              </span>
            </button>
          </div>
          {/* Member Snapshot Pill */}
          <div className="mt-space-xs flex items-center justify-between px-space-sm">
            <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
              <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                Gold Member (Diskon 5% Auto)
              </span>
              <span>Alamat: Senopati No. 42B</span>
            </div>
            <span className="font-code-num text-code-num text-secondary">
              Deposit: Rp 120.000
            </span>
          </div>
        </div>
        <div className="md:col-span-3">
          <button
            className="w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors shadow-sm"
            type="button"
          >
            <span className="material-symbols-outlined text-base text-secondary">
              person_add
            </span>
            <span className="font-label-md text-label-md whitespace-nowrap">
              + Baru
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}