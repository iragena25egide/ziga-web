import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zigga.io"),
  title: "Ziga — Complete Commerce, POS & Payment Ecosystem for Africa",
  description:
    "Ziga is the unified operating platform for modern African retail. Powering retail stores with Ziga POS (offline registers & thermal fiscal receipts) and Ziga Pay (MoMo Pay & digital checkout).",
  keywords: [
    "Ziga",
    "Ziga POS",
    "Ziga Pay",
    "zigga.io",
    "pos.zigga.io",
    "Retail Point of Sale Rwanda",
    "MoMo Pay integration Kigali",
    "Offline POS desktop software",
    "Thermal receipt printer Rwanda",
    "Inventory and debt book software",
  ],
  authors: [{ name: "Ziga Technologies" }],
  creator: "Ziga Technologies",
  publisher: "Ziga Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://zigga.io",
    siteName: "Ziga",
    title: "Ziga — Complete Commerce, POS & Payment Ecosystem",
    description:
      "Run your retail stores and transactions with Ziga POS and Ziga Pay. Fast offline registers, instant thermal receipts, and mobile money checkouts.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Ziga Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ziga — Retail, POS & Payments",
    description: "Manage sales, stock, and payments with Ziga POS & Ziga Pay.",
    images: ["/favicon.png"],
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
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 selection:bg-[#1b5ebe] selection:text-white">
        {children}
      </body>
    </html>
  );
}
