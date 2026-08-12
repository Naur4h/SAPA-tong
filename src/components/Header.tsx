export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 flex-col overflow-hidden rounded-sm border border-ink/15">
            <div className="h-1/2 bg-organik" />
            <div className="h-1/2 bg-anorganik" />
          </div>
          <div className="leading-none">
            <p className="font-display text-[15px] font-bold tracking-tight text-ink">
              SAPA-TONG
            </p>
            <p className="font-data text-[10px] uppercase tracking-widest text-ink-soft">
              Dasbor Petugas
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 font-body text-[13px] font-medium text-ink-soft sm:flex">
          <a href="#ringkasan" className="transition-colors hover:text-ink">
            Ringkasan
          </a>
          <a href="#unit" className="transition-colors hover:text-ink">
            Unit &amp; Lokasi
          </a>
          <a href="#notifikasi" className="transition-colors hover:text-ink">
            Notifikasi
          </a>
          <a href="#dampak" className="transition-colors hover:text-ink">
            Dampak
          </a>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-organik-deep/20 bg-organik-soft px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-organik-deep opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-organik-deep" />
          </span>
          <span className="font-data text-[11px] font-medium text-organik-deep">
            Live · MQTT tersambung
          </span>
        </div>
      </div>
    </header>
  );
}
