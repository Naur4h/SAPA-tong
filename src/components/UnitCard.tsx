import { TongUnit } from "@/lib/mock-data";
import LayerGauge from "./LayerGauge";

const statusConfig = {
  aman: { label: "Aman", dot: "bg-organik-deep", text: "text-organik-deep", bg: "bg-organik-soft" },
  perhatian: { label: "Perlu Perhatian", dot: "bg-amber", text: "text-amber", bg: "bg-amber-soft" },
  penuh: { label: "Penuh", dot: "bg-alert-deep", text: "text-alert-deep", bg: "bg-alert-soft" },
};

export default function UnitCard({ unit }: { unit: TongUnit }) {
  const s = statusConfig[unit.status];

  return (
    <div className="border border-stone-line bg-paper p-5 transition-shadow hover:shadow-[0_2px_0_0_var(--color-stone-line)]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="font-data text-[11px] uppercase tracking-widest text-stone">
            {unit.kode}
          </p>
          <h3 className="mt-0.5 font-display text-[17px] font-semibold leading-tight text-ink">
            {unit.lokasi}
          </h3>
          <p className="font-body text-[12px] text-ink-soft">{unit.area}</p>
        </div>
        <span
          className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 font-body text-[11px] font-medium ${s.bg} ${s.text}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
          {s.label}
        </span>
      </div>

      <div className="flex gap-3">
        <LayerGauge label="Organik" value={unit.organik} tone="organik" />
        <LayerGauge label="Anorganik" value={unit.anorganik} tone="anorganik" />
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-stone-line pt-3 font-data text-[11px] text-ink-soft">
        <span>Update: {unit.terakhirUpdate}</span>
        <span>{unit.siklusKompresi}× kompresi</span>
      </div>
    </div>
  );
}
