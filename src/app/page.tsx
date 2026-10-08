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
      desc: "Fast barcode scan, instant MoMo QR codes, and automatic stock level decrementing with thermal printing.",
      cta: "Explore Register",
    },
    {
      title: "Zero-Downtime Offline.",
      subtitle: "Never let fiber or network drops stop your cashiers.",
      tag: "Offline Engine",
      desc: "Continue issuing paper receipts completely disconnected. Changes sync automatically when internet restores.",
      cta: "View Offline Mode",
    },
    {
      title: "Credit & Debt Aging.",
      subtitle: "Track client loans without messy paper notebooks.",
      tag: "Debt Book",
      desc: "Record customer advances, partial repayments, and overdue alerts so you always collect your money.",
      cta: "Manage Debts",
    },
    {
      title: "Multi-Store Isolation.",
      subtitle: "Connect 1 to 50 retail locations seamlessly.",
      tag: "Multi-Branch",
      desc: "Centralized warehouse transfers, unified profit reporting, and isolated cashier access roles per branch.",
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
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* ────────────────── 1. HIGURA-INSPIRED HERO BANNER ────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 bg-[#0b1d3a] text-white overflow-hidden rounded-b-[36px] sm:rounded-b-[48px]">
        {/* Dot Pattern Overlay */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern-navy opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            {/* Tag */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Modern Retail Operating System</span>
            </div>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6"
            >
              Manage your store.<br />
              <span className="text-[#38bdf8]">In one place.</span>
            </h1>

            {/* Subtext */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Track sales, stock, debts, and expenses with a faster workflow. Built specifically for shops, retail chains, and supermarkets in Rwanda and Africa.
            </p>

            {/* Tactile Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12"
            >
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center justify-center gap-2 text-sm font-semibold h-12 px-6 rounded-lg text-gray-900 group"
              >
                <span>Start free trial</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="btn-tactile-primary inline-flex items-center justify-center gap-2 text-sm font-semibold h-12 px-6 rounded-lg text-white"
              >
                <span>See pricing</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 text-xs text-blue-200"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" /> Offline-first desktop registers
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" /> Thermal ESC/POS printing
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" /> RRA EBM & MoMo Pay ready
              </span>
            </div>
          </div>
        </div>

        {/* Floating Mockup Preview Container */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 px-2">
          <AppMockupFrame />
        </div>
      </section>

      {/* ────────────────── 2. SOLUTIONS & WORKFLOW CAROUSEL ────────────────── */}
      <section id="solutions" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe]">
              Our Solutions
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              One platform,<br />multiple workflows
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
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    activeSolution === idx
                      ? "bg-blue-50/50 border-[#1b5ebe] shadow-sm"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1b5ebe]">
                      {item.tag}
                    </span>
                    {activeSolution === idx && (
                      <span className="w-2 h-2 rounded-full bg-[#1b5ebe]" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Feature Showcase Card */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-[#0b1d3a] text-white p-8 sm:p-12 shadow-xl min-h-[380px] flex flex-col justify-between">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern-navy opacity-20" />

                <div className="relative z-10">
                  <span className="text-xs font-mono font-bold text-[#38bdf8] uppercase tracking-wider">
                    {solutions[activeSolution].tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-blue-100/90 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
                    {solutions[activeSolution].desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#38bdf8]">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Full Cloud & Desktop Sync</p>
                      <p className="text-[11px] text-blue-200">Available at pos.ziga.io</p>
                    </div>
                  </div>

                  <a
                    href="https://pos.ziga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-tactile-secondary inline-flex items-center gap-2 h-10 px-5 rounded-lg text-xs font-bold"
                  >
                    <span>{solutions[activeSolution].cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 3. TESTIMONIALS & MERCHANT VOICES ────────────────── */}
      <section className="py-20 md:py-24 px-4 sm:px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe]">
              Merchant Voices
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Shops that run on Ziga
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Shop owners and supermarket managers across Kigali, Musanze, and Huye manage their stock daily on Ziga.
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
              },
              {
                quote: "Customer debt follow-up became effortless because every credit balance is logged. It improved our cash flow and cut losses.",
                name: "Eric Ndayisaba",
                role: "Store Owner",
                shop: "Ndayisaba Hardware Depot",
                city: "Musanze",
              },
              {
                quote: "The thermal printer support and offline mode saved us when fiber dropped during rush hour. Not a single sale was lost.",
                name: "Clarisse Uwimana",
                role: "Retail Director",
                shop: "Fashion Hub Rwanda",
                city: "Huye",
              },
            ].map((voice, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="h-5 w-5 rounded bg-[#1b5ebe] flex items-center justify-center text-white"
                      >
                        <Star className="w-3 h-3 fill-white text-white" />
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">
                    "{voice.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <p className="font-bold text-sm text-gray-900">{voice.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {voice.role}, {voice.shop} • <span className="font-semibold text-[#1b5ebe]">{voice.city}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 4. INTERACTIVE DEMO BANNER ────────────────── */}
      <section id="demo" className="py-20 md:py-24 px-4 sm:px-6 bg-[#0b1d3a] text-white relative">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern-navy opacity-20" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              See Ziga in action
            </h2>
            <p className="mt-3 text-blue-100 text-sm sm:text-base">
              Under 2 minutes • Real store counter & cashier workflow
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/20 bg-black/40 shadow-2xl p-8 sm:p-16 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-white text-[#0b1d3a] flex items-center justify-center shadow-xl mb-6 hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to explore Ziga POS?</h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-md mb-6">
              Launch the live interactive web portal or download the desktop installer directly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center gap-2 h-11 px-6 rounded-lg text-xs font-bold"
              >
                <span>Open pos.ziga.io</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 5. TIMELY PRICING (HIGURA STYLE) ────────────────── */}
      <section id="pricing" className="py-24 px-4 sm:px-6 bg-[#f8fafc] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Timely and transparent pricing for your Business
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              No hidden hardware surcharges or transaction cuts. Simple predictable monthly plans.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center rounded-full bg-white p-1 border border-gray-300 shadow-sm mt-8">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
                  billingCycle === "monthly" ? "bg-[#0b1d3a] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-colors inline-flex items-center gap-1.5 ${
                  billingCycle === "annual" ? "bg-[#0b1d3a] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                  -15%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Plan 1: Starter */}
            <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-mono">
                  STARTER
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Single Shop</h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">Organize your counter and inventory</p>

                <div className="text-3xl font-bold text-gray-900 font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 8,800" : "RWF 7,480"}
                  <span className="text-sm font-normal text-gray-500">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-gray-600">
                  {[
                    "1 Active Cashier Register",
                    "Full Inventory Management",
                    "Expense & Debt Tracking",
                    "Basic Daily Reports",
                    "Thermal Receipt Formatting",
                    "Web Platform Access (pos.ziga.io)",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1b5ebe] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary w-full py-3 rounded-lg text-xs font-semibold text-center"
              >
                Try 1 Month Free
              </a>
            </div>

            {/* Plan 2: Pro Commercial (Highlight) */}
            <div className="relative rounded-2xl bg-[#0b1d3a] text-white p-8 pt-10 shadow-xl flex flex-col justify-between border-2 border-[#1b5ebe]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#38bdf8] px-3.5 py-1 text-[10px] font-extrabold tracking-wider text-[#0b1d3a] uppercase shadow-sm">
                MOST POPULAR
              </span>

              <div>
                <span className="text-[11px] font-bold text-[#38bdf8] uppercase tracking-wider font-mono">
                  COMMERCIAL
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">Pro Retail</h3>
                <p className="text-xs text-blue-200 mt-1 mb-6">For busy shops, supermarkets & chains</p>

                <div className="text-3xl font-bold text-white font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 18,500" : "RWF 15,700"}
                  <span className="text-sm font-normal text-blue-200">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-blue-100">
                  {[
                    "Everything in Single Shop",
                    "Full Desktop App (.exe & .dmg)",
                    "Zero-Downtime Offline Engine",
                    "Hardware Barcode Scanner Listener",
                    "Universal ESC/POS Printer Drivers",
                    "Multi-User & Cashier Shift Tracking",
                    "Automatic Cloud Reconciliation",
                    "24/7 Super Admin Live Chat Support",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary w-full py-3 rounded-lg text-xs font-semibold text-center"
              >
                Start Pro Commercial
              </a>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-mono">
                  ENTERPRISE
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Multi-Branch Chain</h3>
                <p className="text-xs text-gray-500 mt-1 mb-6">Multi-location retail & distributor networks</p>

                <div className="text-3xl font-bold text-gray-900 font-mono mb-6">
                  {billingCycle === "monthly" ? "RWF 40,000" : "RWF 34,000"}
                  <span className="text-sm font-normal text-gray-500">/mo</span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-gray-600">
                  {[
                    "Everything in Pro Retail",
                    "Multi-Store Inter-Branch Stock Transfers",
                    "Centralized Consolidated Accounting",
                    "RRA EBM Custom Tax Compliance Setup",
                    "MoMo USSD Automated Push Gateway",
                    "Dedicated Account Lead & Staff Training",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1b5ebe] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:support@ziga.io"
                className="btn-tactile-secondary w-full py-3 rounded-lg text-xs font-semibold text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 6. FREQUENTLY ASKED QUESTIONS (HIGURA STYLE) ────────────────── */}
      <section id="faq" className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1b5ebe] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border border-blue-200">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Questions before you start?
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Here is what retail owners commonly ask before moving to Ziga.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-sm text-gray-900 pr-4">{faq.q}</span>
                  <span className="text-lg font-bold text-[#1b5ebe]">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 mb-3">Still have questions?</p>
            <a
              href="mailto:support@ziga.io"
              className="btn-tactile-secondary inline-flex items-center gap-2 text-xs font-semibold h-10 px-5 rounded-lg"
            >
              <span>Contact our Kigali Support Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────── 7. DOWNLOAD & FOOTER BANNER ────────────────── */}
      <section id="download" className="py-20 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0b1d3a] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 dot-pattern-navy opacity-20" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider font-mono">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
              Ready to modernize your retail store?
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-8">
              Join retail businesses across Rwanda running their sales, inventory, and fiscal receipts with Ziga POS.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary inline-flex items-center justify-center gap-2 text-sm font-semibold h-12 px-6 rounded-lg text-white"
              >
                <span>Launch POS Web App (pos.ziga.io)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center justify-center gap-2 text-sm font-semibold h-12 px-6 rounded-lg text-gray-900"
              >
                <Download className="w-4 h-4 text-gray-600" />
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
