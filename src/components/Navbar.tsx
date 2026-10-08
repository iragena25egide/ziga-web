"use client";

import React, { useState } from "react";
import Link from "next/link";
import ZigaLogo from "./ZigaLogo";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] px-3 sm:px-4 md:px-6 pt-3 md:pt-4 pointer-events-none">
      <div className="pointer-events-auto relative mx-auto max-w-6xl">
        <div className="relative flex items-center justify-between gap-4 rounded-xl px-4 sm:px-5 py-2.5 bg-white/95 backdrop-blur-md border border-gray-300 shadow-sm">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <ZigaLogo size={32} showText={true} />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="/"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Home
            </a>
            <a
              href="#solutions"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Solutions
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </a>
            <a
              href="#demo"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Interactive Demo
            </a>
            <a
              href="#pricing"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              FAQs
            </a>
          </div>

          {/* Action CTAs (Tactile 3D Buttons like Higura) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Currency Pill */}
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 bg-gray-50">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>RWF</span>
            </div>

            <div className="w-px h-6 bg-gray-200 mx-0.5" />

            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-tactile-secondary inline-flex items-center justify-center rounded-lg text-sm font-semibold h-10 px-4"
            >
              Log in
            </a>

            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-tactile-primary inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-semibold h-10 px-4"
            >
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-xl bg-white border border-gray-300 p-4 shadow-xl space-y-3">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1b5ebe]"
            >
              Home
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1b5ebe]"
            >
              Solutions & Workflows
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1b5ebe]"
            >
              Interactive Demo
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1b5ebe]"
            >
              Pricing Plans
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-800 hover:text-[#1b5ebe]"
            >
              FAQs
            </a>

            <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary w-full py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Log in
              </a>
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary w-full py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Get started (pos.ziga.io)
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
