"use client";

import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { localeNames } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const langs: Locale[] = ["ru", "uk", "en", "bg"];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border bg-surface text-[12px] font-semibold text-ink-light hover:text-ink hover:border-accent/30 transition-all"
      >
        {localeNames[locale]}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1.5 min-w-[80px] rounded-xl border border-border bg-surface shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden z-50">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full px-3.5 py-2 text-left text-[12px] font-semibold transition-colors ${
                locale === l
                  ? "gradient-bg text-white"
                  : "text-ink-light hover:text-ink hover:bg-bg-alt"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
