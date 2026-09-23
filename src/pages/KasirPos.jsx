import { useState } from "react";
import PosOperationalBar from "../components/pos/PosOperationalBar";
import CustomerPanel from "../components/pos/CustomerPanel";
import ServiceCatalog from "../components/pos/ServiceCatalog";
import InspectionPanel from "../components/pos/InspectionPanel";
import QuickMetrics from "../components/pos/QuickMetrics";
import OrderPanel from "../components/pos/OrderPanel";
import PaymentSection from "../components/pos/PaymentSection";
import OrderHistory from "../components/pos/OrderHistory";
import { createOrder } from "../services/orders";
import {
  COUPON_DISCOUNT,
  INITIAL_CART,
  INSPECTION_CHIPS,
  POINTS_DISCOUNT,
  SERVICE_FEE,
} from "../data/pos";

const DEFAULT_QUERY =
  "Budi Santoso - 0812-3456-7890 | Poin: 240 Pts | Gold Member";

const DEFAULT_CHECKED = Object.fromEntries(
  INSPECTION_CHIPS.map((chip) => [chip.id, chip.checked])
);

const makeInvoice = () => {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `INV-${ymd}-${String(Math.floor(Math.random() * 900) + 100)}`;
};

const formatDateLabel = () => {
  const d = new Date();
  const date = d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${date} • ${time} WIB`;
};

export default function KasirPos() {
  const [cart, setCart] = useState(INITIAL_CART);
  const [couponApplied, setCouponApplied] = useState(true);
  const [pointsUsed, setPointsUsed] = useState(true);
  const [payTab, setPayTab] = useState("lunas");
  const [payMethod, setPayMethod] = useState("tunai");
  const [cash, setCash] = useState(120000);
  const [perfume, setPerfume] = useState("Sweet Vanilla");
  const [customerQuery, setCustomerQuery] = useState(DEFAULT_QUERY);
  const [coupon, setCoupon] = useState("CLEANHEMAT10");
  const [checked, setChecked] = useState(DEFAULT_CHECKED);
  const [invoiceNo, setInvoiceNo] = useState(makeInvoice);
  const [queueNum, setQueueNum] = useState(18);
  const [dateLabel] = useState(formatDateLabel);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [lastSaved, setLastSaved] = useState(null);
  const [historyKey, setHistoryKey] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const serviceFee = cart.length > 0 ? SERVICE_FEE : 0;
  const discount =
    (couponApplied ? COUPON_DISCOUNT : 0) + (pointsUsed ? POINTS_DISCOUNT : 0);
  const total = Math.max(0, subtotal + serviceFee - discount);
  const change = Math.max(0, cash - total);

  const addToCart = (service, weight) => {
    setCart((items) => {
      const isWeight = service.mode === "weight";
      const qty = isWeight ? weight : 1;
      const existing = items.find((item) => item.key === service.id);

      if (existing) {
        const nextQty = Number((existing.qty + qty).toFixed(1));
        return items.map((item) =>
          item.key === service.id
            ? {
                ...item,
                qty: nextQty,
                qtyLabel: `${nextQty} ${item.unit}`,
                total: item.unitPrice * nextQty,
              }
            : item
        );
      }

      const qtyLabel = isWeight
        ? `${weight.toFixed(1)} ${service.unit}`
        : `1 ${service.unit}`;

      return [
        ...items,
        {
          key: service.id,
          name: service.name,
          qty,
          qtyLabel,
          note: perfume,
          unitPrice: service.price,
          unit: service.unit,
          total: service.price * qty,
        },
      ];
    });
  };

  const removeFromCart = (key) =>
    setCart((items) => items.filter((item) => item.key !== key));

  const toggleInspection = (id) =>
    setChecked((state) => ({ ...state, [id]: !state[id] }));

  const handleProcess = async () => {
    setSaveError("");
    setLastSaved(null);

    if (cart.length === 0) {
      setSaveError("Keranjang kosong — tambahkan layanan terlebih dahulu.");
      return;
    }

    const [customerName, rest = ""] = customerQuery.split(" - ");
    const customerPhone = (rest.split("|")[0] || "").trim();
    const memberTier = /gold/i.test(customerQuery)
      ? "Gold"
      : /silver/i.test(customerQuery)
        ? "Silver"
        : /vip|member/i.test(customerQuery)
          ? "Member"
          : "Umum";

    const payload = {
      invoice_no: invoiceNo,
      queue_code: `A-${queueNum}`,
      customer_name: customerName?.trim() || "Umum",
      customer_phone: customerPhone || null,
      member_tier: memberTier,
      payment_status: payTab,
      payment_method: payMethod,
      items: cart.map((item) => ({
        key: item.key,
        name: item.name,
        qty: item.qty,
        qty_label: item.qtyLabel,
        unit: item.unit,
        unit_price: item.unitPrice,
        total: item.total,
        note: item.note,
      })),
      subtotal,
      service_fee: serviceFee,
      discount,
      total,
      cash_received: cash,
      change_amount: change,
      coupon_code: couponApplied && coupon ? coupon : null,
      points_used: pointsUsed,
      perfume,
      inspection_notes: INSPECTION_CHIPS.filter((chip) => checked[chip.id]).map(
        (chip) => chip.label
      ),
      status: "baru",
    };

    setSaving(true);
    try {
      const saved = await createOrder(payload);
      setLastSaved(saved);
      setCart([]);
      setInvoiceNo(makeInvoice());
      setQueueNum((value) => value + 1);
      setHistoryKey((value) => value + 1);
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-space-2xl">
      <PosOperationalBar />

      {/* Banner sukses simpan pesanan */}
      {lastSaved && (
        <div className="mb-space-md px-space-md py-space-sm rounded-xl bg-emerald-100 text-emerald-900 font-label-lg text-label-lg flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-base">
            check_circle
          </span>
          <span>
            Pesanan <strong>#{lastSaved.invoice_no}</strong> tersimpan ke
            Supabase ({Number(lastSaved.total).toLocaleString("id-ID")} rupiah)
            — muncul di daftar pesanan di bawah.
          </span>
        </div>
      )}

      {/* 2-Column Split Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        {/* KOLOM KIRI */}
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          <CustomerPanel
            query={customerQuery}
            setQuery={setCustomerQuery}
          />
          <ServiceCatalog onAdd={addToCart} />
          <InspectionPanel
            perfume={perfume}
            setPerfume={setPerfume}
            checked={checked}
            onToggle={toggleInspection}
          />
          <QuickMetrics />
        </div>
        {/* KOLOM KANAN */}
        <div className="xl:col-span-5 flex flex-col gap-space-md sticky top-20">
          <div className="rounded-full bg-surface-container-lowest shadow-md overflow-hidden">
            <OrderPanel
              cart={cart}
              subtotal={subtotal}
              serviceFee={serviceFee}
              discount={discount}
              total={total}
              coupon={coupon}
              setCoupon={setCoupon}
              couponApplied={couponApplied}
              pointsUsed={pointsUsed}
              onToggleCoupon={() => setCouponApplied((value) => !value)}
              onTogglePoints={() => setPointsUsed((value) => !value)}
              onRemove={removeFromCart}
              invoiceNo={invoiceNo}
              queueCode={`A-${queueNum}`}
              dateLabel={dateLabel}
            />
            <PaymentSection
              total={total}
              cash={cash}
              setCash={setCash}
              change={change}
              payTab={payTab}
              setPayTab={setPayTab}
              payMethod={payMethod}
              setPayMethod={setPayMethod}
              onProcess={handleProcess}
              saving={saving}
              saveError={saveError}
            />
          </div>
        </div>
      </div>

      {/* Daftar pesanan tersimpan di Supabase */}
      <div className="mt-space-lg">
        <OrderHistory refreshKey={historyKey} />
      </div>
    </div>
  );
}
