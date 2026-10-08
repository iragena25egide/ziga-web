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
  ShieldCheck,
  CheckCircle2,
  ScanBarcode,
  Printer,
  WifiOff,
  ArrowUpRight,
  Maximize2,
} from "lucide-react";

export default function AppMockupFrame() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "pos">("dashboard");

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none" data-aos="zoom-in" data-aos-duration="1000">
      {/* Decorative ambient underglow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-600/30 blur-2xl opacity-60 -z-10" />

      {/* Device Mode Switcher Floating Bar */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#09152a]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "dashboard"
                ? "bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white shadow-lg shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Cloud Web Dashboard</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-mono text-cyan-200">
              pos.ziga.io
            </span>
          </button>

          <button
            onClick={() => setActiveTab("pos")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "pos"
                ? "bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white shadow-lg shadow-cyan-500/25"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Desktop POS App</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
              Offline-Ready
            </span>
          </button>
        </div>
      </div>

      {/* Main Showcase Window */}
      <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0b172c] shadow-2xl transition-all">
        {/* Browser / Desktop Window Top Title Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#071120] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>

          <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-400 font-mono">
            {activeTab === "dashboard" ? (
              <>
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>https://pos.ziga.io/dashboard</span>
              </>
            ) : (
              <>
                <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ziga POS v1.1.0 • Desktop Cashier Terminal [Kigali Central]</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            {activeTab === "pos" && (
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <WifiOff className="w-3 h-3" /> Offline Sync Active
              </span>
            )}
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Window Content: View 1 (Cloud Dashboard) */}
        {activeTab === "dashboard" && (
          <div className="p-6 md:p-8 bg-[#0a1529] text-slate-100 min-h-[460px] animate-fadeIn">
            {/* Top Stat Ribbon */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  Enterprise Analytics
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Kigali Retail Hub & Central Warehouse
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live System Connected
                </span>
              </div>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  title: "Total Revenue",
                  val: "RWF 14,890,200",
                  sub: "+18.4% vs last week",
                  icon: DollarSign,
                  grad: "from-blue-600 to-cyan-500",
                },
                {
                  title: "Sales Count",
                  val: "2,840 Orders",
                  sub: "Avg: 5,243 RWF/order",
                  icon: ShoppingCart,
                  grad: "from-cyan-500 to-teal-400",
                },
                {
                  title: "Active Customers",
                  val: "1,245 Stores",
                  sub: "99.8% Retention",
                  icon: Users,
                  grad: "from-indigo-600 to-blue-500",
                },
                {
                  title: "In-Stock SKU",
                  val: "640 Products",
                  sub: "Low-Stock Alert: 4 items",
                  icon: Package,
                  grad: "from-emerald-500 to-cyan-500",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#0e1d38] border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {card.title}
                    </span>
                    <div className={`p-2 rounded-xl bg-gradient-to-tr ${card.grad} text-white shadow-md`}>
                      <card.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xl font-bold text-white tracking-tight">{card.val}</p>
                  <p className="text-[11px] text-emerald-400 font-medium mt-1.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {card.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Live Transactions & Activity Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-5 rounded-2xl bg-[#0e1d38] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-sm text-white">Recent Transactions (Real-Time)</h4>
                  <span className="text-xs text-cyan-400 font-mono">Automated EBM</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { id: "REC-9082", client: "Inyange Dairy Store", items: "Milk cartons x12, Butter x4", total: "54,000 RWF", time: "Just now" },
                    { id: "REC-9081", client: "Kigali Fresh Mart", items: "Rice 25kg, Cooking Oil 5L", total: "82,500 RWF", time: "2 min ago" },
                    { id: "REC-9080", client: "Gasabo General Store", items: "Sugar 50kg, Flour 10kg", total: "115,000 RWF", time: "6 min ago" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#09152b] border border-white/5 hover:border-cyan-500/20 transition-all text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-cyan-400 font-bold">{row.id}</span>
                          <span className="font-bold text-white">{row.client}</span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-0.5">{row.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-emerald-400 text-sm">{row.total}</p>
                        <p className="text-[10px] text-slate-500">{row.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch / Multi-Tenant Isolation Status */}
              <div className="p-5 rounded-2xl bg-[#0e1d38] border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white mb-2">Multi-Store Status</h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Strict isolation guarantees company data security across independent branches.
                  </p>
                  <div className="space-y-3">
                    {[
                      { branch: "Downtown Branch", active: "5 Terminals Active", sales: "4.2M RWF" },
                      { branch: "Remera Hub", active: "3 Terminals Active", sales: "6.8M RWF" },
                      { branch: "Nyamirambo Express", active: "2 Terminals Active", sales: "3.8M RWF" },
                    ].map((b, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#09152b] border border-white/5 flex items-center justify-between text-xs">
                        <div>
                          <p className="font-bold text-white">{b.branch}</p>
                          <p className="text-[10px] text-emerald-400">{b.active}</p>
                        </div>
                        <span className="font-mono font-bold text-white">{b.sales}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Synchronized</span>
                  <span className="text-cyan-400 font-bold">14.8M RWF</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Window Content: View 2 (Desktop POS App with Barcode & Thermal Receipt) */}
        {activeTab === "pos" && (
          <div className="p-6 md:p-8 bg-[#0a1529] text-slate-100 min-h-[460px] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Product Grid & Barcode Terminal */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-4 rounded-2xl bg-[#0e1d38] border border-white/10 flex items-center gap-3">
                  <ScanBarcode className="w-6 h-6 text-cyan-400 animate-pulse" />
                  <input
                    type="text"
                    readOnly
                    value="Ready to Scan Barcode or Search Product..."
                    className="bg-transparent border-0 text-sm text-slate-300 w-full focus:outline-none"
                  />
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">
                    SCANNER READY
                  </span>
                </div>

                {/* Quick Products */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: "Inyange Whole Milk 500ml", price: "700 RWF", cat: "Beverages", stock: 120 },
                    { name: "White Bread 1kg", price: "1,200 RWF", cat: "Bakery", stock: 45 },
                    { name: "Gorilla Coffee 250g", price: "4,500 RWF", cat: "Grocery", stock: 80 },
                    { name: "Sunflower Oil 1L", price: "3,200 RWF", cat: "Pantry", stock: 65 },
                    { name: "Local Rice Premium 5kg", price: "7,500 RWF", cat: "Grains", stock: 30 },
                    { name: "Kinazi Cassava Flour 2kg", price: "2,400 RWF", cat: "Flour", stock: 95 },
                  ].map((prod, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#0e1d38] border border-white/10 hover:border-cyan-400/50 cursor-pointer transition-all"
                    >
                      <span className="text-[10px] text-cyan-400 uppercase font-bold">{prod.cat}</span>
                      <p className="font-bold text-xs text-white mt-1 line-clamp-1">{prod.name}</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <span className="text-xs font-mono font-bold text-emerald-400">{prod.price}</span>
                        <span className="text-[10px] text-slate-500">Stock: {prod.stock}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thermal Receipt Preview Window */}
              <div className="p-5 rounded-2xl bg-[#0e1d38] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Printer className="w-4 h-4 text-cyan-400" />
                      Thermal Receipt (58/80mm)
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      PRINT READY
                    </span>
                  </div>

                  {/* Receipt Paper Emulation */}
                  <div className="p-4 rounded-xl bg-white text-slate-900 font-mono text-[11px] shadow-lg leading-relaxed">
                    <div className="text-center pb-2 border-b border-dashed border-slate-300">
                      <p className="font-black text-sm tracking-wider">ZIGA POS RWANDA</p>
                      <p className="text-[9px] text-slate-600">Kigali, KN 4 Ave • TIN: 109283746</p>
                      <p className="text-[9px] text-slate-500">Date: 2026-10-08 09:30 AM</p>
                    </div>

                    <div className="py-2 space-y-1.5 border-b border-dashed border-slate-300">
                      <div className="flex justify-between">
                        <span>Inyange Milk x2</span>
                        <span className="font-bold">1,400 RWF</span>
                      </div>
                      <div className="flex justify-between">
                        <span>White Bread 1kg x1</span>
                        <span className="font-bold">1,200 RWF</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gorilla Coffee x1</span>
                        <span className="font-bold">4,500 RWF</span>
                      </div>
                    </div>

                    <div className="pt-2 text-right">
                      <div className="flex justify-between font-bold text-xs">
                        <span>TOTAL</span>
                        <span>7,100 RWF</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-1">Paid: MoMo Pay (MTN) • 7,100 RWF</p>
                    </div>

                    <div className="text-center pt-2 text-[9px] text-slate-500">
                      *** THANK YOU FOR SHOPPING ***
                    </div>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                  <a
                    href="https://pos.ziga.io"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-102 transition-all"
                  >
                    <span>Launch POS Register Terminal</span>
                    <ArrowUpRight className="w-4 h-4" />
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
