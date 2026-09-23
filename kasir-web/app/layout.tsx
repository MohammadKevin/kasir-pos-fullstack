import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { LangProvider } from "@/lib/lang";

export const metadata: Metadata = {
  title: "NovaPOS — Sistem Kasir & Cloud ERP Modern untuk Bisnis Indonesia",
  description:
    "NovaPOS adalah platform kasir (POS) dan manajemen bisnis terintegrasi berbasis cloud. Kelola stok multi-outlet, barcode, laporan real-time, dan transaksi kasir secara cepat dan akurat.",
  keywords: [
    "aplikasi kasir",
    "POS Indonesia",
    "sistem kasir toko",
    "manajemen stok",
    "ERP retail",
    "kasir online",
    "NovaPOS",
  ],
  authors: [{ name: "NovaPOS Team" }],
  openGraph: {
    title: "NovaPOS — Next-Gen Cloud POS & ERP Retail",
    description:
      "Kelola kasir, stok, laporan, dan multi-outlet dalam satu platform terintegrasi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        <LangProvider>
          {children}
          <Toaster richColors position="top-right" closeButton />
        </LangProvider>
      </body>
    </html>
  );
}
