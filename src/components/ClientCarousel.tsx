"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ndizeye Olivier",
    role: "Sales Manager, NKM",
    business: "Clothes & Fashion Store",
    location: "Kigali",
    message:
      "Tracking diverse clothing sizes, fashion variants, and daily boutique sales used to create inventory discrepancies every week. With Ziga POS, every garment checkout is instantly recorded and our cashiers ring up clients faster than ever.",
  },
  {
    name: "RWANGEYO KEVIN",
    role: "CEO, EVALINK",
    business: "Smartphones & Electronics",
    location: "CHIC, Kigali",
    message:
      "Selling high-value phones and gadgets in CHIC requires absolute accuracy with serial numbers and instant payments. Ziga Pay integrated directly with our register so customers pay via MTN MoMo seamlessly with zero fake SMS risk.",
  },
  {
    name: "TETA IZIA DEISE",
    role: "CEO, Velora Luxury Beauty",
    business: "Perfumes & Body Lotions",
    location: "Kicukiro, Kigali",
    message:
      "Managing luxury perfume collections and skincare products across counter sales has never been this smooth. Ziga gives us real-time stock deductions, clean customer receipts, and accurate daily revenue reports right from our counter.",
  },
  {
    name: "Claude Mugabo",
    role: "Managing Director, Kigali Food Mart",
    business: "Supermarket & Groceries",
    location: "Nyarugenge, Kigali",
    message:
      "The offline desktop mode is a lifesaver during peak shopping hours when internet fluctuates. We continue scanning barcodes, printing thermal ESC/POS receipts, and the database automatically synchronizes without missing a single sale.",
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

            {/* Client Name, Business, Role & Location */}
            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  <span className="font-semibold text-slate-800">{item.role}</span>
                  {item.business && (
                    <span className="text-slate-400"> • {item.business}</span>
                  )}
                </p>
                <p className="text-[11px] font-semibold text-[#1b5ebe] mt-0.5">
                  {item.location}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#1b5ebe] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm border border-slate-200">
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
                startIndex === i
                  ? "w-7 bg-[#1b5ebe]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
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
