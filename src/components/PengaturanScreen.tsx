"use client";

import { MapPin, Bell, Info, ChevronRight, Type, Network } from "lucide-react";
import { daftarUnit } from "@/lib/mock-data";
import { useAksesibilitas } from "./AksesibilitasContext";

const items = [
  { icon: MapPin, label: "Lokasi Tong", value: daftarUnit[0].lokasi },
  { icon: Bell, label: "Notifikasi", value: "Aktif" },
  { icon: Info, label: "Tentang SAPA-Tong", value: "" },
];

export default function PengaturanScreen() {
  const { teksBesar, toggleTeksBesar } = useAksesibilitas();
  const totalUnit = daftarUnit.length;
  const totalTerpilah = daftarUnit.reduce((a, u) => a + u.organik + u.anorganik, 0);

  return (
    <div className="flex-1 overflow-y-auto pb-4">
      <div className="rounded-b-3xl bg-gradient-to-b from-accent to-primary px-5 pb-6 pt-6 text-cream">
        <p className="text-lg font-bold">Pengaturan</p>
        <p className="text-sm text-cream/80">Tong #{daftarUnit[0].kode}</p>
      </div>

      <div className="mt-4 flex flex-col gap-2.5 px-5">
        <div className="rounded-2xl bg-card p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-secondary">
            <Network size={15} />
            <p className="text-sm font-semibold text-ink">Ringkasan Jaringan</p>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="text-xl font-bold text-primary">{totalUnit}</p>
              <p className="text-[11px] text-secondary">Unit terhubung</p>
            </div>
            <div>
              <p className="text-xl font-bold text-accent">{totalTerpilah}%</p>
              <p className="text-[11px] text-secondary">Total pemilahan gabungan</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand">
            <Type size={18} className="text-primary" />
          </span>
          <span className="flex-1">
            <p className="text-sm font-medium text-ink">Perbesar Teks</p>
            <p className="text-xs text-secondary">
              Untuk kenyamanan lansia & disabilitas netra sebagian
            </p>
          </span>
          <button
            onClick={toggleTeksBesar}
            className={`h-6 w-11 shrink-0 rounded-full transition-colors ${
              teksBesar ? "bg-primary" : "bg-light-accent/60"
            }`}
          >
            <span
              className={`block h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform ${
                teksBesar ? "translate-x-5.5" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {items.map(({ icon: Icon, label, value }) => (
          <button key={label} className="flex items-center gap-3 rounded-2xl bg-card p-4 text-left shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand">
              <Icon size={18} className="text-primary" />
            </span>
            <span className="flex-1">
              <p className="text-sm font-medium text-ink">{label}</p>
              {value && <p className="text-xs text-secondary">{value}</p>}
            </span>
            <ChevronRight size={16} className="text-secondary/50" />
          </button>
        ))}
      </div>
    </div>
  );
}