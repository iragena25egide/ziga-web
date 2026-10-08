"use client";

import React, { useState } from "react";
import Link from "next/link";
import ZigaLogo from "./ZigaLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand: ONLY the Z Logo, identical to Footer */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <ZigaLogo size={34} />
          <span className="font-bold text-lg text-slate-900 tracking-tight">Ziga</span>
        </Link>

        {/* Clean Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#pos" className="hover:text-[#1b5ebe] transition-colors">
            Ziga POS
          </a>
          <a href="#pay" className="hover:text-[#1b5ebe] transition-colors">
            Ziga Pay
          </a>
          <a href="#ecosystem" className="hover:text-[#1b5ebe] transition-colors">
            Ecosystem
          </a>
          <a href="#testimonials" className="hover:text-[#1b5ebe] transition-colors">
            Customers
          </a>
          <a href="#faq" className="hover:text-[#1b5ebe] transition-colors">
            FAQ
          </a>
        </div>

        {/* Single CTA: Get Started Button Only */}
        <div className="hidden md:flex items-center">
          <a
            href="https://pos.ziga.io"
            target="_blank"
            rel="noreferrer"
            className="btn-ziga-primary h-10 px-5 text-sm gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-3">
          <a
            href="#pos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#1b5ebe]"
          >
            Ziga POS
          </a>
          <a
            href="#pay"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#1b5ebe]"
          >
            Ziga Pay
          </a>
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#1b5ebe]"
          >
            Ecosystem
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#1b5ebe]"
          >
            Customers
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-[#1b5ebe]"
          >
            FAQ
          </a>

          <div className="pt-2">
            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-ziga-primary w-full h-11 text-sm font-semibold"
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
