import { STOCK_ALERTS } from "../data/dashboard";

export default function StockAlert() {
  return (
    <div className="xl:col-span-5 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600">
              inventory
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Peringatan Stok Rendah
            </h2>
          </div>
          <span className="px-space-xs py-0.5 rounded-full bg-error/10 text-error font-label-xs text-label-xs font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
            3 Kritis
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          Bahan pencucian dan kemasan di bawah batas buffer operasional
          minimum.
        </p>
        {/* Alert Items List */}
        <div className="flex flex-col gap-space-sm">
          {STOCK_ALERTS.map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between p-space-md rounded-xl text-on-surface ${item.itemClass}`}
            >
              <div className="flex items-center gap-space-sm">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.iconBoxClass}`}
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    {item.name}
                  </span>
                  <span className={`font-body-sm text-body-sm ${item.detailClass}`}>
                    {item.detail}
                  </span>
                </div>
              </div>
              <span
                className={`px-space-xs py-1 rounded font-label-xs text-label-xs font-bold uppercase tracking-wider ${item.badgeClass}`}
              >
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Quick PO Trigger */}
      <div className="mt-space-lg pt-space-md">
        <button
          className="w-full flex items-center justify-center gap-space-xs py-2.5 px-space-md rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg transition-all shadow-sm"
          type="button"
        >
          <span className="material-symbols-outlined text-base">
            shopping_cart_checkout
          </span>
          <span>Pesan Ulang Cepat ke Distributor Pusat</span>
        </button>
      </div>
    </div>
  );
}