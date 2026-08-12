import { pilarKotaCerdas } from "@/lib/mock-data";

export default function Footer() {
  return (
    <footer className="border-t border-stone-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p className="font-data text-[11px] uppercase tracking-[0.18em] text-stone">
          Selaras dengan Kota Cerdas
        </p>
        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-stone-line bg-stone-line sm:grid-cols-4">
          {pilarKotaCerdas.map((p) => (
            <div key={p.label} className="bg-paper px-4 py-4">
              <p className="font-display text-[13px] font-semibold text-ink">
                {p.label}
              </p>
              <p className="mt-1 font-body text-[11.5px] leading-snug text-ink-soft">
                {p.ket}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-stone-line pt-6 font-body text-[12px] text-ink-soft sm:flex-row">
          <p>SAPA-Tong — Wadah Sampah Pintar untuk Jakarta.</p>
          <p>Prototipe GEMASTIK XVIII · Kota Cerdas · Universitas Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
