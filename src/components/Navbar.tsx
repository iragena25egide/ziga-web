"use client";

import React, { useState } from "react";
import Link from "next/link";
import ZigaLogo from "./ZigaLogo";
import { ArrowRight, Download, Menu, X, Sparkles, Laptop } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060d1a]/85 backdrop-blur-xl border-b border-white/8 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <ZigaLogo size={38} showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Core Features
          </a>
          <a href="#pos-system" className="hover:text-cyan-400 transition-colors">
            POS Terminal
          </a>
          <a href="#offline" className="hover:text-cyan-400 transition-colors">
            Offline Engine
          </a>
          <a href="#hardware" className="hover:text-cyan-400 transition-colors">
            Hardware Support
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">
            Pricing
          </a>
        </div>

        {/* Direct Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://pos.ziga.io"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl border border-white/10 hover:border-cyan-500/40 bg-white/5 transition-all flex items-center gap-1.5"
          >
            <span>Sign In</span>
          </a>

          <a
            href="https://pos.ziga.io"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white text-xs font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-102 transition-all flex items-center gap-2"
          >
            <span>Launch pos.ziga.io</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071120] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400"
            >
              Core Features
            </a>
            <a
              href="#pos-system"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400"
            >
              POS Terminal
            </a>
            <a
              href="#offline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400"
            >
              Offline Engine
            </a>
            <a
              href="#hardware"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400"
            >
              Hardware Support
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-cyan-400"
            >
              Pricing
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1b5ebe] to-[#00f2fe] text-white text-xs font-bold text-center flex items-center justify-center gap-2"
            >
              <span>Go to pos.ziga.io</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
