"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppMockupFrame from "@/components/AppMockupFrame";
import ZigaLogo from "@/components/ZigaLogo";
import {
  Sparkles,
  ArrowRight,
  Download,
  Laptop,
  Globe,
  WifiOff,
  Printer,
  ScanBarcode,
  ShieldCheck,
  CreditCard,
  Users,
  CheckCircle2,
  Building2,
  BarChart3,
  Layers,
  Zap,
} from "lucide-react";
import AOS from "aos";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#060d1a] text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Futuristic Ambient Backdrop Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#1b5ebe]/25 via-[#00f2fe]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#1b5ebe]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Release Tag */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Next-Generation Retail & POS Ecosystem</span>
          </div>

          {/* Main Headline */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white mb-6"
          >
            The Operating System for Modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#1b5ebe]">
              African Retail
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Manage supermarkets, retail chains, and independent stores with zero friction.
            Featuring offline-ready cashier terminals, instant thermal fiscal receipts, customer credit tracking, and multi-branch cloud control.
          </p>

          {/* CTA Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span>Launch POS Portal (pos.ziga.io)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#download"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0b1a30] hover:bg-[#122544] text-white font-bold text-sm border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-3"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Desktop App (.exe / .dmg)</span>
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 max-w-4xl mx-auto text-center"
          >
            {[
              { val: "99.99%", label: "Offline Uptime Guarantee" },
              { val: "< 1.5s", label: "Thermal Receipt Checkout" },
              { val: "Multi-Store", label: "Company Tenant Isolation" },
              { val: "RRA EBM", label: "Tax Compliance Ready" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                  {stat.val}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Dual Mockup Showcase */}
        <div className="mt-16 md:mt-24 px-2">
          <AppMockupFrame />
        </div>
      </section>

      {/* ────────────────── 2. LIVE TRANSACTION TICKER ────────────────── */}
      <section className="py-6 border-y border-white/8 bg-[#040813] overflow-hidden">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee select-none">
          {[
            "⚡ Inyange Dairy: 54,000 RWF via MoMo Pay",
            "🛡️ RRA EBM Fiscalized Receipt #8902 Verified",
            "🚀 Kigali Central Hub: Terminal 04 Synced",
            "🛒 Supermarket Cart: 18 items processed in 1.2s",
            "📊 Monthly Multi-Branch Sales Aggregated: 14.8M RWF",
            "🔒 100% Tenant Isolation Guarantee",
          ].map((text, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{text}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ────────────────── 3. CORE ARCHITECTURE FEATURES ────────────────── */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            ENGINEERED FOR SCALE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Everything your store needs. Built right into the OS.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            From the cashier counter to the CFO dashboard, Ziga connects your physical points of sale to cloud intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: WifiOff,
              title: "Zero-Downtime Offline Engine",
              desc: "Never stop selling when fiber or 4G drops. Cashiers can scan, ring up sales, and issue thermal receipts completely offline. Automatic reconciliation when internet returns.",
              grad: "from-blue-600 to-cyan-500",
            },
            {
              icon: Printer,
              title: "Universal Thermal Printing",
              desc: "Native support for USB, Bluetooth, and Network ESC/POS thermal printers (58mm and 80mm). Complete with company TIN, QR codes, and fiscal receipt formatting.",
              grad: "from-cyan-500 to-teal-400",
            },
            {
              icon: Building2,
              title: "Multi-Store Tenant Isolation",
              desc: "Run 1 shop or 50 branches. Each company workspace maintains encrypted data isolation, customized cashier roles, product catalogs, and consolidated balance sheets.",
              grad: "from-indigo-600 to-blue-500",
            },
            {
              icon: CreditCard,
              title: "Customer Credit & Loan Books",
              desc: "Track client advances, informal loans, and partial payments with real-time debt aging. Keep customers loyal without losing track of receivables.",
              grad: "from-emerald-500 to-cyan-500",
            },
            {
              icon: ScanBarcode,
              title: "Rapid Barcode & Inventory Tracking",
              desc: "Hardware listener auto-detects handheld laser scanners. Stock levels decrement dynamically with automatic low-stock notifications before shelves go empty.",
              grad: "from-amber-500 to-orange-500",
            },
            {
              icon: ShieldCheck,
              title: "Super Admin Command Hub",
              desc: "Centralized approval desk for store onboarding, real-time live support desk via Socket.IO, and platform-wide monitoring of transaction volume.",
              grad: "from-purple-600 to-pink-500",
            },
          ].map((feat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-8 rounded-3xl bg-[#0b172c] border border-white/10 hover:border-cyan-400/40 transition-all ziga-card-hover flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.grad} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-bold text-cyan-400">
                <span>Enterprise Grade</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── 4. DESKTOP APP & HARDWARE INTEGRATION ────────────────── */}
      <section id="hardware" className="py-20 px-6 bg-[#040813] border-y border-white/8 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              PLUG & PLAY HARDWARE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-6 tracking-tight">
              Hardware Compatibility out of the box.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              No expensive proprietary registers. Ziga POS runs on your existing PCs, Macs, POS tablets, and connects directly to standard thermal printers and barcode scanners.
            </p>

            <div className="space-y-4">
              {[
                { title: "Standard ESC/POS Printers", desc: "Epson, Xprinter, Rongta, Bixolon (USB, Bluetooth, Ethernet)" },
                { title: "Laser & 2D Barcode Scanners", desc: "Zebra, Honeywell, Datalogic, or plug-and-play USB scanners" },
                { title: "Electronic Cash Drawers", desc: "RJ11/RJ12 drawer kick triggers on checkout completion" },
                { title: "Customer-Facing Displays", desc: "Secondary screen mirroring total amount and MoMo QR codes" },
              ].map((hw, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#09152b] border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{hw.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{hw.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Hardware Terminal Card */}
          <div data-aos="fade-left" className="p-8 rounded-3xl bg-[#0b172c] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <Laptop className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Ziga POS Desktop App</h3>
                <p className="text-xs text-slate-400 font-mono">Available for Windows (.exe) & macOS (.dmg)</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-[#071120] border border-white/5">
                <span className="font-bold text-cyan-400">Offline-First Speed</span>
                <p className="mt-1 text-slate-400">Local SQLite & IndexedDB caching ensures zero lag even under heavy cashier peak hours.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#071120] border border-white/5">
                <span className="font-bold text-emerald-400">Cashier Lockdown Mode</span>
                <p className="mt-1 text-slate-400">Cashiers can only view their register. Profit margins and store metrics remain securely hidden.</p>
              </div>

              <div id="download" className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://pos.ziga.io"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white font-bold text-center hover:scale-102 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for Windows</span>
                </a>

                <a
                  href="https://pos.ziga.io"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/10 text-white font-bold text-center hover:bg-white/15 transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <Download className="w-4 h-4" />
                  <span>Download for macOS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 5. PRICING TIERS ────────────────── */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            SIMPLE, TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Start free. Upgrade as you scale.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Predictable plans without hidden transaction fees or surprise hardware lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter Retail",
              price: "Free",
              sub: "For single store popups & solopreneurs",
              badge: "NO CREDIT CARD NEEDED",
              feats: [
                "1 Active Cashier Register",
                "Up to 150 Products & Catalog",
                "Thermal Receipt Generator",
                "Basic Sales Reporting",
                "Web Portal Access",
              ],
              cta: "Get Started Free",
              highlight: false,
            },
            {
              name: "Pro Commercial",
              price: "15,000 RWF",
              sub: "Per month • For growing retailers & supermarkets",
              badge: "MOST POPULAR",
              feats: [
                "Unlimited Cashier Registers",
                "Unlimited Products & Barcodes",
                "Full Desktop App (.exe & .dmg)",
                "Complete Offline Engine",
                "Loan & Credit Aging Book",
                "Thermal ESC/POS Hardware Drivers",
                "24/7 Super Admin Live Chat Support",
              ],
              cta: "Launch Pro Trial",
              highlight: true,
            },
            {
              name: "Enterprise Multi-Branch",
              price: "Custom",
              sub: "For retail chains & franchise distributors",
              badge: "MULTI-STORE",
              feats: [
                "Multi-Branch Central Inventory",
                "RRA EBM Custom Fiscalization",
                "Custom MoMo USSD Push Gateway",
                "Dedicated Server & Priority SLA",
                "Onsite Hardware Setup & Training",
              ],
              cta: "Talk to Sales",
              highlight: false,
            },
          ].map((tier, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`p-8 rounded-3xl flex flex-col justify-between relative transition-all ${
                tier.highlight
                  ? "bg-[#0c1c38] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105"
                  : "bg-[#0b172c] border border-white/10"
              }`}
            >
              <div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-white/10 text-cyan-300">
                  {tier.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-4">{tier.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{tier.sub}</p>

                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white font-mono">{tier.price}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {tier.feats.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="https://pos.ziga.io"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    tier.highlight
                      ? "bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white shadow-lg shadow-cyan-500/30 hover:scale-102"
                      : "bg-white/10 hover:bg-white/15 text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── 6. FINAL BOTTOM CTA BANNER ────────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full mb-16">
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-r from-[#0b1a35] via-[#102a54] to-[#0b1a35] border border-cyan-400/30 shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Ready to modernize your retail store?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Join retail businesses across Rwanda running their sales, inventory, and receipts with Ziga POS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Open Ziga POS (pos.ziga.io)</span>
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
