"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Aline Mukamana",
    role: "Supermarket Manager",
    location: "Kigali",
    message:
      "We reconcile daily cashier sales with physical stock in minutes. Before Ziga POS, closing our store every evening took our team almost an hour of counting receipts and manual cross-checking.",
  },
  {
    name: "Eric Ndayisaba",
    role: "Hardware Depot Owner",
    location: "Musanze",
    message:
      "Customer credit and loan tracking became completely transparent because every customer debt balance is recorded directly at checkout. It directly protected our working capital.",
  },
  {
    name: "Clarisse Uwimana",
    role: "Retail Store Lead",
    location: "Huye",
    message:
      "The offline desktop app and thermal printer support saved us multiple times when the local fiber network dropped during rush hours. We kept printing receipts without a single interruption.",
  },
  {
    name: "Jean Paul Habumugisha",
    role: "General Store Proprietor",
    location: "Rubavu",
    message:
      "Switching between barcode scanning and quick search is effortless. Our cashiers learned the interface in less than 20 minutes without needing any special technical training.",
  },
];

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto select-none">
      <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-sm min-h-[220px] flex flex-col justify-between">
        {/* Clean Message Body - No Rainbow Stars or AI Badges */}
        <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-normal">
          "{current.message}"
        </p>

        {/* Client Name & Location */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">{current.name}</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {current.role} • <span className="font-medium text-[#1b5ebe]">{current.location}</span>
            </p>
          </div>

          {/* Simple Clean Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">
              {currentIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
