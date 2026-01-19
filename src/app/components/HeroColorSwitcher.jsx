"use client";
import { useState } from "react";

export const HeroColorSwitcher = ({ children }) => {
  const presets = {
    emerald: { start: "#f8fafc", middle: "#eef2f7", end: "#e2e8f0" },
    blue: { start: "#e0f2fe", middle: "#bae6fd", end: "#7dd3fc" },
    gold: { start: "#fff7ed", middle: "#ffedd5", end: "#fed7aa" },
  };

  const [preset, setPreset] = useState("emerald");

  const applyPreset = (key) => {
    const colors = presets[key];
    document.documentElement.style.setProperty("--hero-gradient-start", colors.start);
    document.documentElement.style.setProperty("--hero-gradient-middle", colors.middle);
    document.documentElement.style.setProperty("--hero-gradient-end", colors.end);
    setPreset(key);
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        {Object.keys(presets).map((key) => (
          <button
            key={key}
            className={`px-3 py-1 rounded ${preset === key ? "bg-white/30" : "bg-white/10"} text-sm font-medium`}
            onClick={() => applyPreset(key)}
          >
            {key}
          </button>
        ))}
      </div>
      {children}
    </>
  );
};
