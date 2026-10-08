"use client";

import React, { useState, useEffect } from "react";
import {
  Store,
  CreditCard,
  Package,
  Layers,
  Sparkles,
} from "lucide-react";

const orbitNodes = [
  {
    id: "pos",
    name: "POS Register",
    role: "Offline Sales",
    icon: Store,
    color: "#1b5ebe",
    angle: 270, // Top
  },
  {
    id: "pay",
    name: "Ziga Pay",
    role: "MoMo & QR",
    icon: CreditCard,
    color: "#0a192f",
    angle: 342, // Top-right
  },
  {
    id: "stock",
    name: "Stock & Depot",
    role: "Live Inventory",
    icon: Package,
    color: "#1b5ebe",
    angle: 54, // Bottom-right
  },
  {
    id: "ebm",
    name: "RRA EBM",
    role: "Fiscal Invoicing",
    icon: Layers,
    color: "#0a192f",
    angle: 126, // Bottom-left
  },
  {
    id: "ai",
    name: "Analytics",
    role: "Daily Revenue",
    icon: Sparkles,
    color: "#1b5ebe",
    angle: 198, // Top-left
  },
];

export default function EcosystemOrbit() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-cycle through the nodes every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % orbitNodes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const activeNode = orbitNodes[activeIdx];

  // Circle radius
  const radius = 145; // px from center
  const center = 175; // container is 350x350

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none py-4">
      {/* Outer Orbit Circle Guide */}
      <div className="absolute w-[290px] h-[290px] rounded-full border border-slate-300/80 shadow-[0_0_40px_rgba(27,94,190,0.06)]" />

      {/* Middle Orbit Track with Soft Spin */}
      <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-[#1b5ebe]/25 animate-spin-slow" />

      {/* Center Circle Hub */}
      <div className="relative z-20 w-32 h-32 rounded-full bg-white border border-slate-200 shadow-lg flex flex-col items-center justify-center text-center p-3 transition-transform duration-500">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
          ZIGA
        </span>
        <h4 className="text-base font-bold text-slate-900 mt-0.5 leading-tight">
          {activeNode.name}
        </h4>
        <span className="text-[10px] text-[#1b5ebe] font-semibold mt-0.5">
          {activeNode.role}
        </span>

        {/* Small Active Indicator Dot */}
        <div className="flex items-center gap-1 mt-1.5">
          {orbitNodes.map((_, i) => (
            <span
              key={i}
              className={`w-1 h-1 rounded-full transition-all ${
                i === activeIdx ? "w-3 bg-[#1b5ebe]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Orbiting Satellite Nodes */}
      {orbitNodes.map((node, idx) => {
        const isActive = idx === activeIdx;
        const rad = (node.angle * Math.PI) / 180;
        const x = center + radius * Math.cos(rad) - 28; // 28 is half node size (56px)
        const y = center + radius * Math.sin(rad) - 28;

        const IconComponent = node.icon;

        return (
          <button
            key={node.id}
            onClick={() => setActiveIdx(idx)}
            style={{ left: `${x}px`, top: `${y}px` }}
            className={`absolute z-30 flex flex-col items-center transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group`}
          >
            {/* Circular Node Icon Container */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                isActive
                  ? "bg-[#1b5ebe] text-white scale-110 shadow-[0_8px_20px_rgba(27,94,190,0.35)] ring-4 ring-[#1b5ebe]/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:scale-105"
              }`}
            >
              <IconComponent className="w-5 h-5" />
            </div>

            {/* Node Label Below */}
            <div className="mt-1.5 text-center">
              <span
                className={`text-[11px] font-bold block leading-tight transition-colors ${
                  isActive ? "text-slate-950 font-bold" : "text-slate-500 group-hover:text-slate-800"
                }`}
              >
                {node.name}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
