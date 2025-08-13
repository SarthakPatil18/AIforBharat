"use client";

import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-[--border]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-[--accent]" />
          <span className="text-lg font-semibold tracking-tight">LocalLens</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="h-9 w-9 rounded-full border border-[--border] bg-muted" />
        </div>
      </div>
    </header>
  );
}