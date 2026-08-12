import { Wifi, WifiOff, RadioTower } from "lucide-react";
import { UnitTong } from "@/lib/mock-data";

const config = {
  wifi: { icon: Wifi, label: "Wi-Fi tersambung", tone: "text-cream" },
  "access-point": { icon: RadioTower, label: "Mode Access Point", tone: "text-amber-200" },
  offline: { icon: WifiOff, label: "Offline", tone: "text-red-200" },
};

export default function KoneksiBadge({ koneksi }: { koneksi: UnitTong["koneksi"] }) {
  const c = config[koneksi];
  const Icon = c.icon;
  return (
    <div className={`flex items-center gap-1.5 ${c.tone}`}>
      <Icon size={13} />
      <span className="text-xs">{c.label}</span>
    </div>
  );
}