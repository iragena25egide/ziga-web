import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ziga - Modern POS, Inventory & Business Platform for Rwanda & Africa",
  description:
    "Ziga helps shops, retail stores, and supermarkets in Rwanda and Africa track sales, stock, debts, and expenses in one simple, fast dashboard with offline desktop registers and thermal fiscal receipts.",
  keywords: [
    "Ziga",
    "Ziga POS",
    "ziga.io",
    "pos.ziga.io",
    "Point of Sale Rwanda",
    "Retail Management System Kigali",
    "Offline POS software",
    "Thermal receipt printing Rwanda",
    "MoMo Pay POS",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable}`}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-[#1b5ebe] selection:text-white">
        {children}
      </body>
    </html>
  );
}
