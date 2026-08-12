export interface NotifikasiItem {
  id: string;
  pesan: string;
  waktu: string;
  tingkat: "info" | "peringatan" | "kritis";
  unitKode: string;
  lokasi: string;
}

export interface TahapKompos {
  nomor: number;
  judul: string;
  poin: string[];
}

export interface UnitTong {
  kode: string;
  lokasi: string;
  organik: number;
  anorganik: number;
  ketinggian: number;
  airLindi: number;
  riwayat24Jam: number[];
  koneksi: "wifi" | "access-point" | "offline";
  siklusKompresi: number;
  filterSisaHari: number;
}

export const daftarUnit: UnitTong[] = [
  {
    kode: "A1",
    lokasi: "Halte Blok M",
    organik: 88,
    anorganik: 54,
    ketinggian: 85,
    airLindi: 12,
    riwayat24Jam: [20, 28, 35, 47, 58, 66, 74, 85],
    koneksi: "wifi",
    siklusKompresi: 12,
    filterSisaHari: 4,
  },
  {
    kode: "A2",
    lokasi: "Halte Dukuh Atas",
    organik: 46,
    anorganik: 39,
    ketinggian: 43,
    airLindi: 6,
    riwayat24Jam: [10, 14, 18, 24, 29, 34, 39, 43],
    koneksi: "wifi",
    siklusKompresi: 8,
    filterSisaHari: 11,
  },
  {
    kode: "A3",
    lokasi: "Area Fasilkom UI",
    organik: 62,
    anorganik: 28,
    ketinggian: 55,
    airLindi: 9,
    riwayat24Jam: [15, 22, 30, 34, 40, 45, 50, 55],
    koneksi: "access-point",
    siklusKompresi: 15,
    filterSisaHari: 18,
  },
];

export const notifikasi: NotifikasiItem[] = [
  {
    id: "n1",
    pesan: "Wadah organik hampir penuh (88%). Segera jadwalkan pengosongan.",
    waktu: "Baru saja",
    tingkat: "kritis",
    unitKode: "A1",
    lokasi: "Halte Blok M",
  },
  {
    id: "n2",
    pesan: "Kompresi organik selesai, volume berkurang 48%.",
    waktu: "12 menit lalu",
    tingkat: "info",
    unitKode: "A2",
    lokasi: "Halte Dukuh Atas",
  },
  {
    id: "n3",
    pesan: "Filter air lindi mendekati jadwal penggantian rutin.",
    waktu: "1 jam lalu",
    tingkat: "peringatan",
    unitKode: "A3",
    lokasi: "Area Fasilkom UI",
  },
  {
    id: "n4",
    pesan: "Sinkronisasi data sensor berhasil, seluruh jalur normal.",
    waktu: "3 jam lalu",
    tingkat: "info",
    unitKode: "A1",
    lokasi: "Halte Blok M",
  },
];

export const tahapKompos: TahapKompos[] = [
  {
    nomor: 1,
    judul: "Pengumpulan",
    poin: [
      "Ambil air lindi dari wadah penampung hasil filtrasi",
      "Gunakan APD: sarung tangan dan masker",
    ],
  },
  {
    nomor: 2,
    judul: "Penyaringan",
    poin: [
      "Saring ulang dengan kain kasa untuk menghilangkan partikel kasar",
    ],
  },
  {
    nomor: 3,
    judul: "Sterilisasi",
    poin: [
      "Diamkan di wadah tertutup untuk mengurangi kontaminan awal",
    ],
  },
  {
    nomor: 4,
    judul: "Fermentasi",
    poin: [
      "Campurkan 1 liter air lindi, 10-20 ml EM4, 1-2 sendok gula pasir",
      "Fermentasikan dalam wadah tertutup selama 7-14 hari",
    ],
  },
  {
    nomor: 5,
    judul: "Kematangan",
    poin: [
      "Ciri matang: beraroma tanah, tidak menyengat, warna coklat gelap",
      "Cairan siap digunakan setelah proses ini",
    ],
  },
  {
    nomor: 6,
    judul: "Penggunaan",
    poin: [
      "Encerkan dengan air perbandingan 1:10 hingga 1:20",
      "Siramkan ke tanah/media tanam, hindari kontak langsung ke daun",
    ],
  },
];

export const ringkasan = {
  unitAktif: 3,
  rataOrganik: 65,
  rataAnorganik: 40,
  terpilahHariIni: 128,
  airLindiTerkumpul: 27,
  potensiKompos: 18,
};

export const pilarKotaCerdas = [
  {
    label: "Smart Governance",
    ket: "Mendukung pengambilan keputusan berbasis data kondisi sampah.",
  },
  {
    label: "Smart Environment",
    ket: "Memantau pemilahan dan pengelolaan sampah secara lebih efisien.",
  },
  {
    label: "Smart Living",
    ket: "Mendorong lingkungan publik yang lebih bersih dan nyaman.",
  },
  {
    label: "Smart Technology",
    ket: "Menggunakan sensor dan konektivitas untuk pemantauan real-time.",
  },
];