"use client";

import { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
];

export default function LanguageToggle() {
  const [active, setActive] = useState("en");
  return (
    <div className="relative">
      <select
        value={active}
        onChange={(e) => setActive(e.target.value)}
        className="rounded-xl border border-[--border] bg-card px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-4 focus:ring-[--ring]/20"
        aria-label="Language selector"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}