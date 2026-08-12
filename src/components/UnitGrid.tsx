import { unitTong } from "@/lib/mock-data";
import UnitCard from "./UnitCard";

export default function UnitGrid() {
  return (
    <section id="unit" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-data text-[11px] uppercase tracking-[0.18em] text-stone">
            02 — Unit &amp; Lokasi
          </p>
          <h2 className="mt-1 font-display text-[26px] font-bold tracking-tight text-ink">
            Enam titik, satu jaringan pemilahan
          </h2>
        </div>
        <p className="hidden max-w-[220px] text-right font-body text-[12px] text-ink-soft sm:block">
          Diperbarui otomatis tiap sensor mengirim data via MQTT.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {unitTong.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </section>
  );
}
