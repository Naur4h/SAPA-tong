import { notifikasi } from "@/lib/mock-data";

const tingkatWarna = {
  info: "bg-accent",
  peringatan: "bg-[#C9A227]",
  kritis: "bg-[#C1622E]",
};

export default function NotifikasiScreen() {
  return (
    <div className="flex-1 overflow-y-auto pb-4">
      <div className="rounded-b-3xl bg-gradient-to-b from-accent to-primary px-5 pb-6 pt-6 text-cream">
        <p className="text-lg font-bold">Notifikasi</p>
        <p className="text-sm text-cream/80">
          Riwayat aktivitas Tong #A1 • Halte Blok M
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2.5 px-5">
        {notifikasi.map((n) => (
          <div key={n.id} className="flex gap-3 rounded-2xl bg-card p-4 shadow-sm">
            <span
              className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                tingkatWarna[n.tingkat]
              }`}
            />
            <div>
              <p className="text-sm leading-snug text-ink">{n.pesan}</p>
              <p className="mt-1 text-xs text-secondary">{n.waktu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}