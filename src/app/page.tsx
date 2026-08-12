"use client";

import { useState } from "react";
import MobileShell from "@/components/MobileShell";
import BottomNav, { TabKey } from "@/components/BottomNav";
import HomeScreen from "@/components/HomeScreen";
import KomposScreen from "@/components/KomposScreen";
import NotifikasiScreen from "@/components/NotifikasiScreen";
import PengaturanScreen from "@/components/PengaturanScreen";
import { AksesibilitasProvider } from "@/components/AksesibilitasContext";

export default function Home() {
  const [tab, setTab] = useState<TabKey>("home");

  return (
    <AksesibilitasProvider>
      <MobileShell>
        {tab === "home" && <HomeScreen />}
        {tab === "kompos" && <KomposScreen />}
        {tab === "notifikasi" && <NotifikasiScreen />}
        {tab === "pengaturan" && <PengaturanScreen />}
        <BottomNav active={tab} onChange={setTab} />
      </MobileShell>
    </AksesibilitasProvider>
  );
}