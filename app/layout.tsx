import type { Metadata } from "next";
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

  export const metadata: Metadata = {
  title: "Masajes Tantra Providencia VIP | TantraProvidencia.cl",
  description:
    "Masajes tantra premium en Providencia y Las Condes. Atención VIP, discreta y exclusiva.",
  keywords:
    "masajes tantra providencia, masajes eroticos santiago, tantra vip chile, escorts providencia",

  verification: {
    google: 'eVUaLhBGEfXKOVguPiLhZgqamacJ6v4vYseIimMQnBk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
