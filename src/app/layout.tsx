import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ziga — The Operating System for Modern Retail & Commerce",
  description:
    "Empowering African retail, supermarkets, and multi-branch enterprises with offline-ready POS terminals, automated thermal receipts, and real-time cloud analytics.",
  keywords: [
    "Ziga",
    "Ziga POS",
    "ziga.io",
    "pos.ziga.io",
    "Point of Sale Rwanda",
    "Offline POS",
    "Retail Management System",
    "Thermal Receipt Printer",
  ],
  authors: [{ name: "Ziga Technologies" }],
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className="font-sans antialiased bg-[#060d1a] text-slate-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
