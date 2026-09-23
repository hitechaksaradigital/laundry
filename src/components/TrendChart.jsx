import {
  CHART_DATA,
  REVENUE_AREA_PATH,
  REVENUE_PATH,
} from "../data/dashboard";

export default function TrendChart() {
  return (
    <div className="xl:col-span-8 flex flex-col bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-lg">
              insights
            </span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Tren Omset &amp; Volume Muatan Cucian
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Agregasi 7 Hari Terakhir: Pendapatan Harian vs Total Beban (Kg)
          </p>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-primary-container"></span>
            <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold">
              Omset (Juta Rp)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-secondary"></span>
            <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold">
              Volume (Kg)
            </span>
          </div>
        </div>
      </div>

      {/* Modern Inline SVG Chart */}
      <div className="relative w-full h-72">
        <svg
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 680 240"
        >
          <defs>
            <linearGradient id="revenueAreaGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#070666" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#070666" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="barGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#186586" />
              <stop offset="100%" stopColor="#99daff" />
            </linearGradient>
          </defs>
          {/* Horizontal Grid Lines */}
          {[200, 150, 100, 50].map((y) => (
            <line
              key={y}
              stroke="#d5e3fc"
              strokeDasharray="3 3"
              strokeWidth="1"
              x1="0"
              x2="680"
              y1={y}
              y2={y}
            />
          ))}
          {/* Volume Bars */}
          {CHART_DATA.map((d) => (
            <rect
              key={d.day}
              fill="url(#barGrad)"
              height={d.barHeight}
              opacity="0.9"
              rx="4"
              width="28"
              x={d.barX}
              y={d.barY}
            />
          ))}
          {/* Revenue Area Curve */}
          <path d={REVENUE_AREA_PATH} fill="url(#revenueAreaGrad)" />
          {/* Revenue Line Overlay */}
          <path
            d={REVENUE_PATH}
            fill="none"
            stroke="#070666"
            strokeLinecap="round"
            strokeWidth="3"
          />
          {/* Node Points on Curve */}
          {CHART_DATA.map((d) => (
            <circle
              key={`node-${d.day}`}
              cx={d.revenue.cx}
              cy={d.revenue.cy}
              fill={d.highlight ? "#186586" : "#f8f9ff"}
              r={d.highlight ? 5 : 4.5}
              stroke={d.highlight ? "#ffffff" : "#070666"}
              strokeWidth="2.5"
            />
          ))}
        </svg>
        {/* X-Axis Labels */}
        <div className="flex justify-between px-6 pt-2 font-label-md text-label-md text-on-surface-variant font-medium">
          {CHART_DATA.map((d) => (
            <span
              key={d.day}
              className={d.highlight ? "text-secondary font-bold" : undefined}
            >
              {d.day} ({d.volume}kg)
            </span>
          ))}
        </div>
      </div>

      <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-base">
            verified
          </span>
          <span className="font-body-sm text-body-sm text-on-surface">
            Puncak order terjadi setiap{" "}
            <strong>Sabtu &amp; Minggu</strong> (Porsi 44.8% per minggu).
          </span>
        </div>
        <span className="font-code-num text-code-num text-on-surface-variant font-medium">
          Rata-rata 364.2 Kg / Hari
        </span>
      </div>
    </div>
  );
}
