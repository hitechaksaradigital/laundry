import { Link } from "react-router-dom";
import { ORDERS } from "../data/dashboard";

function OrderRow({ order }) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="py-space-sm px-space-md font-code-num text-code-num font-bold text-primary-container">
        {order.id}
      </td>
      <td className="py-space-sm px-space-md">
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-bold text-on-surface">
            {order.customer}
          </span>
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            {order.phone}
          </span>
        </div>
      </td>
      <td className="py-space-sm px-space-md">
        <span className="font-label-md text-label-md text-on-surface">
          {order.branch}
        </span>
        <span className="block font-label-xs text-label-xs text-on-surface-variant">
          {order.intake}
        </span>
      </td>
      <td className="py-space-sm px-space-md">
        <div className="flex items-center gap-1.5">
          <span
            className={`px-2 py-0.5 rounded font-label-xs text-label-xs ${order.serviceBadgeClass}`}
          >
            {order.serviceBadge}
          </span>
          <span className="font-label-md text-label-md text-on-surface">
            {order.load}
          </span>
        </div>
      </td>
      <td className="py-space-sm px-space-md">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-xs text-label-xs font-bold ${order.statusClass}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${order.dotClass}`}></span>
          {order.status}
        </span>
      </td>
      <td className="py-space-sm px-space-md font-code-num text-code-num font-bold text-on-surface">
        {order.total}
      </td>
      <td className="py-space-sm px-space-md text-right">
        <div className="inline-flex items-center gap-1">
          <button
            className={`p-1.5 rounded-lg transition-colors ${order.primaryActionClass}`}
            title={order.primaryActionTitle}
            type="button"
          >
            <span className="material-symbols-outlined text-base">
              {order.primaryAction}
            </span>
          </button>
          <button
            className="p-1.5 rounded-lg text-secondary hover:bg-secondary-container/40 transition-colors"
            title="Detail Pesanan"
            type="button"
          >
            <span className="material-symbols-outlined text-base">
              chevron_right
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function OrdersTable() {
  return (
    <section className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">
              receipt_long
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Aktivitas Pesanan &amp; Antrean Terkini
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            5 Transaksi terbaru yang masuk dari terminal POS &amp; penjemputan
            mitra
          </p>
        </div>
        <div className="flex items-center gap-space-sm">
          <Link
            className="px-space-md py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors flex items-center gap-1"
            to="/kasir-pos-transaksi"
          >
            <span>Buka POS Kasir</span>
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </Link>
          <Link
            className="px-space-md py-1.5 rounded-xl bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-md text-label-md font-semibold transition-colors flex items-center gap-1"
            to="/alur-pengerjaan-kanban"
          >
            <span>Lihat Papan Kanban</span>
            <span className="material-symbols-outlined text-sm">
              view_kanban
            </span>
          </Link>
        </div>
      </div>
      {/* High Density Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
              <th className="py-space-sm px-space-md rounded-l-lg font-bold">
                No. Resi
              </th>
              <th className="py-space-sm px-space-md font-bold">Pelanggan</th>
              <th className="py-space-sm px-space-md font-bold">
                Cabang / Intake
              </th>
              <th className="py-space-sm px-space-md font-bold">
                Layanan &amp; Beban
              </th>
              <th className="py-space-sm px-space-md font-bold">Status Alur</th>
              <th className="py-space-sm px-space-md font-bold">Total Biaya</th>
              <th className="py-space-sm px-space-md text-right rounded-r-lg font-bold">
                Aksi Cepat
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-0 text-body-sm">
            {ORDERS.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
      {/* Table Pagination & Footer Indicator */}
      <div className="mt-space-lg pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant">
        <span className="font-body-sm text-body-sm">
          Menampilkan 5 dari 142 pesanan aktif dalam sistem
        </span>
        <div className="flex items-center gap-2">
          <button
            className="p-1 rounded-lg hover:bg-surface-container text-outline transition-colors disabled:opacity-40"
            disabled
            type="button"
          >
            <span className="material-symbols-outlined text-lg">
              chevron_left
            </span>
          </button>
          <span className="px-2 font-code-num text-code-num font-bold text-on-surface">
            Halaman 1 / 29
          </span>
          <button
            className="p-1 rounded-lg hover:bg-surface-container text-on-surface transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
