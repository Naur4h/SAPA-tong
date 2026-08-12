"use client";

import { useState } from "react";
import { CheckCircle2, Layers, Wrench } from "lucide-react";
import { daftarUnit, notifikasi } from "@/lib/mock-data";
import BinIllustration from "./BinIllustration";
import UnitSwitcher from "./UnitSwitcher";
import KoneksiBadge from "./KoneksiBadge";
import TrendKetinggian from "./TrendKetinggian";

function warnaKetinggian(v: number) {
  if (v >= 80) return "from-orange-400 to-red-500";
  if (v >= 50) return "from-accent to-secondary";
  return "from-light-accent to-accent";
}

export default function HomeScreen() {
  const [kodeAktif, setKodeAktif] = useState(daftarUnit[0].kode);
  const [sudahDikosongkan, setSudahDikosongkan] = useState(false);
  const unit = daftarUnit.find((u) => u.kode === kodeAktif)!;
  const filterMendesak = unit.filterSisaHari <= 7;

  return (
   <div className="min-h-0 flex-1 overflow-y-auto pb-4">
      <div className="rounded-b-3xl bg-gradient-to-b from-accent to-primary px-5 pb-6 pt-6 text-cream">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">SAPA-Tong</p>
            <p className="text-sm text-cream/80">
              Tong #{unit.kode} • {unit.lokasi}
            </p>
          </div>
          <KoneksiBadge koneksi={unit.koneksi} />
        </div>

        <UnitSwitcher aktif={kodeAktif} onChange={setKodeAktif} />
      </div>

      <div className="-mt-2 px-5">
        <div className="rounded-2xl bg-card p-5 shadow-md">
          <BinIllustration />

          <div className="mt-5 rounded-xl bg-sand px-4 py-3">
            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-ink">Ketinggian Sampah</span>
              <span className="text-sm font-bold text-ink">{unit.ketinggian}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-light-accent/40">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${warnaKetinggian(unit.ketinggian)}`}
                style={{ width: `${unit.ketinggian}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setSudahDikosongkan(true)}
            disabled={sudahDikosongkan}
            className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
              sudahDikosongkan ? "bg-light-accent/40 text-secondary" : "bg-primary text-cream active:bg-primary/90"
            }`}
          >
            <CheckCircle2 size={16} />
            {sudahDikosongkan ? "Sudah ditandai dikosongkan" : "Tandai Sudah Dikosongkan"}
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-card p-4 shadow-sm">
            <p className="text-xs font-medium text-secondary">Organik</p>
            <p className="text-2xl font-bold text-primary">{unit.organik}%</p>
          </div>
          <div className="rounded-2xl bg-card p-4 shadow-sm">
            <p className="text-xs font-medium text-secondary">Anorganik</p>
            <p className="text-2xl font-bold text-accent">{unit.anorganik}%</p>
          </div>

          <div className="rounded-2xl bg-card p-4 shadow-sm">
            <div className="mb-1 flex items-center gap-1.5 text-secondary">
              <Layers size={13} />
              <p className="text-xs font-medium">Siklus Kompresi</p>
            </div>
            <p className="text-2xl font-bold text-primary">{unit.siklusKompresi}×</p>
          </div>

          <div className={`rounded-2xl p-4 shadow-sm ${filterMendesak ? "bg-sand" : "bg-card"}`}>
            <div className="mb-1 flex items-center gap-1.5 text-secondary">
              <Wrench size={13} />
              <p className="text-xs font-medium">Ganti Filter</p>
            </div>
            <p className={`text-2xl font-bold ${filterMendesak ? "text-alert-deep" : "text-primary"}`}>
              {unit.filterSisaHari} hr
            </p>
          </div>
        </div>

        <div className="mt-4">
          <TrendKetinggian data={unit.riwayat24Jam} />
        </div>

        <div className="mt-4 rounded-2xl bg-card p-4 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-ink">Notifikasi terbaru</p>
          <p className="line-clamp-2 text-sm text-ink/70">{notifikasi[0].pesan}</p>
          <p className="mt-1 text-xs text-secondary">{notifikasi[0].waktu}</p>
        </div>
      </div>
    </div>
  );
}