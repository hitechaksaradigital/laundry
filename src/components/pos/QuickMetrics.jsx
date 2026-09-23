const METRICS = [
  {
    label: "Total Muatan Masuk Hari Ini",
    value: "184.2",
    unit: "Kg",
    valueClass: "text-on-surface",
  },
  {
    label: "Order Selesai Siap Ambil",
    value: "38",
    unit: "Paket",
    valueClass: "text-secondary",
  },
  {
    label: "Target Penerimaan Cabang",
    value: "88%",
    unit: "Tercapai",
    valueClass: "text-on-surface",
  },
];

export default function QuickMetrics() {
  return (
    <div className="grid grid-cols-3 gap-space-md p-space-md rounded-full bg-surface-container-high text-on-surface">
      {METRICS.map((metric) => (
        <div key={metric.label} className="flex flex-col">
          <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
            {metric.label}
          </span>
          <span
            className={`font-headline-md text-headline-md font-bold ${metric.valueClass}`}
          >
            {metric.value}{" "}
            <span className="text-body-sm font-normal text-on-surface-variant">
              {metric.unit}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}