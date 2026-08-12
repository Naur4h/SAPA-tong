"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AksesibilitasCtx {
  teksBesar: boolean;
  toggleTeksBesar: () => void;
}

const Ctx = createContext<AksesibilitasCtx | null>(null);

export function AksesibilitasProvider({ children }: { children: React.ReactNode }) {
  const [teksBesar, setTeksBesar] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = teksBesar ? "18px" : "16px";
  }, [teksBesar]);

  return (
    <Ctx.Provider
      value={{ teksBesar, toggleTeksBesar: () => setTeksBesar((v) => !v) }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useAksesibilitas() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAksesibilitas harus dipakai di dalam AksesibilitasProvider");
  return ctx;
}