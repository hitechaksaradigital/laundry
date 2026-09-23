import { useState } from "react";
import PosOperationalBar from "../components/pos/PosOperationalBar";
import CustomerPanel from "../components/pos/CustomerPanel";
import ServiceCatalog from "../components/pos/ServiceCatalog";
import InspectionPanel from "../components/pos/InspectionPanel";
import QuickMetrics from "../components/pos/QuickMetrics";
import OrderPanel from "../components/pos/OrderPanel";
import PaymentSection from "../components/pos/PaymentSection";
import {
  COUPON_DISCOUNT,
  INITIAL_CART,
  POINTS_DISCOUNT,
  SERVICE_FEE,
} from "../data/pos";

export default function KasirPos() {
  const [cart, setCart] = useState(INITIAL_CART);
  const [couponApplied, setCouponApplied] = useState(true);
  const [pointsUsed, setPointsUsed] = useState(true);
  const [payTab, setPayTab] = useState("lunas");
  const [payMethod, setPayMethod] = useState("tunai");
  const [cash, setCash] = useState(120000);
  const [perfume, setPerfume] = useState("Sweet Vanilla");

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

  return (
    <div className="flex flex-col w-full pb-space-2xl">
      <PosOperationalBar />
      {/* 2-Column Split Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
        {/* KOLOM KIRI */}
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          <CustomerPanel />
          <ServiceCatalog onAdd={addToCart} />
          <InspectionPanel perfume={perfume} setPerfume={setPerfume} />
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
              couponApplied={couponApplied}
              pointsUsed={pointsUsed}
              onToggleCoupon={() => setCouponApplied((value) => !value)}
              onTogglePoints={() => setPointsUsed((value) => !value)}
              onRemove={removeFromCart}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}