import React from "react";
import ZigaLogo from "./ZigaLogo";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <ZigaLogo size={32} showText={true} theme="dark" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Point of Sale, inventory, and customer debt management system. Engineered for retail stores, supermarkets, and distributors in Rwanda.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:support@ziga.io" className="hover:text-white transition-colors">
                  support@ziga.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>KN 4 Ave, Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Product
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">POS Terminal</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Offline Engine</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Inventory Control</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Customer Credit & Debt</a></li>
              <li><a href="#hardware" className="hover:text-white transition-colors">Thermal Printer Drivers</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Access
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="https://pos.ziga.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  Cloud Web Portal (pos.ziga.io)
                </a>
              </li>
              <li><a href="https://pos.ziga.io" className="hover:text-white transition-colors">Desktop App (Windows .exe)</a></li>
              <li><a href="https://pos.ziga.io" className="hover:text-white transition-colors">Desktop App (macOS .dmg)</a></li>
              <li><a href="https://pos.ziga.io/admin" className="hover:text-white transition-colors">Super Admin Desk</a></li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Get Started
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Launch your store register today on the web or download the desktop installer.
            </p>
            <a
              href="https://pos.ziga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-ziga-primary h-10 px-4 text-xs w-full text-center mt-2"
            >
              <span>Open Ziga POS</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ziga. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Offline-Ready</span>
            <span>RRA EBM Compatible</span>
            <a href="https://pos.ziga.io" className="hover:text-slate-300 font-mono">
              pos.ziga.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
