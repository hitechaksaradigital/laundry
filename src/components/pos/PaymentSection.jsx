import { QUICK_CASH, formatRp } from "../../data/pos";

const PAY_TABS = [
  { id: "lunas", label: "Lunas Sekarang (Bayar Penuh)" },
  { id: "cod", label: "Bayar Saat Ambil (COD / DP)" },
];

const PAY_METHODS = [
  { id: "qris", label: "QRIS / E-Wallet", icon: "qr_code_scanner" },
  { id: "tunai", label: "Tunai / Cash", icon: "payments" },
  { id: "transfer", label: "Transfer Bank", icon: "account_balance" },
];

export default function PaymentSection({
  total,
  cash,
  setCash,
  change,
  payTab,
  setPayTab,
  payMethod,
  setPayMethod,
  onProcess,
  saving,
  saveError,
}) {
  return (
    <>
      {/* 5. Opsi & Metode Pembayaran */}
      <div className="p-space-lg pt-0 flex flex-col gap-space-md bg-surface-container-lowest">
        {/* Tab Status Bayar */}
        <div className="grid grid-cols-2 gap-space-xs p-1 rounded-xl bg-surface-container-low">
          {PAY_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`py-space-xs rounded-lg font-label-md text-label-md text-center transition-colors ${
                payTab === tab.id
                  ? "bg-surface-container-lowest text-on-surface shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              type="button"
              onClick={() => setPayTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Pilihan Metode Bayar (QRIS, Tunai, Transfer) */}
        <div className="grid grid-cols-3 gap-space-xs">
          {PAY_METHODS.map((method) => (
            <button
              key={method.id}
              className={`p-space-sm rounded-xl flex flex-col items-center gap-1 transition-colors ${
                payMethod === method.id
                  ? "bg-primary-container text-on-primary shadow-sm"
                  : "bg-surface-container hover:bg-surface-container-high text-on-surface"
              }`}
              type="button"
              onClick={() => setPayMethod(method.id)}
            >
              <span
                className={`material-symbols-outlined text-xl ${
                  payMethod === method.id
                    ? "text-secondary-container"
                    : "text-secondary"
                }`}
              >
                {method.icon}
              </span>
              <span className="font-label-md text-label-md">
                {method.label}
              </span>
            </button>
          ))}
        </div>

        {/* Kalkulator Kembalian Tunai Cepat */}
        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface">
              Uang Diterima Pelanggan:
            </span>
            <div className="flex items-center gap-space-xs font-code-num text-code-num font-bold text-on-surface bg-surface-container-lowest px-space-md py-space-xs rounded-lg shadow-sm">
              <span>Rp</span>
              <input
                className="w-24 text-right bg-transparent outline-none font-code-num text-code-num font-bold"
                type="text"
                value={cash.toLocaleString("id-ID")}
                onChange={(e) =>
                  setCash(Number(e.target.value.replace(/\D/g, "")) || 0)
                }
              />
            </div>
          </div>
          {/* Quick Cash Nominal Buttons */}
          <div className="flex items-center gap-space-xs">
            <button
              className="flex-1 py-1 rounded bg-surface-container hover:bg-surface-container-high font-code-num text-code-num text-on-surface"
              type="button"
              onClick={() => setCash(total)}
            >
              Uang Pas
            </button>
            {QUICK_CASH.map((amount) => (
              <button
                key={amount}
                className="flex-1 py-1 rounded bg-surface-container hover:bg-surface-container-high font-code-num text-code-num text-on-surface"
                type="button"
                onClick={() => setCash(amount)}
              >
                {amount.toLocaleString("id-ID")}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between pt-space-xs">
            <span className="font-label-md text-label-md text-secondary">
              Kembalian Kasir:
            </span>
            <span className="font-headline-md text-headline-md font-bold text-secondary font-code-num">
              {formatRp(change)}
            </span>
          </div>
        </div>

        {/* 6. Aksi Kasir Utama */}
        <div className="flex flex-col gap-space-sm pt-space-xs">
          {saveError && (
            <div className="px-space-md py-space-xs rounded-xl bg-error-container text-on-error-container font-label-md text-label-md">
              {saveError}
            </div>
          )}
          <button
            className="w-full py-space-md px-space-lg rounded-xl bg-primary-container hover:bg-black text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-space-sm shadow-md transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
            type="button"
            disabled={saving}
            onClick={onProcess}
          >
            <span className="material-symbols-outlined text-secondary-container group-hover:scale-110 transition-transform">
              print
            </span>
            <span>
              {saving ? "Menyimpan ke Supabase..." : "Proses & Cetak Struk Thermal"}
            </span>
            {!saving && (
              <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-xs text-label-xs">
                Enter ↵
              </span>
            )}
          </button>
          <div className="grid grid-cols-2 gap-space-sm">
            <button
              className="py-space-sm px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-secondary text-lg">
                chat
              </span>
              <span className="truncate">Kirim WA Pelanggan</span>
            </button>
            <button
              className="py-space-sm px-space-md rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">
                bookmark
              </span>
              <span>Simpan Draft</span>
            </button>
          </div>
        </div>
      </div>

      {/* Thermal Print Status & Quick Settings */}
      <div className="flex items-center justify-between px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm shadow-sm">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-base text-secondary">
            check_circle
          </span>
          <span>Printer: Epson TM-T82X Ready (Auto Cutter On)</span>
        </div>
        <button
          className="text-secondary font-label-md text-label-md hover:underline"
          type="button"
        >
          Tes Cetak
        </button>
      </div>
    </>
  );
}