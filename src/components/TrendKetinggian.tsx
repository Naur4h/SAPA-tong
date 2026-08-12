export default function TrendKetinggian({ data }: { data: number[] }) {
  return (
    <div className="rounded-2xl bg-card p-4 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-ink">
        Tren ketinggian 24 jam terakhir
      </p>
      <div className="flex h-20 items-stretch gap-1.5">
        {data.map((v, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col justify-end overflow-hidden rounded-sm bg-light-accent/30"
          >
            <div
              className={`w-full rounded-sm ${
                v >= 80 ? "bg-red-400" : v >= 50 ? "bg-secondary" : "bg-accent"
              }`}
              style={{ height: `${v}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-secondary">
        <span>-21 jam</span>
        <span>sekarang</span>
      </div>
    </div>
  );
}