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
      {/* Clean Solid Navy Badge with Crisp White Geometric Z */}
      <div
        className="flex items-center justify-center rounded-lg shadow-sm"
        style={{
          width: size,
          height: size,
          backgroundColor: "#0a192f",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[66%] h-[66%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Bar */}
          <path d="M16 22 H84 L72 36 H28 L16 22Z" fill="#1b5ebe" />
          {/* Main Diagonal */}
          <path d="M72 34 L32 72 H48 L86 38 L72 34Z" fill="#ffffff" />
          <path d="M60 42 L24 76 H16 L52 42 H60Z" fill="#1b5ebe" />
          {/* Bottom Bar */}
          <path d="M16 78 L28 64 H72 L84 78 H16Z" fill="#1b5ebe" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-sans text-xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Ziga
          </span>
        </div>
      )}
    </div>
  );
}
