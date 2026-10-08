import React from "react";

interface ZigaLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  theme?: "light" | "dark";
}

export default function ZigaLogo({
  className = "",
  size = 32,
  showText = true,
  theme = "light",
}: ZigaLogoProps) {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Z Glyph */}
      <div
        className="relative flex items-center justify-center rounded-lg shadow-sm"
        style={{
          width: size,
          height: size,
          backgroundColor: "#0b1d3a",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[68%] h-[68%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="zigaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="60%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#1b5ebe" />
            </linearGradient>
            <linearGradient id="zigaWhite" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>

          {/* Top Bar */}
          <path d="M16 22 H84 L72 36 H28 L16 22Z" fill="url(#zigaGrad)" />

          {/* Dynamic Angular Diagonal */}
          <path d="M72 34 L32 72 H48 L86 38 L72 34Z" fill="url(#zigaWhite)" />
          <path d="M60 42 L24 76 H16 L52 42 H60Z" fill="url(#zigaGrad)" />

          {/* Bottom Bar */}
          <path d="M16 78 L28 64 H72 L84 78 H16Z" fill="url(#zigaGrad)" />

          {/* Precision Accents */}
          <circle cx="86" cy="22" r="3.5" fill="#00f2fe" />
          <circle cx="14" cy="78" r="3.5" fill="#38bdf8" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={`font-sans text-xl font-black tracking-tight leading-none ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Ziga
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded uppercase font-mono tracking-wider bg-blue-50 text-[#1b5ebe] border border-blue-200">
            POS
          </span>
        </div>
      )}
    </div>
  );
}
