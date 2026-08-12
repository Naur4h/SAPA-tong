import { ringkasan } from "@/lib/mock-data";
import StrataDivider from "./StrataDivider";

export default function CompostImpact() {
  return (
    <div id="dampak" className="flex flex-col border border-stone-line bg-ink text-paper">
      <div className="border-b border-paper/15 px-5 py-4">
        <p className="font-data text-[11px] uppercase tracking-[0.18em] text-stone">
          04 — Dampak Filtrasi
        </p>
        <h3 className="mt-1 font-display text-[19px] font-semibold">
          Dari air lindi menjadi kompos
        </h3>
      </div>

      <div className="flex-1 px-5 py-5">
        <p className="font-body text-[13px] leading-relaxed text-paper/75">
          Air lindi hasil kompresi disaring lima lapis sebelum ditampung —
          mengubah limbah yang biasanya mencemari, menjadi cairan pendukung
          kompos yang siap dimanfaatkan.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <p className="font-data text-[28px] font-semibold tracking-tight">
              {ringkasan.airLindiTerkumpul}
              <span className="text-sm text-paper/50"> L</span>
            </p>
            <p className="font-body text-[12px] text-paper/60">
              Air lindi tersaring hari ini
            </p>
          </div>
          <div>
            <p className="font-data text-[28px] font-semibold tracking-tight text-organik">
              {ringkasan.potensiKompos}
              <span className="text-sm text-paper/50"> kg</span>
            </p>
            <p className="font-body text-[12px] text-paper/60">
              Estimasi potensi kompos
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <StrataDivider withLabels />
      </div>
    </div>
  );
}
