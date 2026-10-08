import React from "react";

interface ZigaLogoProps {
  className?: string;
  size?: number;
}

export default function ZigaLogo({
  className = "",
  size = 32,
}: ZigaLogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Clean Solid Navy Square with Plain Crisp White 'Z' */}
      <div
        className="flex items-center justify-center rounded-lg shadow-sm"
        style={{
          width: size,
          height: size,
          backgroundColor: "#0a192f",
        }}
      >
        <span
          className="text-white font-black leading-none select-none"
          style={{
            fontSize: `${Math.round(size * 0.58)}px`,
            fontFamily: "var(--font-plus-jakarta), sans-serif",
            letterSpacing: "-0.05em",
          }}
        >
          Z
        </span>
      </div>
    </div>
  );
}
