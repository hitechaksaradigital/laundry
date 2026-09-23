import { SERVICE_DISTRIBUTION } from "../data/dashboard";

export default function ServiceDistribution() {
  return (
    <div className="xl:col-span-4 flex flex-col justify-between bg-surface-container-lowest p-space-xl rounded-xl shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Distribusi Layanan
          </h2>
          <span className="font-label-xs text-label-xs bg-surface-container px-2 py-1 rounded text-on-surface-variant font-semibold">
            Live Q3
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Porsi volume pekerjaan operasional
        </p>
        {/* Donut Visual SVG */}
        <div className="relative flex items-center justify-center my-space-md py-2">
          <svg className="w-44 h-44 -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              fill="transparent"
              r="48"
              stroke="#eff4ff"
              strokeWidth="15"
            />
            {SERVICE_DISTRIBUTION.map((item) => (
              <circle
                key={item.label}
                cx="60"
                cy="60"
                fill="transparent"
                r="48"
                stroke={item.segment.stroke}
                strokeDasharray={item.segment.dashArray}
                strokeDashoffset={item.segment.dashOffset}
                strokeWidth="15"
              />
            ))}
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="font-display-md text-display-md text-on-surface font-extrabold leading-none">
              2.5K
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold uppercase tracking-wider mt-1">
              Nota Selesai
            </span>
          </div>
        </div>
        {/* Legend Items */}
        <div className="flex flex-col gap-space-xs">
          {SERVICE_DISTRIBUTION.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${item.colorClass}`}
                ></span>
                <span className="font-label-md text-label-md text-on-surface">
                  {item.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-code-num text-code-num font-bold text-on-surface">
                  {item.percent}%
                </span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  ({item.count})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md p-space-sm bg-surface-container-low rounded-xl text-center">
        <span className="font-label-xs text-label-xs text-secondary font-bold">
          Margin Tertinggi: Dry Clean Premium (Net 48%)
        </span>
      </div>
    </div>
  );
}
