"use client";

import React, { useState, useEffect } from "react";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  ScanBarcode,
  Printer,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function MovingDashboardShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-switch between the 2 dashboard views smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto select-none">
      {/* Slide Navigation Indicator Pills */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSlide(0)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSlide === 0
                ? "bg-[#1b5ebe] text-white shadow-sm"
                : "bg-white/10 text-slate-300 hover:bg-white/15"
            }`}
          >
            1. Cloud Dashboard Analytics
          </button>
          <button
            onClick={() => setActiveSlide(1)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSlide === 1
                ? "bg-[#1b5ebe] text-white shadow-sm"
                : "bg-white/10 text-slate-300 hover:bg-white/15"
            }`}
          >
            2. Desktop POS Register Terminal
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
          <button
            onClick={() => setActiveSlide(0)}
            className="p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Previous frame"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-[11px] text-slate-400">{activeSlide + 1} / 2</span>
          <button
            onClick={() => setActiveSlide(1)}
            className="p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Next frame"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Window Frame */}
      <div className="rounded-xl overflow-hidden border border-slate-700/60 bg-white shadow-2xl transition-all">
        {/* Realistic OS Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>

          <div className="px-3 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
            {activeSlide === 0 ? "https://pos.ziga.io/dashboard" : "Ziga POS Desktop — Terminal 01 (Kigali)"}
          </div>

          <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">Online System</span>
          </div>
        </div>

        {/* ── IMAGE / VIEW 1: Live Cloud Dashboard Overview ── */}
        {activeSlide === 0 && (
          <div className="p-6 md:p-8 bg-[#f8fafc] text-slate-900 min-h-[440px] animate-fadeIn">
            {/* Top Workspace Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Workspace Overview
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Kigali Supermarket & Central Depot
                </h3>
              </div>
              <div className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md">
                Updated: Today, 09:45 AM
              </div>
            </div>

            {/* Metric KPI Cards (Clean White with Solid Navy Icon Boxes - No AI Rainbow Colors) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: "Total Revenue", val: "RWF 14,890,200", trend: "+18.4% this week", icon: DollarSign },
                { title: "Sales Orders", val: "2,840 Completed", trend: "+12.1% sales", icon: ShoppingCart },
                { title: "Active Customers", val: "1,245 Clients", trend: "+42 new today", icon: Users },
                { title: "Catalog Items", val: "640 Products", trend: "4 low in stock", icon: Package },
              ].map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex items-start justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                      {kpi.title}
                    </span>
                    <p className="text-lg font-bold text-slate-900 mt-1">{kpi.val}</p>
                    <p className="text-[11px] font-medium text-[#1b5ebe] mt-1">{kpi.trend}</p>
                  </div>
                  <div className="w-8 h-8 rounded bg-[#0a192f] text-white flex items-center justify-center shrink-0">
                    <kpi.icon className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Sales Table */}
            <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <span className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Recent Sales Receipts
                </span>
                <span className="text-xs text-slate-500">Live EBM Feed</span>
              </div>
              <div className="space-y-2">
                {[
                  { id: "#0928", items: "Inyange Milk 500ml x4, White Bread x2", amount: "5,800 RWF", method: "MTN MoMo" },
                  { id: "#0927", items: "Gorilla Coffee 250g x2, Sugar 5kg", amount: "16,500 RWF", method: "Cash" },
                  { id: "#0926", items: "Sunflower Oil 5L x1, Rice Premium 25kg", amount: "48,000 RWF", method: "MTN MoMo" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded bg-slate-50 border border-slate-100 text-xs"
                  >
                    <div>
                      <span className="font-mono font-bold text-[#1b5ebe] mr-2">{row.id}</span>
                      <span className="font-medium text-slate-800">{row.items}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-slate-900">{row.amount}</span>
                      <p className="text-[10px] text-slate-500">{row.method}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── IMAGE / VIEW 2: Desktop POS Register with Barcode & Thermal Receipt ── */}
        {activeSlide === 1 && (
          <div className="p-6 md:p-8 bg-[#f8fafc] text-slate-900 min-h-[440px] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Product Selection & Barcode */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-3 rounded-lg bg-white border border-slate-300 flex items-center gap-3">
                  <ScanBarcode className="w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    readOnly
                    value="Scanner Active — Scan Barcode or Press [F2] to Search..."
                    className="bg-transparent text-xs text-slate-600 w-full focus:outline-none font-medium"
                  />
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                    ESC/POS
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Inyange Fresh Milk 500ml", price: "700 RWF", stock: "140 left" },
                    { name: "Wheat Flour 2kg Premium", price: "2,200 RWF", stock: "85 left" },
                    { name: "Gorilla Coffee 250g Box", price: "4,500 RWF", stock: "40 left" },
                    { name: "Kinazi Cassava Flour 5kg", price: "4,800 RWF", stock: "60 left" },
                    { name: "Sunflower Cooking Oil 1L", price: "3,200 RWF", stock: "92 left" },
                    { name: "Local Rice Premium 5kg", price: "7,500 RWF", stock: "35 left" },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-white border border-slate-200 hover:border-[#1b5ebe] transition-colors shadow-sm"
                    >
                      <p className="font-semibold text-xs text-slate-800 line-clamp-1">{p.name}</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
                        <span className="font-bold text-slate-900 font-mono">{p.price}</span>
                        <span className="text-[10px] text-slate-400">{p.stock}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermal Receipt Paper Preview */}
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3 text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Printer className="w-4 h-4 text-slate-500" />
                      Thermal Receipt (58/80mm)
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      READY
                    </span>
                  </div>

                  <div className="p-3 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-800 leading-relaxed">
                    <div className="text-center pb-2 border-b border-dashed border-slate-300">
                      <p className="font-bold text-xs tracking-wide">ZIGA POS RWANDA</p>
                      <p className="text-[9px] text-slate-500">KN 4 Ave, Kigali • TIN: 109283746</p>
                    </div>

                    <div className="py-2 space-y-1 border-b border-dashed border-slate-300">
                      <div className="flex justify-between">
                        <span>Inyange Milk x2</span>
                        <span className="font-bold">1,400 RWF</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wheat Flour x1</span>
                        <span className="font-bold">2,200 RWF</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gorilla Coffee x1</span>
                        <span className="font-bold">4,500 RWF</span>
                      </div>
                    </div>

                    <div className="pt-2 text-right">
                      <div className="flex justify-between font-bold text-xs text-slate-900">
                        <span>TOTAL</span>
                        <span>8,100 RWF</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Paid: MTN MoMo • 8,100 RWF</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <a
                    href="https://pos.ziga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ziga-primary w-full h-10 text-xs font-semibold"
                  >
                    Open Live Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
