import React from "react";
import ZigaLogo from "./ZigaLogo";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-200 py-16 border-t border-gray-800">
      {/* Background Watermark Lettering */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-end justify-center select-none"
      >
        <div className="translate-y-12 text-[120px] sm:text-[180px] md:text-[260px] font-black tracking-tight text-white/5 leading-none">
          ZIGA
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-12">
          {/* Brand Info */}
          <div className="max-w-sm">
            <ZigaLogo size={36} showText={true} theme="dark" />
            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
              Simple online and offline tools for sales, stock, and debts. Built for Rwandan and African retail stores that need clarity, control, and profitability.
            </p>

            <div className="mt-5 space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#38bdf8]" />
                <a href="mailto:support@ziga.io" className="hover:text-white transition-colors">
                  support@ziga.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#38bdf8]" />
                <span>Kigali, Rwanda • Downtown KN 4 Ave</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-secondary inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-4 text-center"
              >
                Log in
              </a>
              <a
                href="https://pos.ziga.io"
                target="_blank"
                rel="noreferrer"
                className="btn-tactile-primary inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-4 text-center"
              >
                Start free trial
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:max-w-2xl lg:ml-auto text-sm">
            <div>
              <p className="font-semibold text-xs tracking-wider uppercase text-gray-400 mb-4 font-mono">
                Product
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-300">
                <li><a href="#solutions" className="hover:text-white transition-colors">Point of Sale Terminal</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Offline Engine</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Loan & Credit Book</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Thermal ESC/POS Receipts</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-xs tracking-wider uppercase text-gray-400 mb-4 font-mono">
                Platforms
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-300">
                <li>
                  <a href="https://pos.ziga.io" className="hover:text-white flex items-center gap-1">
                    Cloud Web App (pos.ziga.io)
                  </a>
                </li>
                <li><a href="#download" className="hover:text-white">Desktop Windows (.exe)</a></li>
                <li><a href="#download" className="hover:text-white">Desktop macOS (.dmg)</a></li>
                <li><a href="https://pos.ziga.io/admin" className="hover:text-white">Super Admin Command Center</a></li>
                <li><a href="#faq" className="hover:text-white">Help Center & FAQs</a></li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-xs tracking-wider uppercase text-gray-400 mb-4 font-mono">
                Legal & Region
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-gray-300">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">RRA EBM Compliance</a></li>
                <li><a href="#" className="hover:text-white">MTN & Airtel MoMo Pay</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ziga. All rights reserved.</p>
          <p>Online & Offline-first • Built for retail stores across Rwanda</p>
        </div>
      </div>
    </footer>
  );
}
