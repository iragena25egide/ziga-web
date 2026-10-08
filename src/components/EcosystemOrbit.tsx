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
    angle: 270, // Top
  },
  {
    id: "pay",
    name: "Ziga Pay",
    role: "MoMo & QR",
    icon: CreditCard,
    angle: 342, // Top-right
  },
  {
    id: "stock",
    name: "Stock & Depot",
    role: "Live Inventory",
    icon: Package,
    angle: 54, // Bottom-right
  },
  {
    id: "ebm",
    name: "RRA EBM",
    role: "Fiscal Invoicing",
    icon: Layers,
    angle: 126, // Bottom-left
  },
  {
    id: "ai",
    name: "Analytics",
    role: "Daily Revenue",
    icon: Sparkles,
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

  // Adjusted radius & center so 100% of satellites fit inside box with ample margin
  const radius = 105; // orbit distance
  const center = 150; // center coordinate in 300x300 viewBox

  return (
    <div className="w-full flex flex-col items-center justify-center select-none mb-6 lg:mb-12">
      {/* 300x300 Bounding Box ensuring no overflow */}
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {/* Outer Orbit Circle Ring */}
        <div className="absolute w-[215px] h-[215px] rounded-full border border-slate-300/80 shadow-[0_0_30px_rgba(27,94,190,0.06)]" />

        {/* Orbit Track with Smooth Dashed Spin */}
        <div className="absolute w-[215px] h-[215px] rounded-full border border-dashed border-[#1b5ebe]/30 animate-spin-slow" />

        {/* Center Circle Hub */}
        <div className="relative z-20 w-24 h-24 rounded-full bg-white border border-slate-200 shadow-md flex flex-col items-center justify-center text-center p-2 transition-transform duration-500">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
            ZIGA
          </span>
          <h4 className="text-xs font-bold text-slate-900 mt-0.5 leading-tight">
            {activeNode.name}
          </h4>
          <span className="text-[9px] text-[#1b5ebe] font-semibold mt-0.5">
            {activeNode.role}
          </span>

          {/* Active Step Indicator Dots */}
          <div className="flex items-center gap-1 mt-1">
            {orbitNodes.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === activeIdx ? "w-2.5 bg-[#1b5ebe]" : "w-1 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Orbiting Satellite Nodes */}
        {orbitNodes.map((node, idx) => {
          const isActive = idx === activeIdx;
          const rad = (node.angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);

          const IconComponent = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => setActiveIdx(idx)}
              style={{ left: `${x}px`, top: `${y}px` }}
              className="absolute z-30 flex flex-col items-center transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group"
            >
              {/* Circular Node Icon */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-[#1b5ebe] text-white scale-110 shadow-[0_6px_16px_rgba(27,94,190,0.35)] ring-3 ring-[#1b5ebe]/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:scale-105"
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </div>

              {/* Node Label Below */}
              <div className="mt-1 text-center whitespace-nowrap">
                <span
                  className={`text-[10px] font-bold block leading-tight transition-colors ${
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
    </div>
  );
}
