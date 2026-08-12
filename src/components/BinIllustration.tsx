import { Leaf, Recycle } from "lucide-react";

export default function BinIllustration() {
  return (
    <div className="relative mx-auto h-56 w-44">
      <div className="absolute -top-2 left-1/2 h-6 w-24 -translate-x-1/2 rounded-t-xl bg-ink" />
      <div className="absolute top-1.5 left-1/2 h-3 w-9 -translate-x-1/2 rounded bg-ink" />

      <div className="absolute inset-x-0 top-6 bottom-0 flex overflow-hidden rounded-2xl shadow-lg">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-primary">
          <Leaf size={34} strokeWidth={2} className="text-cream" />
          <span className="text-xs font-medium text-cream">organik</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 border-l-2 border-dashed border-cream/60 bg-accent">
          <Recycle size={34} strokeWidth={2} className="text-cream" />
          <span className="text-xs font-medium text-cream">anorganik</span>
        </div>
      </div>

      <div className="absolute -bottom-1.5 left-4 h-3 w-3 rounded-full bg-ink" />
      <div className="absolute -bottom-1.5 right-4 h-3 w-3 rounded-full bg-ink" />
    </div>
  );
}