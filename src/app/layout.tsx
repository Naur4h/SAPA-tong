import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAPA-Tong",
  description: "Pantau tong sampah pintar SAPA-Tong.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
