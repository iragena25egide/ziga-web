"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppMockupFrame from "@/components/AppMockupFrame";
import {
  ArrowRight,
  Download,
  Laptop,
  Globe,
  WifiOff,
  Printer,
  ScanBarcode,
  ShieldCheck,
  Check,
  CreditCard,
  Users,
  Building2,
  TrendingUp,
  Sparkles,
  HelpCircle,
  Play,
  Star,
  CheckCircle2,
  Zap,
  BarChart3,
  Layers,
} from "lucide-react";
import AOS from "aos";

export default function HomePage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeSolution, setActiveSolution] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const solutions = [
    {
      title: "Sell & Stock, Settled.",
      subtitle: "Checkout, inventory, and profit — finally in one flow.",
      tag: "Point of Sale",
      desc: "Rapid barcode scanning, instant MTN MoMo and Airtel Money QR codes, and automatic live inventory reduction with thermal printing.",
      accent: "from-blue-600 to-cyan-500",
      cta: "Explore Register",
    },
    {
      title: "Zero-Downtime Offline.",
      subtitle: "Never let fiber or network drops stop your cashiers.",
      tag: "Offline Engine",
      desc: "Continue issuing paper receipts completely disconnected. Background queue automatically reconciles records once internet restores.",
      accent: "from-emerald-500 to-teal-600",
      cta: "View Offline Mode",
    },
    {
      title: "Credit & Debt Aging.",
      subtitle: "Track client loans without messy paper notebooks.",
      tag: "Debt Book",
      desc: "Record customer advances, partial repayments, and overdue alerts so you always protect your store's working capital.",
      accent: "from-amber-500 to-orange-600",
      cta: "Manage Debts",
    },
    {
      title: "Multi-Store Isolation.",
      subtitle: "Connect 1 to 50 retail locations seamlessly.",
      tag: "Multi-Branch",
      desc: "Inter-branch warehouse transfers, consolidated profit reporting, and isolated cashier access roles per location.",
      accent: "from-violet-600 to-purple-700",
      cta: "Explore Branches",
    },
  ];

  const faqs = [
    {
      q: "How does the free trial work?",
      a: "You get 1 month completely free on our Starter plan — no credit card or advance fee required. You can test real sales, barcodes, and thermal receipts, then decide to stay or upgrade.",
    },
    {
      q: "Do I need an active internet connection to use Ziga POS?",
      a: "No! The Ziga POS Desktop application (.exe / .dmg) operates completely offline. Your cashiers can scan products and print receipts during network outages, and the system syncs to pos.ziga.io once reconnected.",
    },
    {
      q: "Which mobile money and payment methods are supported?",
      a: "Ziga supports direct MTN MoMo Pay merchant codes, Airtel Money, cash drawers, and bank transfers with instant reference number logging.",
    },
    {
      q: "Can I connect my existing thermal receipt printer?",
      a: "Yes. Ziga POS has native driver support for standard ESC/POS USB, Bluetooth, and Network thermal printers (both 58mm and 80mm rolls) like Epson, Xprinter, Rongta, and Bixolon.",
    },
    {
      q: "Can I manage multiple branches or retail shops?",
      a: "Yes. Ziga includes strict multi-tenant isolation. A business owner can manage downtown retail, supermarket depots, and regional kiosks from one consolidated dashboard.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      {/* ────────────────── 1. HERO SECTION WITH VIBRANT GETWAVE ACCENTS ────────────────── */}
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 px-4 sm:px-6 bg-[#0a1931] text-white overflow-hidden">
        {/* Dot pattern overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern-navy opacity-30" />

        {/* Ambient colored lighting orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* Tag Badge with Colorful Shimmer */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/20 to-purple-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Next-Gen Retail & POS Operating System</span>
            </div>

            {/* Headline with Rich Gradient */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-6"
            >
              Manage your store.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                In one vibrant flow.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Track sales, stock, debts, and expenses with lightning speed.
              Featuring offline desktop registers, instant fiscal thermal receipts, and real-time cloud multi-branch sync.
            </p>

            {/* Tactile Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center justify-center gap-2 text-sm font-bold h-12 px-6 rounded-xl text-slate-900 group"
              >
                <span>Start 1-Month Free Trial</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="btn-tactile-primary inline-flex items-center justify-center gap-2 text-sm font-bold h-12 px-6 rounded-xl text-white"
              >
                <span>See Pricing Plans</span>
              </a>
            </div>

            {/* Trust Badges with Color Accents */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-300"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Offline-first desktop registers
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Thermal ESC/POS printing (58/80mm)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> MTN MoMo & RRA EBM ready
              </span>
            </div>
          </div>
        </div>

        {/* Floating Mockup Preview Container */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 px-2 relative z-10">
          <AppMockupFrame />
        </div>

        {/* ── GETWAVE SVG DIVIDER (Top Section to White Content) ── */}
        <div className="w-full overflow-hidden leading-none mt-12 -mb-1">
          <svg
            className="relative block w-full h-[60px] sm:h-[90px] md:h-[130px]"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ────────────────── 2. SOLUTIONS & WORKFLOW CAROUSEL ────────────────── */}
      <section id="solutions" className="py-16 md:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Solutions & Workflows
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              One platform,<br />
              <span className="text-blue-600">multiple workflows</span>
            </h2>
          </div>

          {/* Interactive Workflow Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Interactive Selection List */}
            <div className="lg:col-span-5 space-y-3">
              {solutions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSolution(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    activeSolution === idx
                      ? "bg-gradient-to-r from-blue-50/80 to-cyan-50/50 border-blue-500 shadow-md shadow-blue-500/10"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600">
                      {item.tag}
                    </span>
                    {activeSolution === idx && (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Feature Showcase Card with Colorful Ambient Gradients */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-[#0a1931] via-[#0d2244] to-[#08152c] text-white p-8 sm:p-12 shadow-2xl min-h-[400px] flex flex-col justify-between">
                {/* Glowing decorative gradient corner */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-500/15 border border-cyan-400/30 uppercase tracking-wider mb-3">
                    {solutions[activeSolution].tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-cyan-100/90 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
                    {solutions[activeSolution].desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Cloud & Offline Desktop Sync</p>
                      <p className="text-[11px] text-cyan-200">Active at pos.ziga.io</p>
                    </div>
                  </div>

                  <a
                    href="https://pos.ziga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-tactile-secondary inline-flex items-center gap-2 h-11 px-5 rounded-xl text-xs font-bold shadow-sm"
                  >
                    <span>{solutions[activeSolution].cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GETWAVE SVG TRANSITION (White to Gray Section) ── */}
      <div className="w-full overflow-hidden leading-none -mb-1 rotate-180">
        <svg
          className="relative block w-full h-[50px] sm:h-[80px]"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ────────────────── 3. TESTIMONIALS & MERCHANT VOICES ────────────────── */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Merchant Voices
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Shops that run on Ziga
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Shop owners and supermarket managers across Kigali, Musanze, and Huye manage their daily inventory with Ziga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We reconcile daily cashier sales with physical stock in minutes. Before Ziga, end-of-day closing took us almost an hour.",
                name: "Aline Mukamana",
                role: "Supermarket Manager",
                shop: "Kigali Central Groceries",
                city: "Kigali",
                color: "border-blue-500",
              },
              {
                quote: "Customer debt follow-up became effortless because every credit balance is logged. It improved our cash flow and cut losses.",
                name: "Eric Ndayisaba",
                role: "Store Owner",
                shop: "Ndayisaba Hardware Depot",
                city: "Musanze",
                color: "border-cyan-500",
              },
              {
                quote: "The thermal printer support and offline mode saved us when fiber dropped during rush hour. Not a single sale was lost.",
                name: "Clarisse Uwimana",
                role: "Retail Director",
                shop: "Fashion Hub Rwanda",
                city: "Huye",
                color: "border-emerald-500",
              },
            ].map((voice, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="h-5 w-5 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm"
                      >
                        <Star className="w-3 h-3 fill-white text-white" />
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed font-medium">
                    "{voice.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <p className="font-bold text-sm text-slate-900">{voice.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {voice.role}, {voice.shop} •{" "}
                    <span className="font-bold text-blue-600">{voice.city}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 4. INTERACTIVE DEMO BANNER WITH GETWAVE CURVES ────────────────── */}
      <section id="demo" className="relative py-24 px-4 sm:px-6 bg-[#0a1931] text-white overflow-hidden">
        {/* Subtle background wave effect */}
        <div className="absolute inset-0 dot-pattern-navy opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold font-mono text-cyan-300 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/25">
              Live Walkthrough
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 leading-tight">
              See Ziga in action
            </h2>
            <p className="mt-3 text-cyan-100 text-sm sm:text-base">
              Under 2 minutes • Real cashier counter, barcode scanner & receipt printing
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md shadow-2xl p-8 sm:p-14 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-300 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-6 hover:scale-105 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to test drive Ziga POS?</h3>
            <p className="text-xs sm:text-sm text-cyan-200 max-w-md mb-6">
              Launch the live interactive cloud app or download the offline desktop register package.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center gap-2 h-11 px-6 rounded-xl text-xs font-bold"
              >
                <span>Open pos.ziga.io</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GETWAVE SVG DIVIDER (Navy to Light Pricing) ── */}
      <div className="w-full overflow-hidden leading-none -mb-1 bg-[#0a1931]">
        <svg
          className="relative block w-full h-[60px] sm:h-[90px]"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40L80,53.3C160,67,320,93,480,93.3C640,93,800,67,960,53.3C1120,40,1280,40,1360,40L1440,40L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ────────────────── 5. PRICING SECTION ────────────────── */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Pricing Plans
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mt-3">
              Timely, transparent pricing for your business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              No hidden fees, hardware lock-in, or percentage cuts from your daily revenue.
            </p>

            {/* Billing Toggle with Colored Badge */}
            <div className="inline-flex items-center rounded-full bg-white p-1 border border-slate-300 shadow-sm mt-8">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
                  billingCycle === "monthly" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-colors inline-flex items-center gap-1.5 ${
                  billingCycle === "annual" ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  -15% OFF
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Plan 1: Starter */}
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                  STARTER
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Single Shop</h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">Organize your counter and inventory</p>

                <div className="text-3xl font-extrabold text-slate-900 font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 8,800" : "RWF 7,480"}
                  <span className="text-sm font-normal text-slate-500">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-slate-600">
                  {[
                    "1 Active Cashier Register",
                    "Full Inventory Management",
                    "Expense & Debt Tracking",
                    "Daily Sales Reports",
                    "Thermal Receipt Formatting",
                    "Web Platform Access (pos.ziga.io)",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary w-full py-3 rounded-xl text-xs font-bold text-center"
              >
                Try 1 Month Free
              </a>
            </div>

            {/* Plan 2: Pro Commercial (Highlight with Gradient Border) */}
            <div className="relative rounded-3xl bg-[#0a1931] text-white p-8 pt-10 shadow-2xl flex flex-col justify-between border-2 border-blue-500 scale-102">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-1 text-[11px] font-black tracking-wider text-[#0a1931] uppercase shadow-md">
                MOST POPULAR
              </span>

              <div>
                <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider font-mono">
                  COMMERCIAL
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Pro Retail</h3>
                <p className="text-xs text-cyan-200 mt-1 mb-6">For busy stores, supermarkets & retail counters</p>

                <div className="text-3xl font-extrabold text-white font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 18,500" : "RWF 15,700"}
                  <span className="text-sm font-normal text-cyan-200">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-cyan-100">
                  {[
                    "Everything in Single Shop",
                    "Full Desktop App (.exe & .dmg)",
                    "Zero-Downtime Offline Engine",
                    "Hardware Barcode Scanner Listener",
                    "Universal ESC/POS Printer Drivers",
                    "Cashier Shifts & Closing Z-Reports",
                    "Automatic Cloud Reconciliation",
                    "24/7 Super Admin Live Chat Support",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary w-full py-3.5 rounded-xl text-xs font-bold text-center shadow-lg"
              >
                Start Pro Commercial
              </a>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider font-mono">
                  ENTERPRISE
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">Multi-Branch Chain</h3>
                <p className="text-xs text-slate-500 mt-1 mb-6">Multi-location retail & distributor networks</p>

                <div className="text-3xl font-extrabold text-slate-900 font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 40,000" : "RWF 34,000"}
                  <span className="text-sm font-normal text-slate-500">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-slate-600">
                  {[
                    "Everything in Pro Retail",
                    "Inter-Branch Stock Transfers",
                    "Consolidated Head-Office Accounting",
                    "RRA EBM Custom Fiscal Setup",
                    "MoMo USSD Automated Push Gateway",
                    "Dedicated Account Lead & Onsite Training",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:support@ziga.io"
                className="btn-tactile-secondary w-full py-3 rounded-xl text-xs font-bold text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. FAQ ACCORDION ────────────────── */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Questions before you start?
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Here is what retail owners commonly ask before moving to Ziga POS.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-sm text-slate-900 pr-4">{faq.q}</span>
                  <span className="text-lg font-bold text-blue-600">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 7. FINAL DOWNLOAD CTA BANNER WITH GETWAVE CURVES ────────────────── */}
      <section id="download" className="py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#0a1931] via-[#0e274f] to-[#0a1931] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-blue-500/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
              Launch Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4 leading-tight">
              Ready to modernize your retail store?
            </h2>
            <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed mb-8">
              Join retail businesses across Rwanda running their sales, inventory, and fiscal receipts with Ziga POS.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary inline-flex items-center justify-center gap-2 text-sm font-bold h-12 px-6 rounded-xl text-white shadow-lg"
              >
                <span>Launch POS Web App (pos.ziga.io)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center justify-center gap-2 text-sm font-bold h-12 px-6 rounded-xl text-slate-900"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Download Desktop Installer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
