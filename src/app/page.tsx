"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovingDashboardShowcase from "@/components/MovingDashboardShowcase";
import ClientCarousel from "@/components/ClientCarousel";
import {
  ArrowRight,
  Download,
  WifiOff,
  Printer,
  ScanBarcode,
  CreditCard,
  Building2,
  CheckCircle2,
  HelpCircle,
  Package,
} from "lucide-react";
import AOS from "aos";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      title: "Point of Sale Checkout",
      desc: "Fast barcode search, instant MTN MoMo and Airtel Money logging, and quick tender checkout for busy cashiers.",
      icon: ScanBarcode,
    },
    {
      title: "Zero-Downtime Offline Mode",
      desc: "Never stop ringing sales when local internet drops. Receipts print offline, then sync to the cloud automatically once restored.",
      icon: WifiOff,
    },
    {
      title: "Thermal Receipt Printing",
      desc: "Native driver support for 58mm and 80mm ESC/POS USB, Bluetooth, and Ethernet thermal printers with company TIN header.",
      icon: Printer,
    },
    {
      title: "Customer Credit & Debt Book",
      desc: "Record customer advances, partial repayments, and overdue balances directly at checkout to keep cash flow healthy.",
      icon: CreditCard,
    },
    {
      title: "Stock & Inventory Control",
      desc: "Inventory levels decrement in real-time as sales are made. Receive instant alerts when products reach reorder thresholds.",
      icon: Package,
    },
    {
      title: "Multi-Store Isolation",
      desc: "Manage multiple retail stores or warehouse branches under one account with strict tenant data security.",
      icon: Building2,
    },
  ];

  const faqs = [
    {
      q: "How does the free trial work?",
      a: "You get 1 month free to test the full system — no credit card or advance fee required. Test real sales, barcode scanners, and thermal receipts directly in your shop.",
    },
    {
      q: "Do I need internet to use Ziga POS?",
      a: "No. The Ziga POS Desktop application (.exe / .dmg) operates completely offline. Cashiers can continue selling and printing receipts without internet, and the system syncs once reconnected.",
    },
    {
      q: "Which mobile money and payment methods are supported?",
      a: "Ziga supports direct MTN MoMo Pay merchant codes, Airtel Money, cash drawers, and bank transfers with instant reference number logging.",
    },
    {
      q: "Can I connect my existing thermal receipt printer?",
      a: "Yes. Ziga POS has native driver support for standard ESC/POS USB, Bluetooth, and Network thermal printers (both 58mm and 80mm rolls) including Epson, Xprinter, Rongta, and Bixolon.",
    },
    {
      q: "Can I manage multiple branches or retail shops?",
      a: "Yes. A business owner can manage downtown retail, supermarket depots, and regional kiosks from one consolidated dashboard with separate cashier permissions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      {/* ────────────────── 1. HERO SECTION (Clean Solid Navy & Real Rotating Dashboard) ────────────────── */}
      <section className="relative pt-26 pb-0 md:pt-32 md:pb-0 px-4 sm:px-6 bg-[#0a192f] text-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mb-12">
            {/* Clean Tag */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span>Retail & POS Platform</span>
            </div>

            {/* Solid, Human-Crafted Headline - NO AI Gradients */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] text-white mb-6"
            >
              Manage your store.<br />
              <span className="text-[#38bdf8]">In one place.</span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Track sales, inventory, customer debts, and expenses with a faster workflow.
              Built for retail stores, supermarkets, and multi-branch shops in Rwanda.
            </p>

            {/* Human-Designed Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-ziga-primary h-12 px-6 text-sm gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-ziga-outline h-12 px-6 text-sm gap-2 text-slate-800"
              >
                <Download className="w-4 h-4 text-slate-600" />
                <span>Download Desktop App</span>
              </a>
            </div>

            {/* Clean Trust Indicators */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-700/60 text-xs text-slate-300"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Offline-first desktop registers
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Thermal ESC/POS printing (58/80mm)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> MTN MoMo & RRA EBM ready
              </span>
            </div>
          </div>

          {/* Real Moving Dashboard Showcase (2 Views) */}
          <div className="mt-8 relative z-20">
            <MovingDashboardShowcase />
          </div>
        </div>

        {/* ── GETWAVE SVG DIVIDER (Navy to White Content) ── */}
        <div className="w-full overflow-hidden leading-none mt-12 -mb-1">
          <svg
            className="relative block w-full h-[50px] sm:h-[80px] md:h-[110px]"
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ────────────────── 2. CORE FEATURES GRID ────────────────── */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe] font-mono">
              Core Capabilities
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Built for real retail operations
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Every feature is designed to reduce closing time, eliminate stock errors, and protect your profit margin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#1b5ebe] flex items-center justify-center mb-4">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 3. HARDWARE & DESKTOP SECTION ────────────────── */}
      <section id="hardware" className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe] font-mono">
              Hardware Compatibility
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Works with your existing POS hardware
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed mb-6">
              No need to buy expensive proprietary terminals. Ziga POS connects directly to standard thermal printers, USB handheld barcode scanners, and cash drawers.
            </p>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b5ebe]" /> Standard ESC/POS printers (Epson, Xprinter, Rongta, Bixolon)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b5ebe]" /> USB & Bluetooth handheld laser barcode scanners
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b5ebe]" /> Electronic cash drawers (RJ11/RJ12 auto-kick on sale)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b5ebe]" /> Windows 10/11 (.exe installer) and macOS (.dmg disk image)
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Desktop Application Installer</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Download the native desktop register application for offline checkout speed and instant printer linking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-ziga-primary h-11 px-5 text-xs flex-1 text-center"
              >
                Download for Windows
              </a>
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-ziga-outline h-11 px-5 text-xs flex-1 text-center"
              >
                Download for macOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 4. CLIENT TESTIMONIALS (CAROUSEL WITHOUT RAINBOW/AI EFFECTS) ────────────────── */}
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe] font-mono">
              Merchant Stories
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Shops that run on Ziga
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Feedback from retail store managers and hardware shop owners across Rwanda.
            </p>
          </div>

          {/* Clean Carousel with Only Name & Message */}
          <ClientCarousel />
        </div>
      </section>

      {/* ────────────────── 5. FAQ SECTION ────────────────── */}
      <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono">
              Help & Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Common questions before deploying Ziga POS in your shop.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-white border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 pr-4">{faq.q}</span>
                  <span className="text-sm font-bold text-[#1b5ebe]">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 6. FINAL BOTTOM CTA BANNER ────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto rounded-xl bg-[#0a192f] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Ready to manage your store with Ziga POS?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Create your company workspace today. Test sales, barcode scanning, and thermal printing with our 1-month free trial.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-ziga-primary h-11 px-6 text-sm font-semibold gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
