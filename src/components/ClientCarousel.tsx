"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Aline Mukamana",
    role: "Supermarket Manager",
    location: "Kigali",
    message:
      "We reconcile daily cashier sales with physical stock in minutes. Before Ziga, closing our store every evening took our team almost an hour of counting receipts and manual cross-checking.",
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
      "Switching between barcode scanning and Ziga Pay mobile money was effortless. Our cashiers learned the interface in less than 20 minutes without needing special technical training.",
  },
  {
    name: "Patrick Nkurunziza",
    role: "Wholesale Beverage Distributor",
    location: "Kigali",
    message:
      "Managing warehouse transfers to our retail outlets is now real-time. Cashiers receive inventory digitally and we see payment flows consolidated across all registers instantly.",
  },
];

export default function ClientCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-move by 1 box every 6 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  // Get 2 items for carousel view
  const firstItem = reviews[startIndex];
  const secondItem = reviews[(startIndex + 1) % reviews.length];

  return (
    <div className="w-full max-w-5xl mx-auto select-none">
      {/* 2 Visible Review Boxes Side-by-Side on Tablet/Desktop, 1 on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
        {[firstItem, secondItem].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-9 shadow-sm hover:shadow-md flex flex-col justify-between min-h-[230px] transition-all hover:border-slate-300"
          >
            {/* Clean Message Body */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              "{item.message}"
            </p>

            {/* Client Name & Store Location */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.role} • <span className="font-semibold text-[#1b5ebe]">{item.location}</span>
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-100 text-[#1b5ebe] flex items-center justify-center font-bold text-xs">
                {item.name.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Controls - Centered, Fully Rounded, No Numbers */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Left Arrow Button */}
        <button
          onClick={prev}
          className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          aria-label="Previous review"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Step Indicator Moving Dots */}
        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === i ? "w-7 bg-[#1b5ebe]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={next}
          className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
          aria-label="Next review"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
