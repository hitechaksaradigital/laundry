import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/dashboard";

export default function Placeholder() {
  const location = useLocation();
  const current = NAV_ITEMS.find((item) => item.path === location.pathname);

  return (
    <div className="flex flex-col w-full pb-space-2xl gap-y-space-xl">
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
            {current?.label ?? "Halaman"}
          </h1>
        </div>
      </section>
      <section className="bg-surface-container-lowest p-space-2xl rounded-xl shadow-sm flex flex-col items-center justify-center text-center gap-space-sm py-space-2xl">
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: 48 }}>
          construction
        </span>
        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
          Modul ini sedang dalam pengembangan
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          Modul <strong>{current?.label ?? location.pathname}</strong> akan
          tersedia pada rilis berikutnya. Kembali ke Dashboard untuk melihat
          ringkasan operasional.
        </p>
      </section>
    </div>
  );
}