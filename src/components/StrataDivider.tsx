const layers = [
  { label: "Kain kasa", color: "bg-[#e2ddd0]" },
  { label: "Kapas", color: "bg-[#d8d2c2]" },
  { label: "Arang aktif", color: "bg-[#3a352e]" },
  { label: "Pasir", color: "bg-[#a39c8c]" },
  { label: "Kerikil", color: "bg-[#7a7364]" },
];

export default function StrataDivider({ withLabels = false }: { withLabels?: boolean }) {
  return (
    <div className="w-full">
      <div className="flex h-2.5 w-full overflow-hidden rounded-none">
        {layers.map((l) => (
          <div key={l.label} className={`h-full flex-1 ${l.color}`} />
        ))}
      </div>
      {withLabels && (
        <div className="mt-2 flex justify-between font-data text-[10px] uppercase tracking-wide text-ink-soft/70">
          {layers.map((l) => (
            <span key={l.label} className="flex-1 text-center first:text-left last:text-right">
              {l.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
