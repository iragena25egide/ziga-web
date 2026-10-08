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
  Wifi,
} from "lucide-react";

export default function MovingDashboardShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto select-none">
      {/* Physical Computer / Laptop Hardware Frame */}
      <div className="relative mx-auto max-w-4xl">
        {/* Top Camera Notch & Laptop Top Bezel */}
        <div className="relative rounded-t-2xl bg-slate-900 border-t border-x border-slate-700/80 pt-3 px-3 pb-0 shadow-2xl">
          {/* Laptop Screen Bezel */}
          <div className="flex items-center justify-center pb-2">
            {/* Webcam Lens & Indicator */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-600" />
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          {/* Screen Display Container */}
          <div className="rounded-t-lg overflow-hidden border border-slate-800 bg-white">
            {/* Window Browser / Terminal Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                <span>{activeSlide === 0 ? "pos.ziga.io/dashboard" : "pos.ziga.io/pos — Terminal 01"}</span>
              </div>

              <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Active</span>
              </div>
            </div>

            {/* ── SCREEN VIEW 1: Cloud Dashboard Overview ── */}
            {activeSlide === 0 && (
              <div className="p-5 sm:p-7 bg-[#f8fafc] text-slate-900 min-h-[380px] sm:min-h-[420px] animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                      Store Terminal
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      Kigali Supermarket & Central Depot
                    </h3>
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    Updated: Today, 10:15 AM
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
                  {[
                    { title: "Total Revenue", val: "RWF 14,890,200", trend: "+18.4%", icon: DollarSign },
                    { title: "Sales Orders", val: "2,840 Completed", trend: "+12.1%", icon: ShoppingCart },
                    { title: "Customers", val: "1,245 Clients", trend: "+42 today", icon: Users },
                    { title: "Catalog Items", val: "640 Products", trend: "In Stock", icon: Package },
                  ].map((kpi, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-start justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono">
                          {kpi.title}
                        </span>
                        <p className="text-base font-bold text-slate-900 mt-0.5">{kpi.val}</p>
                        <p className="text-[10px] font-semibold text-[#1b5ebe] mt-0.5">{kpi.trend}</p>
                      </div>
                      <div className="w-7 h-7 rounded bg-[#0a192f] text-white flex items-center justify-center shrink-0">
                        <kpi.icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sales Table */}
                <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 text-xs">
                    <span className="font-bold text-slate-800 uppercase tracking-wider font-mono">
                      Live Transaction Feed
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">RRA EBM Fiscalized</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {[
                      { id: "#0928", items: "Inyange Fresh Milk 500ml x4, White Bread x2", amount: "5,800 RWF", method: "Ziga Pay (MTN MoMo)" },
                      { id: "#0927", items: "Gorilla Coffee 250g x2, Sugar 5kg", amount: "16,500 RWF", method: "Cash" },
                      { id: "#0926", items: "Sunflower Oil 5L x1, Premium Rice 25kg", amount: "48,000 RWF", method: "Ziga Pay (MTN MoMo)" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100"
                      >
                        <div>
                          <span className="font-mono font-bold text-[#1b5ebe] mr-2">{row.id}</span>
                          <span className="font-medium text-slate-800">{row.items}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-slate-900 font-mono">{row.amount}</span>
                          <p className="text-[10px] text-slate-500">{row.method}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SCREEN VIEW 2: Desktop POS Register Terminal ── */}
            {activeSlide === 1 && (
              <div className="p-5 sm:p-7 bg-[#f8fafc] text-slate-900 min-h-[380px] sm:min-h-[420px] animate-fadeIn">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {/* Product Catalog */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-300 flex items-center gap-2.5">
                      <ScanBarcode className="w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        readOnly
                        value="Scanner Active — Scan Barcode or Press [F2]..."
                        className="bg-transparent text-xs text-slate-600 w-full focus:outline-none font-medium"
                      />
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">
                        ESC/POS
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        { name: "Inyange Milk 500ml", price: "700 RWF", stock: "140 units" },
                        { name: "Wheat Flour 2kg", price: "2,200 RWF", stock: "85 units" },
                        { name: "Gorilla Coffee 250g", price: "4,500 RWF", stock: "40 units" },
                        { name: "Kinazi Cassava 5kg", price: "4,800 RWF", stock: "60 units" },
                        { name: "Sunflower Oil 1L", price: "3,200 RWF", stock: "92 units" },
                        { name: "Local Rice 5kg", price: "7,500 RWF", stock: "35 units" },
                      ].map((p, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-white border border-slate-200 shadow-sm"
                        >
                          <p className="font-semibold text-xs text-slate-800 line-clamp-1">{p.name}</p>
                          <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-100 text-xs">
                            <span className="font-bold text-slate-900 font-mono">{p.price}</span>
                            <span className="text-[10px] text-slate-400">{p.stock}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Thermal Receipt Preview */}
                  <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-2 text-xs font-bold text-slate-800">
                        <span className="flex items-center gap-1.5">
                          <Printer className="w-3.5 h-3.5 text-slate-500" />
                          Thermal Receipt
                        </span>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1 rounded">
                          PRINT
                        </span>
                      </div>

                      <div className="p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-800 leading-relaxed">
                        <div className="text-center pb-1.5 border-b border-dashed border-slate-300">
                          <p className="font-bold text-xs">ZIGA POS RWANDA</p>
                          <p className="text-[9px] text-slate-500">TIN: 109283746</p>
                        </div>

                        <div className="py-1.5 space-y-1 border-b border-dashed border-slate-300">
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

                        <div className="pt-1.5 text-right">
                          <div className="flex justify-between font-bold text-xs text-slate-900">
                            <span>TOTAL</span>
                            <span>8,100 RWF</span>
                          </div>
                          <p className="text-[9px] text-slate-500 mt-0.5">Paid: Ziga Pay (MoMo)</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200">
                      <a
                        href="https://pos.ziga.io"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ziga-primary w-full h-9 text-xs font-semibold"
                      >
                        Launch Terminal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Physical Laptop Keyboard Base Stand & Hinge */}
        <div className="relative h-4 sm:h-5 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-800 rounded-b-xl shadow-xl flex items-center justify-center">
          {/* Laptop Opening Notch Thumb Grip */}
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-slate-500/80 rounded-full" />
        </div>
        {/* Laptop Shadow Beneath */}
        <div className="w-[92%] h-3 mx-auto bg-slate-900/15 blur-md rounded-full mt-1" />
      </div>

      {/* Frame Toggle Controls Underneath */}
      <div className="flex items-center justify-center gap-3 mt-4 text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveSlide(0)}
          className={`px-3 py-1 rounded-md transition-colors ${
            activeSlide === 0 ? "bg-slate-900 text-white font-semibold" : "bg-white border border-slate-300 hover:bg-slate-50"
          }`}
        >
          1. Web Cloud Dashboard
        </button>
        <button
          onClick={() => setActiveSlide(1)}
          className={`px-3 py-1 rounded-md transition-colors ${
            activeSlide === 1 ? "bg-slate-900 text-white font-semibold" : "bg-white border border-slate-300 hover:bg-slate-50"
          }`}
        >
          2. Desktop POS Register
        </button>
      </div>
    </div>
  );
}
