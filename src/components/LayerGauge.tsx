interface LayerGaugeProps {
  label: string;
  value: number;
  tone: "organik" | "anorganik";
}

const toneMap = {
  organik: {
    fill: "bg-organik",
    soft: "bg-organik-soft",
    text: "text-organik-deep",
    line: "bg-organik-deep/25",
  },
  anorganik: {
    fill: "bg-anorganik",
    soft: "bg-anorganik-soft",
    text: "text-anorganik-deep",
    line: "bg-anorganik-deep/25",
  },
};

export default function LayerGauge({ label, value, tone }: LayerGaugeProps) {
  const t = toneMap[tone];
  const bandCount = 4;

  return (
    <div className="flex-1">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="font-body text-[11px] font-medium uppercase tracking-wide text-ink-soft">
          {label}
        </span>
        <span className={`font-data text-sm font-semibold ${t.text}`}>
          {value}%
        </span>
      </div>
      <div
        className={`relative h-16 w-full overflow-hidden rounded-sm border border-stone-line ${t.soft}`}
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`absolute bottom-0 left-0 w-full ${t.fill} transition-[height] duration-700 ease-out`}
          style={{ height: `${value}%` }}
        >
          <div className="flex h-full w-full flex-col justify-between py-[3px]">
            {Array.from({ length: bandCount }).map((_, i) => (
              <div key={i} className={`h-px w-full ${t.line}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
