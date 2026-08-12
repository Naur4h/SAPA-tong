import { notifikasi } from "@/lib/mock-data";

const tingkatConfig = {
  info: { dot: "bg-anorganik", text: "text-anorganik-deep" },
  peringatan: { dot: "bg-amber", text: "text-amber" },
  kritis: { dot: "bg-alert-deep", text: "text-alert-deep" },
};

export default function NotifikasiFeed() {
  return (
    <div id="notifikasi" className="border border-stone-line bg-paper">
      <div className="border-b border-stone-line px-5 py-4">
        <p className="font-data text-[11px] uppercase tracking-[0.18em] text-stone">
          03 — Notifikasi
        </p>
        <h3 className="mt-1 font-display text-[19px] font-semibold text-ink">
          Aktivitas terbaru
        </h3>
      </div>
      <ul>
        {notifikasi.map((n) => {
          const t = tingkatConfig[n.tingkat];
          return (
            <li
              key={n.id}
              className="flex gap-3 border-b border-stone-line px-5 py-4 last:border-b-0"
            >
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.dot}`} />
              <div className="min-w-0">
                <p className="font-body text-[13px] leading-snug text-ink">
                  {n.pesan}
                </p>
                <p className="mt-1 font-data text-[11px] text-ink-soft">
                  <span className={`font-medium ${t.text}`}>{n.unitKode}</span>
                  {" · "}
                  {n.lokasi} · {n.waktu}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
