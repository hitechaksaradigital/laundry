import { useState } from "react";
import { isSupabaseConfigured } from "../../lib/supabase";

const EMPTY_FORM = {
  name: "",
  phone: "",
  address: "",
  member_tier: "Umum",
};

export default function CustomerPanel({
  query,
  setQuery,
  customers,
  selected,
  onSelect,
  onCreate,
}) {
  const [formOpen, setFormOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);

  const keyword = query.trim().toLowerCase();
  const suggestions =
    selected || !keyword
      ? []
      : customers
          .filter(
            (c) =>
              c.name.toLowerCase().includes(keyword) ||
              (c.phone || "").includes(keyword)
          )
          .slice(0, 5);

  const updateField = (field, value) =>
    setForm((state) => ({ ...state, [field]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setFormError("Nama dan No. HP wajib diisi.");
      return;
    }
    setSaving(true);
    setFormError("");
    try {
      await onCreate({
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim() || null,
        member_tier: form.member_tier,
      });
      setForm(EMPTY_FORM);
      setFormOpen(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-space-lg rounded-full bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-secondary">
            person_search
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface">
            Data Pelanggan
          </span>
        </div>
        <span className="font-label-xs text-label-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
          F1: Cari Cepat
        </span>
      </div>

      {!isSupabaseConfigured && (
        <div className="px-space-md py-space-xs rounded-xl bg-amber-50 border border-amber-200 font-body-sm text-body-sm text-amber-900">
          Pelanggan tersimpan di Supabase — isi <code>.env</code> lalu restart
          dev server untuk mengaktifkan pencarian &amp; tambah pelanggan.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">
        <div className="md:col-span-9 relative">
          <div className="flex items-center gap-space-sm px-space-md py-space-sm rounded-xl bg-surface-container-low text-on-surface">
            <span className="material-symbols-outlined text-outline text-lg">
              search
            </span>
            <input
              className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline"
              placeholder="Ketik Nama, No. HP, atau Scan Kartu..."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="p-0.5 rounded text-outline hover:text-on-surface"
              type="button"
              onClick={() => setQuery("")}
            >
              <span className="material-symbols-outlined text-base">
                close
              </span>
            </button>
          </div>

          {/* Saran pelanggan dari database */}
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-md overflow-hidden">
              {suggestions.map((customer) => (
                <button
                  key={customer.id}
                  className="w-full flex items-center justify-between px-space-md py-space-xs hover:bg-surface-container-low transition-colors text-left"
                  type="button"
                  onClick={() => onSelect(customer)}
                >
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-base">
                      person
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface">
                      {customer.name}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {customer.phone}
                    </span>
                  </span>
                  <span className="font-label-xs text-label-xs text-secondary">
                    {customer.member_tier}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Member Snapshot Pill */}
          <div className="mt-space-xs flex items-center justify-between px-space-sm">
            <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
              {selected ? (
                <>
                  <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface">
                    <span
                      className="material-symbols-outlined text-sm text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      stars
                    </span>
                    {selected.member_tier} Member
                  </span>
                  <span>Alamat: {selected.address || "belum diisi"}</span>
                </>
              ) : (
                <span>
                  Pelanggan belum dipilih — data akan disimpan sebagai
                  &quot;Umum&quot;
                </span>
              )}
            </div>
            <span className="font-code-num text-code-num text-secondary">
              {selected
                ? `Poin: ${selected.points} • Deposit: Rp ${Number(
                    selected.deposit
                  ).toLocaleString("id-ID")}`
                : ""}
            </span>
          </div>
        </div>
        <div className="md:col-span-3">
          <button
            className={`w-full flex items-center justify-center gap-space-xs py-space-sm px-space-md rounded-xl transition-colors shadow-sm ${
              formOpen
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface"
            }`}
            type="button"
            onClick={() => {
              setFormOpen((open) => !open);
              setFormError("");
            }}
          >
            <span className="material-symbols-outlined text-secondary text-base">
              {formOpen ? "close" : "person_add"}
            </span>
            <span className="font-label-md text-label-md whitespace-nowrap">
              {formOpen ? "Batal" : "+ Baru"}
            </span>
          </button>
        </div>
      </div>

      {/* Form Tambah Pelanggan Baru */}
      {formOpen && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-12 gap-space-sm p-space-md rounded-xl bg-surface-container-low border border-outline-variant/60"
        >
          <div className="md:col-span-4 flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Nama Lengkap *
            </span>
            <input
              className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline border-none outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="cth: Siti Rahayu"
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>
          <div className="md:col-span-3 flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              No. HP *
            </span>
            <input
              className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest font-code-num text-code-num text-on-surface placeholder:text-outline border-none outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="0812xxxxxxx"
              type="text"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>
          <div className="md:col-span-3 flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Alamat
            </span>
            <input
              className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline border-none outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="cth: Senopati No. 42B"
              type="text"
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Tier Member
            </span>
            <select
              className="px-space-md py-space-xs rounded-xl bg-surface-container-lowest font-body-sm text-body-sm text-on-surface border-none outline-none focus:ring-2 focus:ring-secondary/40"
              value={form.member_tier}
              onChange={(e) => updateField("member_tier", e.target.value)}
            >
              {["Umum", "Member", "Silver", "Gold", "VIP"].map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>
          </div>
          {formError && (
            <div className="md:col-span-12 px-space-md py-space-xs rounded-xl bg-error-container text-on-error-container font-label-md text-label-md">
              {formError}
            </div>
          )}
          <div className="md:col-span-12 flex items-center justify-end gap-space-xs">
            <button
              className="px-space-md py-space-xs rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
              type="button"
              onClick={() => {
                setFormOpen(false);
                setFormError("");
              }}
            >
              Batal
            </button>
            <button
              className="px-space-md py-space-xs rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-colors flex items-center gap-1 disabled:opacity-60"
              type="submit"
              disabled={saving}
            >
              <span className="material-symbols-outlined text-sm">
                {saving ? "progress_activity" : "save"}
              </span>
              {saving ? "Menyimpan..." : "Simpan Pelanggan"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}