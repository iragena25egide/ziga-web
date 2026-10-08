import React from "react";
import ZigaLogo from "./ZigaLogo";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-white/8 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Info */}
        <div className="md:col-span-1 space-y-4">
          <ZigaLogo size={36} showText={true} />
          <p className="text-xs text-slate-400 leading-relaxed">
            The next-generation retail operating system built for modern African commerce. Offline-first, fiscalized thermal printing, and multi-tenant security.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational at pos.ziga.io</span>
          </div>
        </div>

        {/* Product Navigation */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Product & OS</p>
          <ul className="space-y-2 text-xs">
            <li><a href="#pos-system" className="hover:text-cyan-400 transition-colors">Point of Sale Terminal</a></li>
            <li><a href="#offline" className="hover:text-cyan-400 transition-colors">Offline Sync Engine</a></li>
            <li><a href="#hardware" className="hover:text-cyan-400 transition-colors">Thermal Printer & Barcode</a></li>
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Loan & Credit Books</a></li>
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Multi-Store Isolation</a></li>
          </ul>
        </div>

        {/* Resources & Platforms */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Platforms</p>
          <ul className="space-y-2 text-xs">
            <li><a href="https://pos.ziga.io" className="hover:text-cyan-400 flex items-center gap-1">Cloud Web App (pos.ziga.io) <ArrowUpRight className="w-3 h-3" /></a></li>
            <li><a href="#download" className="hover:text-cyan-400">Desktop Windows (.exe)</a></li>
            <li><a href="#download" className="hover:text-cyan-400">Desktop macOS (.dmg)</a></li>
            <li><a href="https://pos.ziga.io/admin" className="hover:text-cyan-400">Super Admin Command Center</a></li>
          </ul>
        </div>

        {/* Security & Region */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Enterprise & Region</p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Engineered in Rwanda with local payment support (MTN MoMo, Airtel Money) and fiscal tax receipt compliance (RRA EBM readiness).
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise Multi-Tenant Isolation</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Ziga Technologies Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="https://pos.ziga.io" className="hover:text-cyan-400 font-mono">pos.ziga.io</a>
        </div>
      </div>
    </footer>
  );
}
