# SAPA-Tong — Dasbor Pemantauan

Dasbor web untuk petugas kebersihan memantau unit SAPA-Tong (wadah sampah pintar)
di titik keramaian publik Jakarta — dibangun dengan Next.js (App Router) + Tailwind CSS v4.
Data yang ditampilkan masih berupa mock data untuk keperluan demo/mockup proposal GEMASTIK.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

- `src/app` — halaman utama & layout
- `src/components` — komponen UI (Header, HeroStats, UnitCard, LayerGauge, NotifikasiFeed, CompostImpact, Footer)
- `src/lib/mock-data.ts` — data mock (unit tong, notifikasi, ringkasan statistik)

## Catatan desain

Palet warna dan tipografi disusun khusus untuk tema SAPA-Tong: sinyal hijau untuk
jalur organik, biru untuk anorganik, dan motif "strata" berulang yang merepresentasikan
lima lapisan filter air lindi (kain kasa, kapas, arang aktif, pasir, kerikil) — dipakai
baik sebagai divider dekoratif maupun sebagai bentuk indikator ketinggian sampah
(LayerGauge) agar identitas visual dan fungsi data saling terhubung.

Font menggunakan system font stack (bukan Google Fonts) karena lingkungan build
tidak memiliki akses jaringan ke fonts.googleapis.com — silakan ganti ke
Space Grotesk / IBM Plex Sans / IBM Plex Mono via `next/font/google` saat
dikembangkan di lingkungan dengan akses internet penuh, untuk hasil visual terbaik.
