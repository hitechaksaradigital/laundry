import { useState } from "react";
import { formatRp } from "../../data/pos";

export default function OrderPanel({
  cart,
  subtotal,
  serviceFee,
  discount,
  total,
  couponApplied,
  pointsUsed,
  onToggleCoupon,
  onTogglePoints,
  onRemove,
}) {
  const [coupon, setCoupon] = useState("CLEANHEMAT10");

  return (
    <>
      {/* 1. Header Struk No. Faktur Otomatis */}
      <div className="bg-primary-container p-space-lg text-on-primary flex items-center justify-between">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-secondary-container">
              #INV-20250520-042
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container-highest/20 font-label-xs text-label-xs text-on-primary">
              DRAFT
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim">
            Tgl: 20 Mei 2025 • 14:28 WIB
          </p>
        </div>
        <div className="text-right">
          <span className="font-label-xs text-label-xs uppercase text-secondary-container">
            Antrean
          </span>
          <p className="font-headline-lg text-headline-lg font-bold">A-18</p>
        </div>
      </div>

      {/* 2. Rincian Keranjang Pesanan */}
      <div className="p-space-lg flex flex-col gap-space-md max-h-[280px] overflow-y-auto">
        {cart.length === 0 && (
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center py-space-md">
            Keranjang kosong — pilih layanan dari katalog.
          </p>
        )}
        {cart.map((item) => (
          <div
            key={item.key}
            className="flex items-start justify-between gap-space-sm pb-space-sm bg-surface-container-lowest"
          >
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {item.name}
                </span>
                <span className="font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface">
                  {item.qtyLabel}
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {item.note}
              </span>
              <span className="font-code-num text-code-num text-on-surface-variant">
                @ {formatRp(item.unitPrice)} / {item.unit}
              </span>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                {formatRp(item.total)}
              </span>
              <button
                className="text-error hover:text-on-error-container p-1"
                type="button"
                title="Hapus item"
                onClick={() => onRemove(item.key)}
              >
                <span className="material-symbols-outlined text-sm">
                  delete_outline
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Kupon Promo & Poin Loyalti */}
      <div className="px-space-lg py-space-sm bg-surface-container-low flex flex-col gap-space-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-xl bg-surface-container-lowest text-on-surface">
            <span className="material-symbols-outlined text-secondary text-base">
              loyalty
            </span>
            <input
              className="w-full bg-transparent border-none outline-none font-code-num text-code-num font-bold uppercase text-on-surface"
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            {couponApplied && coupon && (
              <span className="material-symbols-outlined text-secondary text-base">
                check_circle
              </span>
            )}
          </div>
          <button
            className={`flex items-center justify-between px-space-md py-space-xs rounded-xl transition-colors ${
              pointsUsed
                ? "bg-surface-container-lowest text-on-surface"
                : "bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant"
            }`}
            type="button"
            onClick={onTogglePoints}
          >
            <div className="flex items-center gap-1 font-label-md text-label-md">
              <span className="material-symbols-outlined text-secondary text-base">
                savings
              </span>
              <span>Tukar 50 Poin</span>
            </div>
            <span
              className={`font-code-num text-code-num font-bold ${
                pointsUsed ? "text-secondary" : "text-outline"
              }`}
            >
              {pointsUsed ? "-Rp 5.000" : "Aktifkan"}
            </span>
          </button>
        </div>
        {!couponApplied && coupon && (
          <button
            className="font-label-xs text-label-xs text-secondary underline text-left"
            type="button"
            onClick={onToggleCoupon}
          >
            Aktifkan kupon {coupon}
          </button>
        )}
      </div>

      {/* 4. Ringkasan Kalkulasi */}
      <div className="p-space-lg flex flex-col gap-space-xs bg-surface-container-lowest">
        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Subtotal ({cart.length} Layanan)</span>
          <span className="font-code-num text-code-num text-on-surface">
            {formatRp(subtotal)}
          </span>
        </div>
        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Biaya Layanan &amp; Plastik Eco</span>
          <span className="font-code-num text-code-num text-on-surface">
            {formatRp(serviceFee)}
          </span>
        </div>
        <div className="flex justify-between font-body-sm text-body-sm text-secondary">
          <span>Kupon &amp; Diskon Poin Member</span>
          <span className="font-code-num text-code-num font-semibold">
            -{formatRp(discount)}
          </span>
        </div>
        <div className="pt-space-sm mt-space-xs flex justify-between items-baseline bg-surface-container-low p-space-md rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
              Total Tagihan Bersih
            </span>
            <span className="font-label-md text-label-md text-secondary">
              Termasuk PPN 0% Sektor Jasa
            </span>
          </div>
          <div className="text-right">
            <span className="font-display-md text-display-md font-bold text-primary-container">
              {formatRp(total)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}