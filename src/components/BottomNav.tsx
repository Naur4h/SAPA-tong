"use client";

import { Home, Leaf, Bell, Settings } from "lucide-react";

export type TabKey = "home" | "kompos" | "notifikasi" | "pengaturan";

const items: { key: TabKey; label: string; icon: typeof Home }[] = [
  { key: "home", label: "Beranda", icon: Home },
  { key: "kompos", label: "Kompos", icon: Leaf },
  { key: "notifikasi", label: "Notifikasi", icon: Bell },
  { key: "pengaturan", label: "Pengaturan", icon: Settings },
];

export default function BottomNav({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (key: TabKey) => void;
}) {
  return (
<nav className="sticky bottom-0 z-20 flex shrink-0 items-center justify-around border-t border-light-accent/40 bg-card px-2 py-2.5">
      {items.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => {
  alert(`KLIK ${key}`);
  onChange(key);
}}
            className="flex flex-col items-center gap-1 rounded-xl px-4 py-1.5"
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.4 : 2}
              className={isActive ? "text-primary" : "text-secondary/50"}
            />
            <span
              className={`text-[10px] font-medium ${
                isActive ? "text-primary" : "text-secondary/50"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}