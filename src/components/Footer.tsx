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
              The unified retail, point of sale, and mobile payments ecosystem.
              Empowering commerce, merchants, and shoppers across Rwanda.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a
                  href="mailto:support@zigga.io"
                  className="hover:text-white transition-colors"
                >
                  support@zigga.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-mono text-[11px] font-bold">TEL:</span>
                <a
                  href="tel:0798555420"
                  className="hover:text-white transition-colors font-mono"
                >
                  0798555420
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>KK, Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          {/* Solutions: Ziga POS & Ziga Pay */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Solutions
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#pos" className="hover:text-white transition-colors">
                  Ziga POS Platform
                </a>
              </li>
              <li>
                <a href="#pay" className="hover:text-white transition-colors">
                  Ziga Pay (MoMo & QR)
                </a>
              </li>
              <li>
                <a href="#pos" className="hover:text-white transition-colors">
                  Offline Desktop Register
                </a>
              </li>
              <li>
                <a href="#pos" className="hover:text-white transition-colors">
                  Stock & Inventory Management
                </a>
              </li>
              <li>
                <a href="#pos" className="hover:text-white transition-colors">
                  Customer Credit & Debt Book
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Access */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Access
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://pos.zigga.io"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Cloud Portal (pos.zigga.io)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Action */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Get Started
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Launch your store register or payment checkout today with our
              1-month trial.
            </p>
            <a
              href="https://pos.zigga.io"
              target="_blank"
              rel="noreferrer"
              className="btn-ziga-primary h-10 px-4 text-xs w-full text-center mt-2"
            >
              <span>Launch Ziga</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ziga. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ziga POS</span>
            <span>Ziga Pay</span>
            <a
              href="https://pos.zigga.io"
              className="hover:text-slate-300 font-mono"
            >
              pos.zigga.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
