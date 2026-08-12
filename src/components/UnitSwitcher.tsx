"use client";

import { daftarUnit } from "@/lib/mock-data";

export default function UnitSwitcher({
  aktif,
  onChange,
}: {
  aktif: string;
  onChange: (kode: string) => void;
}) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 pt-3">
      {daftarUnit.map((u) => {
        const isActive = u.kode === aktif;
        return (
          <button
            key={u.kode}
            onClick={() => onChange(u.kode)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap ${
              isActive ? "bg-cream text-primary" : "bg-cream/20 text-cream/80"
            }`}
          >
            #{u.kode} • {u.lokasi}
          </button>
        );
      })}
    </div>
  );
}