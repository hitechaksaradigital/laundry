import { useEffect, useState } from "react";
import { isSupabaseConfigured } from "../../lib/supabase";
import { listOrders } from "../../services/orders";
import { formatRp } from "../../data/pos";

const METHOD_LABEL = {
  qris: "QRIS / E-Wallet",
  tunai: "Tunai / Cash",
  transfer: "Transfer Bank",
};

const STATUS_LABEL = {
  baru: "Baru",
  dicuci: "Dicuci",
  siap: "Siap Diambil",
  diambil: "Diambil",
  batal: "Batal",
};

const STATUS_CLASS = {
  baru: "bg-secondary-container/60 text-on-secondary-container",
  dicuci: "bg-surface-container-high text-on-surface",
  siap: "bg-emerald-100 text-emerald-900",
  diambil: "bg-surface-container text-on-surface-variant",
  batal: "bg-error-container text-error",
};

function formatDate(value) {
  return new Date(value).toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function OrderHistory({ refreshKey = 0 }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isSupabaseConfigured) return undefined;
    let cancelled = false;
    setLoading(true);
    setError("");
    listOrders(20)
      .then((data) => {
        if (!cancelled) setOrders(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [refreshKey, tick]);

  return (
    <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">
              receipts
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Daftar Pesanan Tersimpan
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Sumber data: Supabase table <code>public.orders</code> — 20
            pesanan terbaru
          </p>
        </div>
        <button
          className="px-space-md py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1 disabled:opacity-40"
          type="button"
          disabled={loading || !isSupabaseConfigured}
          onClick={() => setTick((value) => value + 1)}
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
          <span>{loading ? "Memuat..." : "Muat Ulang"}</span>
        </button>
      </div>

      {!isSupabaseConfigured && (
        <div className="p-space-md rounded-xl bg-amber-50 border border-amber-200 font-body-sm text-body-sm text-amber-900">
          Kredensial Supabase belum diisi. Lengkapi{" "}
          <code className="font-code-num">VITE_SUPABASE_URL</code> dan{" "}
          <code className="font-code-num">VITE_SUPABASE_ANON_KEY</code> pada
          file <code className="font-code-num">.env</code>, jalankan skema{" "}
          <code className="font-code-num">supabase/schema.sql</code> di SQL
          Editor Supabase, lalu restart dev server.
        </div>
      )}

      {isSupabaseConfigured && error && (
        <div className="p-space-md rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm">
          {error}
        </div>
      )}

      {isSupabaseConfigured && !error && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                <th className="py-space-sm px-space-md rounded-l-lg font-bold">
                  No. Faktur
                </th>
                <th className="py-space-sm px-space-md font-bold">Tanggal</th>
                <th className="py-space-sm px-space-md font-bold">
                  Pelanggan
                </th>
                <th className="py-space-sm px-space-md font-bold">Item</th>
                <th className="py-space-sm px-space-md font-bold">
                  Pembayaran
                </th>
                <th className="py-space-sm px-space-md font-bold">Total</th>
                <th className="py-space-sm px-space-md text-right rounded-r-lg font-bold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-body-sm">
              {!loading && orders.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="py-space-lg text-center font-body-sm text-body-sm text-on-surface-variant"
                  >
                    Belum ada pesanan tersimpan di Supabase.
                  </td>
                </tr>
              )}
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-surface-container-low transition-colors"
                >
                  <td className="py-space-sm px-space-md font-code-num text-code-num font-bold text-primary-container">
                    #{order.invoice_no}
                  </td>
                  <td className="py-space-sm px-space-md font-body-sm text-body-sm text-on-surface-variant">
                    {formatDate(order.created_at)}
                  </td>
                  <td className="py-space-sm px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-bold text-on-surface">
                        {order.customer_name || "Umum"}
                      </span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        {order.customer_phone || "-"}
                        {order.queue_code
                          ? ` • Antrean ${order.queue_code}`
                          : ""}
                      </span>
                    </div>
                  </td>
                  <td className="py-space-sm px-space-md font-body-sm text-body-sm text-on-surface">
                    {Array.isArray(order.items) ? order.items.length : 0} item
                  </td>
                  <td className="py-space-sm px-space-md">
                    <span className="font-label-md text-label-md text-on-surface">
                      {METHOD_LABEL[order.payment_method] ??
                        order.payment_method}
                    </span>
                    <span className="block font-label-xs text-label-xs text-on-surface-variant uppercase">
                      {order.payment_status === "lunas" ? "Lunas" : "COD / DP"}
                    </span>
                  </td>
                  <td className="py-space-sm px-space-md font-code-num text-code-num font-bold text-on-surface">
                    {formatRp(Number(order.total))}
                  </td>
                  <td className="py-space-sm px-space-md text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-xs text-label-xs font-bold ${
                        STATUS_CLASS[order.status] ?? STATUS_CLASS.baru
                      }`}
                    >
                      {STATUS_LABEL[order.status] ?? order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}