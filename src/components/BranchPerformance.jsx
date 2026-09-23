import { Link } from "react-router-dom";
import { BRANCHES } from "../data/dashboard";

function ProgressBar({ label, value, valueLabel, labelClass, barClass }) {
  return (
    <div>
      <div className="flex justify-between font-label-xs text-label-xs mb-1">
        <span className="text-on-surface-variant">{label}</span>
        <span className={`font-bold ${labelClass}`}>{valueLabel}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
        <div
          className={`h-full ${barClass} rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function BranchPerformance() {
  return (
    <div className="xl:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">
                hub
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Ringkasan Kinerja Multi-Cabang
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Realisasi target bulanan dan utilisasi beban armada mesin
            </p>
          </div>
          <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-xs text-label-xs text-on-surface font-semibold">
            3 Cabang Aktif
          </span>
        </div>
        <div className="flex flex-col gap-space-md mt-space-md">
          {BRANCHES.map((branch) => (
            <div
              key={branch.index}
              className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs hover:bg-surface-container transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span
                    className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center ${branch.indexClass}`}
                  >
                    {branch.index}
                  </span>
                  <div>
                    <h3 className="font-label-lg text-label-lg font-bold text-on-surface">
                      {branch.name}
                    </h3>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      {branch.role}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-code-num text-code-num font-bold text-on-surface">
                    {branch.revenue}
                  </p>
                  <span className="font-label-xs text-label-xs text-secondary font-semibold">
                    {branch.targetLabel}
                  </span>
                </div>
              </div>
              {/* Progress Bars Container */}
              <div className="grid grid-cols-2 gap-space-md mt-2 pt-2 bg-surface-container-lowest p-space-sm rounded-lg">
                <ProgressBar
                  label="Pencapaian Target"
                  value={branch.targetPercent}
                  valueLabel={`${branch.targetPercent}%`}
                  labelClass="text-on-surface"
                  barClass={branch.targetBarClass}
                />
                <ProgressBar
                  label="Kapasitas Mesin Cuci/Kering"
                  value={branch.machinePercent}
                  valueLabel={branch.machinePercentLabel}
                  labelClass={branch.machineLabelClass}
                  barClass={branch.machineBarClass}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-end">
        <Link
          className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1 font-bold"
          to="/pengaturan-cabang-pengguna"
        >
          <span>Kelola Pengaturan &amp; Routing Order Mesin</span>
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
