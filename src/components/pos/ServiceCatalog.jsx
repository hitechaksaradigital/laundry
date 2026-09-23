import { useState } from "react";
import { SERVICE_CATEGORIES, SERVICES, formatRp } from "../../data/pos";

function ServiceTile({ service, weight, onWeightChange, onAdd }) {
  const lineTotal =
    service.mode === "weight" ? service.price * weight : service.price;

  return (
    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md relative overflow-hidden group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-space-sm">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${service.iconClass}`}
          >
            <span className="material-symbols-outlined text-xl">
              {service.icon}
            </span>
          </div>
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              {service.name}
            </h4>
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              {service.subtitle}
            </span>
          </div>
        </div>
        <span
          className={`font-label-xs text-label-xs px-2 py-0.5 rounded-full ${service.badgeClass}`}
        >
          {service.badge}
        </span>
      </div>
      <div className="flex items-center justify-between pt-space-xs">
        <div>
          <span className="font-code-num text-code-num text-secondary font-bold">
            {formatRp(service.price)}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {" "}
            / {service.unit}
          </span>
        </div>
        {service.mode === "weight" ? (
          <div className="flex items-center gap-space-xs bg-surface-container-low p-1 rounded-lg">
            <button
              className="w-6 h-6 rounded bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-sm"
              type="button"
              onClick={() =>
                onWeightChange(
                  service.id,
                  Math.max(0.5, Number((weight - 0.1).toFixed(1)))
                )
              }
            >
              -
            </button>
            <span className="font-code-num text-code-num px-2 font-bold text-on-surface">
              {weight.toFixed(1)} kg
            </span>
            <button
              className="w-6 h-6 rounded bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm"
              type="button"
              onClick={() =>
                onWeightChange(service.id, Number((weight + 0.1).toFixed(1)))
              }
            >
              +
            </button>
          </div>
        ) : (
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            {service.meta}
          </span>
        )}
      </div>
      <button
        className="w-full py-space-xs rounded-lg bg-surface-container-low hover:bg-secondary hover:text-on-secondary text-secondary font-label-md text-label-md transition-colors flex items-center justify-center gap-1"
        type="button"
        onClick={() => onAdd(service, weight)}
      >
        <span className="material-symbols-outlined text-sm">
          {service.mode === "weight" ? "add_shopping_cart" : "add"}
        </span>
        {service.mode === "weight"
          ? `+ Masukkan (${formatRp(lineTotal)})`
          : service.addLabel}
      </button>
    </div>
  );
}

export default function ServiceCatalog({ onAdd }) {
  const [category, setCategory] = useState(SERVICE_CATEGORIES[0]);
  const [weights, setWeights] = useState({ cks: 5.4, "setrika-exp": 5.4 });

  const services = SERVICES[category] ?? [];

  const handleWeightChange = (id, value) =>
    setWeights((state) => ({ ...state, [id]: value }));

  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex items-center justify-between">
        <span className="font-headline-sm text-headline-sm text-on-surface">
          Katalog Layanan &amp; Pakaian
        </span>
        <span className="font-label-xs text-label-xs text-on-surface-variant">
          Klik item untuk tambah ke keranjang
        </span>
      </div>
      <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs">
        {SERVICE_CATEGORIES.map((item) => (
          <button
            key={item}
            className={`px-space-md py-space-xs rounded-xl font-label-md text-label-md whitespace-nowrap transition-colors ${
              category === item
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface"
            }`}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {services.map((service) => (
          <ServiceTile
            key={`${category}-${service.id}`}
            service={service}
            weight={weights[service.id] ?? 5.4}
            onWeightChange={handleWeightChange}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}