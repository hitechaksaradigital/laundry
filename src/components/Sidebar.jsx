import { NavLink } from "react-router-dom";
import { LOGO_URL, NAV_ITEMS } from "../data/dashboard";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-primary-container z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="h-16 px-space-lg flex items-center gap-space-md bg-primary-container">
            <img
              alt="AquaClean Enterprise Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-primary">
                AquaClean
              </span>
              <span className="font-label-xs text-label-xs text-secondary-container tracking-wider uppercase">
                Enterprise POS
              </span>
            </div>
          </div>
          <div className="px-space-md pt-space-lg pb-space-xs">
            <span className="px-space-sm font-label-xs text-label-xs text-primary-fixed-dim uppercase tracking-wider">
              Operasional Cabang
            </span>
          </div>
          <nav
            className="flex flex-col gap-space-xs px-space-md"
            data-active-classes="bg-secondary text-on-secondary font-label-lg rounded-xl shadow-[0_1px_3px_0_rgba(3,1,100,0.04)]"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-space-md px-space-md py-space-sm rounded-xl font-label-lg text-label-lg transition-colors",
                    isActive
                      ? "bg-secondary text-on-secondary rounded-xl shadow-[0_1px_3px_0_rgba(3,1,100,0.04)]"
                      : "text-primary-fixed-dim hover:bg-surface-container-highest hover:text-on-surface",
                  ].join(" ")
                }
              >
                <span className="material-symbols-outlined text-lg">
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="p-space-md">
          <div className="bg-tertiary-container p-space-md rounded-xl flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-xs text-label-xs text-secondary-container uppercase tracking-wider">
                Koneksi Sistem
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary-fixed"></span>
            </div>
            <div className="flex items-center justify-between text-on-tertiary font-code-num text-code-num">
              <span>Sinkronisasi Hub</span>
              <span>100% OK</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
