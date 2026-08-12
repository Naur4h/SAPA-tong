import { ringkasan } from "@/lib/mock-data";
import StrataDivider from "./StrataDivider";

export default function HeroStats() {
  return (
    <section id="ringkasan" className="bg-texture border-b border-stone-line">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <p className="mb-4 font-data text-[11px] uppercase tracking-[0.18em] text-stone">
          Jakarta · Titik keramaian publik
        </p>
        <h1 className="max-w-2xl font-display text-[34px] font-bold leading-[1.08] tracking-tight text-ink sm:text-[46px]">
          Dari halte ke kota — setiap tong, terpantau lapis demi lapis.
        </h1>
        <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-ink-soft">
          SAPA-Tong memilah, memadatkan, dan menyaring sampah tepat di titik
          sumber. Dasbor ini menampilkan kondisi setiap unit secara
          real-time untuk petugas kebersihan dan pemangku kebijakan kota.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-stone-line bg-stone-line sm:grid-cols-4">
          <Stat value={ringkasan.unitAktif} label="Unit aktif" suffix="" />
          <Stat value={ringkasan.rataOrganik} label="Rata organik" suffix="%" />
          <Stat value={ringkasan.rataAnorganik} label="Rata anorganik" suffix="%" />
          <Stat
            value={ringkasan.terpilahHariIni}
            label="Terpilah hari ini"
            suffix=" L"
          />
        </div>
      </div>
      <StrataDivider />
    </section>
  );
}

function Stat({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix: string;
}) {
  return (
    <div className="bg-paper px-5 py-5">
      <p className="font-data text-[26px] font-semibold tracking-tight text-ink">
        {value}
        <span className="text-base text-stone">{suffix}</span>
      </p>
      <p className="mt-1 font-body text-[12px] text-ink-soft">{label}</p>
    </div>
  );
}
