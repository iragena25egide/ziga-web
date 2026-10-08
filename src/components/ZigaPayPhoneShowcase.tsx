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
        {/* Left Side: Physical Phone Device Hardware Frame */}
        <div className="lg:col-span-5 flex justify-center">
          {/* Physical Smartphone Chassis */}
          <div className="relative w-[280px] sm:w-[300px] rounded-[44px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-700/80">
            {/* Phone Speaker & Dynamic Island / Camera Pill */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
            </div>

            {/* Phone Screen Glass */}
            <div className="rounded-[36px] overflow-hidden bg-white text-slate-900 min-h-[540px] flex flex-col justify-between pt-7 pb-4 px-4 border border-slate-200">
              {/* Phone Status Bar */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 px-2 mb-4">
                  <span>09:41</span>
                  <div className="flex items-center gap-1 text-[10px]">
                    <Wifi className="w-3 h-3" />
                    <span>5G</span>
                    <span className="font-mono">100%</span>
                  </div>
                </div>

                {/* Ziga Pay In-App Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded bg-[#1b5ebe] text-white flex items-center justify-center font-bold text-xs">
                      Z
                    </span>
                    <span className="font-bold text-sm text-slate-900">Ziga Pay</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Live Checkout
                  </span>
                </div>

                {/* Merchant & Cart Request */}
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                    Payment Request
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                    Kigali Supermarket Depot
                  </h4>
                  <div className="my-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-[11px] text-slate-500 block">Total Amount</span>
                    <p className="text-2xl font-bold font-mono text-slate-900">
                      RWF 8,100
                    </p>
                  </div>
                </div>

                {/* QR Code Container */}
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-inner flex flex-col items-center justify-center mb-3">
                  <div className="w-32 h-32 bg-slate-900 rounded-lg p-2 flex items-center justify-center relative">
                    {/* Simulated SVG QR Matrix */}
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                      <rect x="10" y="10" width="25" height="25" rx="3" fill="#ffffff" />
                      <rect x="15" y="15" width="15" height="15" fill="#0a192f" />
                      <rect x="65" y="10" width="25" height="25" rx="3" fill="#ffffff" />
                      <rect x="70" y="15" width="15" height="15" fill="#0a192f" />
                      <rect x="10" y="65" width="25" height="25" rx="3" fill="#ffffff" />
                      <rect x="15" y="70" width="15" height="15" fill="#0a192f" />
                      <rect x="42" y="15" width="16" height="8" fill="#ffffff" />
                      <rect x="42" y="77" width="16" height="8" fill="#ffffff" />
                      <rect x="65" y="45" width="8" height="16" fill="#ffffff" />
                      <rect x="15" y="45" width="8" height="16" fill="#ffffff" />
                      {/* Center Z Logo Stamp */}
                      <circle cx="50" cy="50" r="11" fill="#1b5ebe" />
                      <text x="50" y="55" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Z</text>
                    </svg>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-2 font-mono">
                    Scan with MoMo App or Camera
                  </span>
                </div>

                {/* Mobile Money Selector Pill */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <button
                    onClick={() => setActivePayment("momo")}
                    className={`py-2 rounded-lg border text-center transition-all ${
                      activePayment === "momo"
                        ? "bg-amber-50 border-amber-400 text-amber-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    MTN MoMo Pay
                  </button>
                  <button
                    onClick={() => setActivePayment("airtel")}
                    className={`py-2 rounded-lg border text-center transition-all ${
                      activePayment === "airtel"
                        ? "bg-red-50 border-red-400 text-red-900 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600"
                    }`}
                  >
                    Airtel Money
                  </button>
                </div>
              </div>

              {/* Bottom Phone Action Button */}
              <div className="pt-2">
                <a
                  href="https://pos.ziga.io"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ziga-primary w-full h-10 text-xs font-semibold"
                >
                  Confirm & Approve
                </a>
                <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto mt-3" />
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
