"use client";

import React, { useEffect, useState } from "react";
import ZigaLogo from "@/components/ZigaLogo";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 750);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 1150);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-400 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Z Logo */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute w-20 h-20 rounded-full bg-[#1b5ebe]/10 animate-ping" />
          <div className="relative z-10 transition-transform duration-500 scale-110">
            <ZigaLogo size={56} showText={false} />
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-1.5 font-sans">
          <span className="text-2xl font-bold tracking-tight text-slate-950">Ziga</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1b5ebe]" />
        </div>
        <p className="text-xs text-slate-400 tracking-widest uppercase font-mono mt-2">
          Retail & Payments
        </p>

        {/* Loading track */}
        <div className="w-36 h-1 bg-slate-100 rounded-full overflow-hidden mt-6">
          <div className="h-full bg-[#1b5ebe] rounded-full animate-progress" />
        </div>
      </div>
    </div>
  );
}
