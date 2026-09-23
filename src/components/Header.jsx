import { PROFILE_URL } from "../data/dashboard";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-lg flex-1">
        <button
          className="lg:hidden p-space-xs rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors"
          type="button"
          aria-label="Buka menu navigasi"
          onClick={onToggleSidebar}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="relative flex items-center">
          <button
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-secondary text-lg">
              store
            </span>
            <span className="font-label-lg text-label-lg">
              Cabang Utama - Senopati
            </span>
            <span className="material-symbols-outlined text-on-surface-variant text-base">
              arrow_drop_down
            </span>
          </button>
        </div>
        <div className="hidden xl:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-on-surface">
          <span className="h-2 w-2 rounded-full bg-secondary"></span>
          <span className="font-label-md text-label-md text-on-surface-variant">
            Shift Pagi: Aktif - Kasir: Budi
          </span>
        </div>
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-space-sm px-space-md py-space-xs rounded-xl bg-surface-container-low text-on-surface-variant">
            <span className="material-symbols-outlined text-outline text-lg">
              search
            </span>
            <input
              className="bg-transparent w-full border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
              placeholder="Cari No. Resi / Nama Pelanggan / No. HP..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button
          className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container transition-colors shadow-[0_1px_3px_0_rgba(3,1,100,0.04)]"
          type="button"
        >
          <span className="material-symbols-outlined text-lg">add_circle</span>
          <span className="font-label-lg text-label-lg hidden sm:inline">
            + Pesanan Baru
          </span>
        </button>
        <button
          className="relative p-space-xs rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-error text-on-error font-label-xs text-label-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            src={PROFILE_URL}
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface">
              Budi Santoso
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              Manager - Senopati
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
