"use client";

import React, { useState } from "react";
import {
  Laptop,
  Globe,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  ScanBarcode,
  Printer,
  WifiOff,
  ArrowRight,
  Maximize2,
  CheckCircle2,
} from "lucide-react";

export default function AppMockupFrame() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "pos">("dashboard");

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Switcher Pill */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex p-1 rounded-xl bg-gray-100 border border-gray-200 shadow-inner">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "dashboard"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Globe className="w-4 h-4 text-[#1b5ebe]" />
            <span>Cloud Web Dashboard</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 font-mono text-[#1b5ebe] font-bold">
              pos.zigga.io
            </span>
          </button>

          <button
            onClick={() => setActiveTab("pos")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "pos"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Laptop className="w-4 h-4 text-[#1b5ebe]" />
            <span>Desktop POS App</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono font-bold">
              Offline-Ready
            </span>
          </button>
        </div>
      </div>

      {/* Main Frame Window */}
      <div className="rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>

          <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-gray-200 text-xs text-gray-600 font-mono">
            {activeTab === "dashboard" ? (
              <>
                <Globe className="w-3.5 h-3.5 text-[#1b5ebe]" />
                <span>https://pos.zigga.io/dashboard</span>
              </>
            ) : (
              <>
                <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ziga POS v1.1.0 • Desktop Terminal (Kigali Downtown)</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            {activeTab === "pos" && (
              <span className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <WifiOff className="w-3 h-3" /> Offline Sync
              </span>
            )}
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Tab 1: Cloud Dashboard */}
        {activeTab === "dashboard" && (
          <div className="p-6 md:p-8 bg-[#f8fafc] text-gray-900 min-h-[460px]">
            {/* Top Bar inside app */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
              <div>
                <span className="text-[11px] font-bold text-[#1b5ebe] uppercase tracking-wider">
                  Store Overview
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-0.5">
                  Kigali Supermarket & Central Depot
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Terminal Online
                </span>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: "Total Revenue", val: "RWF 14,890,200", trend: "+18.4%", icon: DollarSign },
                { title: "Orders Processed", val: "2,840 Sales", trend: "+12.1%", icon: ShoppingCart },
                { title: "Registered Customers", val: "1,245 Clients", trend: "+45 new", icon: Users },
                { title: "Active Catalog SKU", val: "640 Items", trend: "4 Low stock", icon: Package },
              ].map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      {kpi.title}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1b5ebe] flex items-center justify-center">
                      <kpi.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 font-mono tracking-tight">
                      {kpi.val}
                    </p>
                    <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      {kpi.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Transactions & Branches */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                  <span className="font-bold text-sm text-gray-900">Recent Completed Sales</span>
                  <span className="text-[11px] font-mono text-gray-500">Live EBM Feed</span>
                </div>
                <div className="space-y-2">
                  {[
                    { id: "#0928", store: "Inyange Milk x4, Bread 1kg x2", cost: "5,800 RWF", type: "MoMo Pay" },
                    { id: "#0927", store: "Gorilla Coffee 250g x2, Sugar 5kg", cost: "16,500 RWF", type: "Cash" },
                    { id: "#0926", store: "Sunflower Oil 5L x1, Rice 25kg", cost: "48,000 RWF", type: "MoMo Pay" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[#1b5ebe]">{row.id}</span>
                          <span className="font-medium text-gray-800">{row.store}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold font-mono text-gray-900">{row.cost}</span>
                        <p className="text-[10px] text-gray-500">{row.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-bold text-sm text-gray-900 block mb-2">Multi-Store Terminals</span>
                  <p className="text-xs text-gray-500 mb-4">
                    Strict company isolation protects branch reports and cashier access.
                  </p>
                  <div className="space-y-2.5 text-xs">
                    {[
                      { name: "Downtown Kigali", status: "Active • 4 registers", vol: "6.2M RWF" },
                      { name: "Remera Hub", status: "Active • 2 registers", vol: "4.8M RWF" },
                      { name: "Musanze Depot", status: "Active • 1 register", vol: "3.8M RWF" },
                    ].map((b, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800">{b.name}</p>
                          <p className="text-[10px] text-emerald-600">{b.status}</p>
                        </div>
                        <span className="font-mono font-bold text-gray-700">{b.vol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span className="text-gray-500">Total Network Volume</span>
                  <span className="font-bold text-[#1b5ebe] font-mono">14.8M RWF</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Desktop POS App */}
        {activeTab === "pos" && (
          <div className="p-6 md:p-8 bg-[#f8fafc] text-gray-900 min-h-[460px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Product catalog / Barcode listener */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-3.5 rounded-xl bg-white border border-gray-300 shadow-sm flex items-center gap-3">
                  <ScanBarcode className="w-5 h-5 text-[#1b5ebe]" />
                  <input
                    type="text"
                    readOnly
                    value="Ready to Scan Barcode or Press [F2] to Search..."
                    className="bg-transparent border-0 text-sm text-gray-600 w-full focus:outline-none font-medium"
                  />
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1b5ebe] text-[11px] font-mono font-bold">
                    SCANNER ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Inyange Fresh Milk 500ml", price: "700 RWF", stock: "140 units" },
                    { name: "Wheat Flour 2kg Premium", price: "2,200 RWF", stock: "85 units" },
                    { name: "Gorilla Coffee 250g Box", price: "4,500 RWF", stock: "40 units" },
                    { name: "Kinazi Cassava Flour 5kg", price: "4,800 RWF", stock: "60 units" },
                    { name: "Sunflower Cooking Oil 1L", price: "3,200 RWF", stock: "92 units" },
                    { name: "Local Rice Premium 5kg", price: "7,500 RWF", stock: "35 units" },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#1b5ebe] cursor-pointer transition-all shadow-sm"
                    >
                      <p className="font-bold text-xs text-gray-800 line-clamp-1">{p.name}</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                        <span className="text-xs font-mono font-bold text-emerald-600">{p.price}</span>
                        <span className="text-[10px] text-gray-400">{p.stock}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermal Receipt Paper */}
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                    <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                      <Printer className="w-4 h-4 text-[#1b5ebe]" />
                      Thermal Receipt (58/80mm)
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                      ESC/POS READY
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 font-mono text-[11px] text-gray-800 leading-relaxed shadow-inner">
                    <div className="text-center pb-2 border-b border-dashed border-gray-300">
                      <p className="font-black text-sm tracking-wide">ZIGA POS RWANDA</p>
                      <p className="text-[9px] text-gray-500">Kigali, KN 4 Ave • TIN: 109283746</p>
                      <p className="text-[9px] text-gray-500">Date: 2026-10-08 09:30 AM</p>
                    </div>

                    <div className="py-2 space-y-1 border-b border-dashed border-gray-300">
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
                      <div className="flex justify-between font-bold text-xs text-gray-900">
                        <span>TOTAL</span>
                        <span>8,100 RWF</span>
                      </div>
                      <p className="text-[9px] text-emerald-700 mt-0.5">Paid: MoMo Pay (MTN) • 8,100 RWF</p>
                    </div>

                    <div className="text-center pt-2 text-[9px] text-gray-400">
                      *** THANK YOU FOR SHOPPING ***
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <a
                    href="https://pos.zigga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-tactile-primary w-full py-2.5 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Launch POS Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
