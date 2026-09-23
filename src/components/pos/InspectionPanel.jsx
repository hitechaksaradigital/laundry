import { useState } from "react";
import { INSPECTION_CHIPS, PERFUMES } from "../../data/pos";

export default function InspectionPanel({ perfume, setPerfume }) {
  const [checked, setChecked] = useState(() =>
    Object.fromEntries(INSPECTION_CHIPS.map((chip) => [chip.id, chip.checked]))
  );
  const [note, setNote] = useState("");

  const toggle = (id) => setChecked((state) => ({ ...state, [id]: !state[id] }));

  return (
    <div className="p-space-lg rounded-full bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary">
            label_important
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Pemeriksaan Awal &amp; Catatan Khusus Item
          </span>
        </div>
        <span className="font-label-xs text-label-xs text-error font-medium flex items-center gap-1">
          <span className="material-symbols-outlined text-xs">shield</span>{" "}
          Cegah Komplain
        </span>
      </div>
      {/* Chips & Pilihan Cepat */}
      <div className="flex flex-wrap gap-space-xs">
        {INSPECTION_CHIPS.map((chip) => (
          <label
            key={chip.id}
            className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-xl cursor-pointer select-none font-label-md text-label-md transition-colors ${
              checked[chip.id]
                ? chip.checkedClass ||
                  "bg-surface-container-highest text-on-surface"
                : "bg-surface-container-low hover:bg-surface-container text-on-surface"
            }`}
          >
            <input
              className={`rounded ${
                chip.id === "luntur" ? "accent-error" : "accent-secondary"
              }`}
              type="checkbox"
              checked={checked[chip.id]}
              onChange={() => toggle(chip.id)}
            />
            <span>{chip.label}</span>
          </label>
        ))}
      </div>
      {/* Pilihan Parfum & Treatment Ekstra */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface-variant">
            Pilihan Aroma Parfum Grade-A:
          </span>
          <div className="flex items-center gap-space-xs">
            {PERFUMES.map((option) => (
              <button
                key={option}
                className={`flex-1 py-space-xs px-space-sm rounded-xl font-label-md text-label-md text-center transition-colors ${
                  perfume === option
                    ? "bg-secondary-container text-on-secondary-container"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
                type="button"
                onClick={() => setPerfume(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-on-surface-variant">
            Foto Kerusakan / Noda Fisik (Kamera Kasir):
          </span>
          <div className="flex items-center gap-space-sm">
            <button
              className="flex items-center gap-1 px-space-md py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md"
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                photo_camera
              </span>{" "}
              Ambil Foto (1)
            </button>
            <span className="font-label-xs text-label-xs text-secondary underline cursor-pointer">
              Preview Bukti Noda.jpg
            </span>
          </div>
        </div>
      </div>
      <div className="pt-space-xs">
        <input
          className="w-full px-space-md py-space-xs rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline border-none outline-none"
          placeholder="Ketik catatan tambahan untuk tim sortir pabrik/workshop..."
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  );
}