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
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
    >
      {/* Standalone Vector Z Glyph without box background */}
      <svg
        viewBox="0 0 100 100"
        style={{ width: size, height: size }}
        className="shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Horizontal Bar */}
        <path d="M14 20 H86 L74 36 H26 L14 20Z" fill="#1b5ebe" />
        {/* Crisp Center Diagonal */}
        <path d="M74 34 L28 76 H46 L90 38 L74 34Z" fill={isDark ? "#ffffff" : "#0a192f"} />
        <path d="M60 42 L22 80 H14 L52 42 H60Z" fill="#1b5ebe" />
        {/* Bottom Horizontal Bar */}
        <path d="M14 80 L26 64 H74 L86 80 H14Z" fill="#1b5ebe" />
      </svg>

      {showText && (
        <span
          className={`font-sans text-xl font-bold tracking-tight leading-none ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Ziga
        </span>
      )}
    </div>
  );
}
