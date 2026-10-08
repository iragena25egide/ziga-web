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
      {/* ── REALISTIC LAPTOP / COMPUTER HARDWARE DISPLAY (MacBook Pro Unibody) ── */}
      <div className="relative mx-auto max-w-4xl">
        {/* Screen Outer Aluminum Lid with Multi-Layer Bezel */}
        <div className="relative rounded-t-[28px] bg-[#1e2025] p-3 sm:p-3.5 pb-0 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] border-t border-x border-[#3b3e45]">
          {/* Inner Display Gloss Glass Bezel */}
          <div className="relative rounded-t-[20px] bg-[#0c0d10] p-2 sm:p-2.5 pb-0 border border-[#272930]">
            {/* Top Display Center Notch with True Camera Lens */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-4 w-32 bg-[#0c0d10] rounded-b-xl flex items-center justify-center gap-2 border-b border-x border-[#1a1c22]">
              {/* Glass Lens & Green Activity LED */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#171920] border border-[#2e323d] flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#0d2a45]" />
              </div>
              <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
            </div>

            {/* Screen Glass Surface */}
            <div className="rounded-t-xl overflow-hidden bg-white border border-[#262830] shadow-inner">
              {/* macOS Window App Bar & URL Navigation */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#f1f3f7] border-b border-slate-200 text-xs">
                {/* Window Traffic Lights */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] shadow-sm inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24] shadow-sm inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] shadow-sm inline-block" />
                </div>

                {/* Browser URL Search Pill */}
                <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-mono text-[11px] shadow-sm max-w-sm w-full mx-3 justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">
                    {activeSlide === 0 ? "https://pos.zigga.io/dashboard/kigali-hq" : "https://pos.zigga.io/pos/counter-01"}
                  </span>
                </div>

                {/* Connection Status */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <Wifi className="w-3 h-3" />
                  <span className="hidden sm:inline">Online Sync</span>
                </div>
              </div>

              {/* ── SLIDE 1: Real Ziga Cloud Web Dashboard ── */}
              {activeSlide === 0 && (
                <div className="flex min-h-[400px] sm:min-h-[440px] bg-[#f8fafc] text-slate-900 animate-fadeIn">
                  {/* Left Mini Sidebar */}
                  <div className="w-14 sm:w-48 bg-[#0a192f] text-slate-300 p-3 sm:p-4 flex flex-col justify-between shrink-0 border-r border-slate-800">
                    <div className="space-y-4">
                      {/* Brand Logo in App */}
                      <div className="flex items-center gap-2 px-1">
                        <div className="w-7 h-7 rounded-lg bg-[#1b5ebe] text-white flex items-center justify-center font-bold text-xs shadow-md">
                          Z
                        </div>
                        <span className="font-bold text-sm text-white hidden sm:inline tracking-tight">Ziga POS</span>
                      </div>

                      {/* Nav Links */}
                      <div className="space-y-1 pt-2">
                        {[
                          { label: "Dashboard", active: true },
                          { label: "Registers", active: false },
                          { label: "Inventory", active: false },
                          { label: "Customers", active: false },
                          { label: "Ziga Pay", active: false },
                        ].map((nav, i) => (
                          <div
                            key={i}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                              nav.active
                                ? "bg-[#1b5ebe] text-white font-semibold"
                                : "text-slate-400 hover:text-white hover:bg-slate-800"
                            }`}
                          >
                            <span className="hidden sm:inline">{nav.label}</span>
                            <span className="sm:hidden font-mono text-[10px]">{nav.label.slice(0, 2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-2 rounded bg-slate-800/80 text-[10px] text-slate-400 hidden sm:block">
                      <span className="text-white font-semibold block">Store Branch:</span>
                      Kigali Central HQ
                    </div>
                  </div>

                  {/* Main Dashboard Canvas */}
                  <div className="flex-1 p-4 sm:p-6 overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          Retail Sales & Inventory Analytics
                        </h3>
                        <p className="text-xs text-slate-500">Live consolidated figures from all retail registers</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-sm">
                          Today • Live
                        </span>
                      </div>
                    </div>

                    {/* 4 Metric Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      {[
                        { title: "Daily Revenue", val: "RWF 14,890,200", change: "+18.4%", icon: DollarSign },
                        { title: "Completed Orders", val: "2,840 Sales", change: "+12.1%", icon: ShoppingCart },
                        { title: "Active Customers", val: "1,245 Clients", change: "+38 new", icon: Users },
                        { title: "In-Stock Items", val: "640 SKUs", change: "98% filled", icon: Package },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase font-mono">
                              {card.title}
                            </span>
                            <div className="w-6 h-6 rounded-md bg-slate-100 text-[#1b5ebe] flex items-center justify-center">
                              <card.icon className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <p className="text-sm sm:text-base font-bold text-slate-900">{card.val}</p>
                          <span className="text-[10px] font-semibold text-emerald-600 mt-1">
                            {card.change} vs yesterday
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Live Recent Orders Table */}
                    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-4">
                      <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 text-xs">
                        <span className="font-bold text-slate-900">Recent Checkout Transactions</span>
                        <span className="text-[11px] font-mono text-slate-500">Auto-Synced with RRA EBM</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        {[
                          { id: "#0928", desc: "Inyange Fresh Milk 500ml x4, White Bread x2", total: "5,800 RWF", pay: "Ziga Pay (MTN MoMo)", time: "Just now" },
                          { id: "#0927", desc: "Gorilla Coffee 250g x2, Sugar 5kg", total: "16,500 RWF", pay: "Cash Drawer", time: "3 mins ago" },
                          { id: "#0926", desc: "Sunflower Oil 5L x1, Premium Rice 25kg", total: "48,000 RWF", pay: "Ziga Pay (Airtel Money)", time: "6 mins ago" },
                        ].map((row, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100/90 hover:bg-slate-100/70 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <span className="font-mono font-bold text-[#1b5ebe] text-xs shrink-0">{row.id}</span>
                              <span className="font-medium text-slate-800 text-xs truncate">{row.desc}</span>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="font-bold text-slate-900 font-mono text-xs">{row.total}</span>
                              <p className="text-[10px] text-slate-500">{row.pay}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── SLIDE 2: Real Offline POS Register Terminal ── */}
              {activeSlide === 1 && (
                <div className="p-3 sm:p-5 bg-[#f8fafc] text-slate-900 min-h-[400px] sm:min-h-[440px] animate-fadeIn">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
                    {/* Left: Product Catalog & Search Bar */}
                    <div className="lg:col-span-7 space-y-2.5">
                      {/* Barcode Search Bar */}
                      <div className="p-2 rounded-lg bg-white border border-slate-300 shadow-sm flex items-center gap-2">
                        <ScanBarcode className="w-3.5 h-3.5 text-[#1b5ebe]" />
                        <input
                          type="text"
                          readOnly
                          value="[F2] Laser Scanner Active • Ready for Barcode / SKU..."
                          className="bg-transparent text-[11px] text-slate-700 w-full focus:outline-none font-medium"
                        />
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[9px] font-mono font-bold shrink-0">
                          ESC/POS
                        </span>
                      </div>

                      {/* Category Filter Pills */}
                      <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] pb-0.5">
                        {["All Items", "Supermarket", "Phones & Tech", "Fashion", "Beauty"].map((cat, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 rounded-md font-medium shrink-0 cursor-pointer ${
                              i === 0
                                ? "bg-[#1b5ebe] text-white"
                                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {/* Compact Detailed Product Grid (8 items) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { name: "Inyange Milk 500ml", price: "700 RWF", stock: "140", code: "SKU-6161" },
                          { name: "Wheat Flour 2kg", price: "2,200 RWF", stock: "85", code: "SKU-7820" },
                          { name: "Gorilla Coffee 250g", price: "4,500 RWF", stock: "40", code: "SKU-9143" },
                          { name: "Samsung Galaxy A15", price: "185,000 RWF", stock: "12", code: "SKU-5012" },
                          { name: "NKM Cotton Shirt", price: "18,000 RWF", stock: "28", code: "SKU-3120" },
                          { name: "Velora French Perfume", price: "35,000 RWF", stock: "15", code: "SKU-8901" },
                          { name: "Sunflower Oil 1L", price: "3,200 RWF", stock: "92", code: "SKU-5512" },
                          { name: "USB-C Fast Cable 2M", price: "6,000 RWF", stock: "54", code: "SKU-4401" },
                        ].map((prod, i) => (
                          <div
                            key={i}
                            className="p-2 rounded-lg bg-white border border-slate-200/90 shadow-sm hover:border-[#1b5ebe] cursor-pointer transition-all flex flex-col justify-between"
                          >
                            <div>
                              <span className="text-[8px] font-mono text-slate-400 block">{prod.code}</span>
                              <p className="font-semibold text-[11px] text-slate-900 line-clamp-1 mt-0.5 leading-tight">{prod.name}</p>
                            </div>
                            <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-slate-100 text-[10px]">
                              <span className="font-bold text-[#1b5ebe] font-mono">{prod.price}</span>
                              <span className="text-[9px] text-slate-400 font-mono">{prod.stock} left</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Realistic ESC/POS Thermal Receipt Paper Ticket */}
                    <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 shadow-sm p-3 sm:p-3.5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 mb-2 text-xs font-bold text-slate-800">
                          <span className="flex items-center gap-1.5 text-[11px]">
                            <Printer className="w-3.5 h-3.5 text-[#1b5ebe]" />
                            ESC/POS Thermal Paper (80mm)
                          </span>
                          <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold border border-emerald-200">
                            OFFLINE SYNC
                          </span>
                        </div>

                        {/* Physical Receipt Appearance */}
                        <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-800 leading-tight shadow-inner">
                          <div className="text-center pb-1.5 border-b border-dashed border-slate-300">
                            <p className="font-bold text-[11px] tracking-wider">ZIGA POS RWANDA</p>
                            <p className="text-[9px] text-slate-500">KN 4 Ave, Kigali • TIN: 109283746</p>
                          </div>

                          <div className="py-1.5 space-y-1 border-b border-dashed border-slate-300 text-[9.5px]">
                            <div className="flex justify-between">
                              <span>Inyange Milk 500ml x2</span>
                              <span className="font-bold">1,400 RWF</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Gorilla Coffee 250g x1</span>
                              <span className="font-bold">4,500 RWF</span>
                            </div>
                            <div className="flex justify-between">
                              <span>USB-C Fast Cable x1</span>
                              <span className="font-bold">6,000 RWF</span>
                            </div>
                          </div>

                          <div className="pt-1.5 text-right">
                            <div className="flex justify-between font-bold text-xs text-slate-900">
                              <span>TOTAL DUE</span>
                              <span>11,900 RWF</span>
                            </div>
                            <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
                              <span>Paid: Ziga Pay (MTN MoMo)</span>
                              <span className="text-emerald-600 font-bold">APPROVED</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-200">
                        <div className="w-full h-8 rounded-lg bg-[#1b5ebe] text-white flex items-center justify-center text-[11px] font-semibold">
                          Register Active • Counter #01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── REALISTIC UNIBODY LAPTOP CHASSIS BASE & HINGE ── */}
        <div className="relative">
          {/* Main Aluminum Base Lip with Cutout Notch for Thumb */}
          <div className="h-4 sm:h-5 bg-gradient-to-b from-[#2d3037] via-[#202227] to-[#16171b] rounded-b-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.5)] flex items-center justify-center border-b border-x border-[#3b3e45]">
            {/* Center Thumb Grip Notch */}
            <div className="w-20 sm:w-28 h-1 sm:h-1.5 bg-[#4a4e58] rounded-full shadow-inner" />
          </div>

          {/* Under-Chassis Rubber Feet & Contact Ambient Occlusion */}
          <div className="w-[94%] h-3 mx-auto bg-slate-900/25 blur-lg rounded-full mt-0.5" />
        </div>
      </div>

      {/* Frame Toggle Buttons */}
      <div className="flex items-center justify-center gap-3 mt-6 text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveSlide(0)}
          className={`px-3.5 py-1.5 rounded-full transition-all shadow-sm ${
            activeSlide === 0
              ? "bg-slate-900 text-white font-semibold shadow-md"
              : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
          }`}
        >
          1. Web Cloud Dashboard
        </button>
        <button
          onClick={() => setActiveSlide(1)}
          className={`px-3.5 py-1.5 rounded-full transition-all shadow-sm ${
            activeSlide === 1
              ? "bg-slate-900 text-white font-semibold shadow-md"
              : "bg-white border border-slate-300 hover:bg-slate-50 text-slate-700"
          }`}
        >
          2. Desktop POS Register
        </button>
      </div>
    </div>
  );
}
