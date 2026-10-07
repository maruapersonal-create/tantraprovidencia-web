import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Configuración para deshabilitar el zoom en dispositivos móviles
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 2. Metadatos SEO y verificación de Google
export const metadata: Metadata = {
  title: "Masajes Tantra Providencia VIP | TantraProvidencia.cl",
  description:
    "Masajes tantra premium en Providencia y Las Condes. Atención VIP, discreta y exclusiva.",
  keywords:
    "masajes tantra providencia, masajes eroticos santiago, tantra vip chile, escorts providencia",

  verification: {
    google: "eVUaLhBGEfXKOVguPiLhZgqamacJ6v4vYseIimMQnBk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}