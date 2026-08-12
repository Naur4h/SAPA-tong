// import { Droplets } from "lucide-react";
// import { tahapKompos, daftarUnit } from "@/lib/mock-data";

// export default function KomposScreen() {
//   const totalAirLindi = daftarUnit.reduce((a, u) => a + u.airLindi, 0);

//   return (
//     <div className="flex-1 overflow-y-auto pb-4">
//       <div className="rounded-b-3xl bg-gradient-to-b from-accent to-primary px-5 pb-6 pt-6 text-cream">
//         <div className="mb-2 flex items-center gap-2">
//           <Droplets size={20} />
//           <p className="text-lg font-bold">Manfaat Air Lindi</p>
//         </div>
//         <p className="text-sm text-cream/80">
//           Ternyata dapat dijadikan kompos
//         </p>
//         <p className="mt-3 text-2xl font-bold">{totalAirLindi} L</p>
//         <p className="text-xs text-cream/70">
//           Air lindi terkumpul hari ini • seluruh unit
//         </p>
//       </div>

//       <div className="mt-4 flex flex-col gap-3 px-5">
//         {tahapKompos.map((t) => (
//           <div key={t.nomor} className="rounded-2xl bg-card p-4 shadow-sm">
//             <div className="mb-2 flex items-center gap-2.5">
//               <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-cream">
//                 {t.nomor}
//               </span>
//               <p className="text-sm font-semibold text-ink">
//                 Tahap {t.nomor} ({t.judul})
//               </p>
//             </div>
//             <ul className="ml-9.5 list-disc space-y-1 pl-3 text-[13px] leading-snug text-ink/75">
//               {t.poin.map((p, i) => (
//                 <li key={i}>{p}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  Droplets,
  Filter,
  ShieldCheck,
  FlaskConical,
  Sparkles,
  Sprout,
  Clock,
  PlusCircle,
} from "lucide-react";
import { tahapKompos, daftarUnit } from "@/lib/mock-data";

const ikonTahap = [Droplets, Filter, ShieldCheck, FlaskConical, Sparkles, Sprout];

export default function KomposScreen() {
  const totalAirLindi = daftarUnit.reduce((a, u) => a + u.airLindi, 0);
  const [catatan, setCatatan] = useState<{ kg: string; waktu: string }[]>([
    { kg: "2.4", waktu: "Kemarin" },
  ]);
  const [input, setInput] = useState("");

  function catatHasil() {
    if (!input) return;
    setCatatan([{ kg: input, waktu: "Baru saja" }, ...catatan]);
    setInput("");
  }

  return (
    <div className="flex-1 overflow-y-auto pb-4">
      <div className="rounded-b-3xl bg-gradient-to-b from-accent to-primary px-5 pb-6 pt-6 text-cream">
        <div className="mb-2 flex items-center gap-2">
          <Droplets size={20} />
          <p className="text-lg font-bold">Manfaat Air Lindi</p>
        </div>
        <p className="text-sm text-cream/80">Ternyata dapat dijadikan kompos</p>
        <p className="mt-3 text-2xl font-bold">{totalAirLindi} L</p>
        <p className="text-xs text-cream/70">
          Air lindi terkumpul hari ini • seluruh unit
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 px-5">
        {tahapKompos.map((t, i) => {
          const Icon = ikonTahap[i];
          const penting = t.nomor === 4;
          return (
            <div
              key={t.nomor}
              className={`rounded-2xl bg-card p-4 shadow-sm ${
                penting ? "ring-2 ring-accent" : ""
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Icon size={15} className="text-cream" />
                  </span>
                  <p className="text-sm font-semibold text-ink">
                    Tahap {t.nomor} ({t.judul})
                  </p>
                </div>
                {penting && (
                  <span className="flex items-center gap-1 rounded-full bg-sand px-2 py-0.5 text-[10px] font-medium text-ink">
                    <Clock size={11} />
                    7-14 hari
                  </span>
                )}
              </div>
              <ul className="ml-10.5 list-disc space-y-1 pl-3 text-[13px] leading-snug text-ink/75">
                {t.poin.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="rounded-2xl bg-card p-4 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-ink">
            Catat Hasil Kompos
          </p>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Jumlah (kg)"
              inputMode="decimal"
              className="flex-1 rounded-xl border border-light-accent/60 bg-cream px-3 py-2 text-sm text-ink placeholder:text-secondary/60 focus:border-accent focus:outline-none"
            />
            <button
              onClick={catatHasil}
              className="flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-cream active:bg-primary/90"
            >
              <PlusCircle size={15} />
              Catat
            </button>
          </div>

          {catatan.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1.5">
              {catatan.map((c, i) => (
                <li key={i} className="flex justify-between text-[13px] text-ink/70">
                  <span>{c.kg} kg kompos</span>
                  <span className="text-secondary">{c.waktu}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}