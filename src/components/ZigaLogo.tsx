import React from "react";

interface ZigaLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  animated?: boolean;
}

export default function ZigaLogo({
  className = "",
  size = 36,
  showText = true,
  animated = true,
}: ZigaLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Futuristic Vector "Z" Glyph with Layered Cyber Cuts & Radiant Gradient Glow */}
      <div
        className="relative flex items-center justify-center rounded-xl p-0.5"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Outer ambient glow */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-tr from-[#1b5ebe] via-[#00f2fe] to-[#4facfe] opacity-75 blur-md ${
            animated ? "animate-pulse" : ""
          }`}
          style={{ transform: "scale(0.9)" }}
        />

        {/* Inner high-tech badge container */}
        <div className="relative w-full h-full rounded-xl bg-[#081326] border border-cyan-400/30 flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Subtle circuit lines background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 100 100"
          >
            <path
              d="M0 20 H100 M0 50 H100 M0 80 H100 M20 0 V100 M50 0 V100 M80 0 V100"
              stroke="#00f2fe"
              strokeWidth="0.5"
            />
          </svg>

          {/* Precision Designed "Z" Geometric Vector */}
          <svg
            viewBox="0 0 100 100"
            className="w-[72%] h-[72%] drop-shadow-[0_2px_10px_rgba(0,242,254,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="zigaGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#1b5ebe" />
              </linearGradient>
              <linearGradient id="zigaGradAccent" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#00f2fe" />
              </linearGradient>
            </defs>

            {/* Top Bar of Z with angled cut */}
            <path
              d="M18 22 H82 L72 36 H28 L18 22Z"
              fill="url(#zigaGradMain)"
            />

            {/* Center Dynamic Diagonal Slashes */}
            <path
              d="M74 34 L32 72 H48 L86 38 L74 34Z"
              fill="url(#zigaGradAccent)"
            />
            <path
              d="M62 42 L24 76 H16 L54 42 H62Z"
              fill="url(#zigaGradMain)"
              opacity="0.85"
            />

            {/* Bottom Bar of Z */}
            <path
              d="M18 78 L28 64 H72 L82 78 H18Z"
              fill="url(#zigaGradMain)"
            />

            {/* Futuristic Tech Dots */}
            <circle cx="86" cy="22" r="3.5" fill="#00f2fe" />
            <circle cx="14" cy="78" r="3.5" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xl font-black tracking-wider text-white font-mono">
              ZIGA
            </span>
            <span className="text-xs px-1.5 py-0.5 rounded font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              .io
            </span>
          </div>
          <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-1">
            Retail & Commerce OS
          </span>
        </div>
      )}
    </div>
  );
}
