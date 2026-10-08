"use client";

import React, { useState } from "react";
import {
  Smartphone,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Wifi,
} from "lucide-react";

export default function ZigaPayPhoneShowcase() {
  const [activePayment, setActivePayment] = useState<"momo" | "airtel">("momo");

  return (
    <div className="w-full max-w-5xl mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Realistic iPhone Physical Device Hardware Frame */}
        <div className="lg:col-span-5 flex justify-center">
          {/* Outer Phone Frame with Titanium Outer Rim & Buttons */}
          <div className="relative">
            {/* Left Side Hardware Buttons: Mute Switch & Volume Up/Down */}
            <div className="absolute -left-[5px] top-28 w-[3px] h-7 bg-[#464850] rounded-l-sm" />
            <div className="absolute -left-[5px] top-40 w-[3px] h-12 bg-[#464850] rounded-l-sm" />
            <div className="absolute -left-[5px] top-56 w-[3px] h-12 bg-[#464850] rounded-l-sm" />
            {/* Right Side Power Button */}
            <div className="absolute -right-[5px] top-36 w-[3px] h-16 bg-[#464850] rounded-r-sm" />

            {/* Titanium Body Outer Chassis */}
            <div className="relative w-[285px] sm:w-[310px] rounded-[50px] bg-[#1a1c22] p-3 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4)] border border-[#3c404b] ring-1 ring-white/10">
              {/* Inner Black Bezel Rim */}
              <div className="relative rounded-[42px] overflow-hidden bg-white text-slate-900 min-h-[560px] flex flex-col justify-between pt-3 pb-3 px-4 border border-slate-900 shadow-inner">
                {/* ── DYNAMIC ISLAND & STATUS BAR ── */}
                <div className="relative z-30 pt-1 pb-3">
                  {/* Status Bar Clock & Icons */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-900 px-3 pt-1">
                    <span className="font-medium tracking-tight">9:41</span>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-800">
                      <span className="font-mono text-[9px] font-bold">5G</span>
                      <Wifi className="w-3 h-3 text-slate-800" />
                      <div className="w-5 h-2.5 rounded-sm border border-slate-800 p-0.5 flex items-center">
                        <div className="h-full w-full bg-slate-900 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Centered Dynamic Island Hardware Pill */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#000000] rounded-full flex items-center justify-between px-3 shadow-md">
                    {/* Front Camera Lens */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111624] border border-[#232a3d] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#0a1b2a]" />
                    </div>
                    {/* Activity Indicator LED */}
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  </div>
                </div>

                {/* ── ZIGA PAY APP SURFACE ── */}
                <div className="pt-2">
                  {/* Ziga Pay Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#1b5ebe] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        Z
                      </div>
                      <div>
                        <span className="font-bold text-sm text-slate-900 block leading-tight">Ziga Pay</span>
                        <span className="text-[9px] text-slate-500 font-mono">Rwanda Gateway</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Live Cart Sync
                    </span>
                  </div>

                  {/* Store Order Bill Box */}
                  <div className="mt-4 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                      Counter Checkout Bill
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                      Kigali Supermarket Depot
                    </h4>
                    <div className="my-2.5 py-2.5 px-3 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
                      <span className="text-[10px] text-slate-500 block">Total Due</span>
                      <p className="text-2xl font-bold font-mono text-slate-950">
                        RWF 8,100
                      </p>
                    </div>
                  </div>

                  {/* QR Code Container with High-Res Frame */}
                  <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center mb-3">
                    <div className="w-32 h-32 bg-[#0a192f] rounded-xl p-2.5 flex items-center justify-center relative shadow-sm">
                      {/* Realistic Styled Vector QR Pattern */}
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                        <rect x="8" y="8" width="26" height="26" rx="4" fill="#ffffff" />
                        <rect x="13" y="13" width="16" height="16" rx="2" fill="#0a192f" />
                        <rect x="66" y="8" width="26" height="26" rx="4" fill="#ffffff" />
                        <rect x="71" y="13" width="16" height="16" rx="2" fill="#0a192f" />
                        <rect x="8" y="66" width="26" height="26" rx="4" fill="#ffffff" />
                        <rect x="13" y="71" width="16" height="16" rx="2" fill="#0a192f" />
                        {/* Micro QR alignment squares */}
                        <rect x="42" y="14" width="16" height="8" rx="1" fill="#ffffff" />
                        <rect x="42" y="78" width="16" height="8" rx="1" fill="#ffffff" />
                        <rect x="68" y="44" width="8" height="16" rx="1" fill="#ffffff" />
                        <rect x="14" y="44" width="8" height="16" rx="1" fill="#ffffff" />
                        <rect x="44" y="32" width="12" height="6" fill="#ffffff" />
                        <rect x="44" y="62" width="12" height="6" fill="#ffffff" />
                        {/* Central Z Badge */}
                        <circle cx="50" cy="50" r="11" fill="#1b5ebe" />
                        <text x="50" y="54.5" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Z</text>
                      </svg>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-2 font-mono">
                      Scan with MoMo App or Phone Camera
                    </span>
                  </div>

                  {/* Telecom Payment Network Switcher */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <button
                      onClick={() => setActivePayment("momo")}
                      className={`py-2 px-2 rounded-xl border text-center transition-all ${
                        activePayment === "momo"
                          ? "bg-amber-50 border-amber-400 text-amber-950 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      MTN MoMo Pay
                    </button>
                    <button
                      onClick={() => setActivePayment("airtel")}
                      className={`py-2 px-2 rounded-xl border text-center transition-all ${
                        activePayment === "airtel"
                          ? "bg-red-50 border-red-400 text-red-950 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      Airtel Money
                    </button>
                  </div>
                </div>

                {/* Phone Bottom Home Bar & CTA */}
                <div className="pt-2">
                  <a
                    href="https://pos.ziga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ziga-primary w-full h-10 text-xs font-semibold justify-center rounded-xl"
                  >
                    Confirm & Complete Checkout
                  </a>
                  {/* iOS Home Indicator Bar */}
                  <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Designed Ziga Pay Merchant Cards & Details */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#1b5ebe] font-mono">
              DIGITAL CHECKOUT & FRAUD PREVENTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Direct Mobile Money checkout without fake SMS risks
            </h3>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              In Rwanda, retail stores lose millions to customer fake payment SMS messages. Ziga Pay communicates directly with telecom gateways to authenticate transactions before receipts print.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[
              {
                title: "Instant QR Generation",
                desc: "Displays dynamic MoMo QR code on customer-facing screens or receipts.",
                icon: QrCode,
              },
              {
                title: "Automated Reference Matching",
                desc: "Matches payment callbacks directly to the open POS cart in real-time.",
                icon: ShieldCheck,
              },
              {
                title: "Unified Daily Reconcile",
                desc: "Consolidates MoMo Pay settlements and cash drawer float into one report.",
                icon: TrendingUp,
              },
              {
                title: "Zero Terminal Rent",
                desc: "Works on standard smartphones and existing POS computers without POS rental fees.",
                icon: CreditCard,
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#1b5ebe] flex items-center justify-center mb-2.5">
                    <card.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{card.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-ziga-primary h-11 px-5 text-xs gap-2"
            >
              <span>Connect Ziga Pay to Your Store</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
