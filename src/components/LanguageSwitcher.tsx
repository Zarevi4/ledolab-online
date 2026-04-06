"use client";

import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { localeNames } from "@/lib/i18n";

const langs: Locale[] = ["ru", "uk", "en", "bg"];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center rounded-full border border-border bg-surface overflow-hidden">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2.5 py-1 text-[11px] font-semibold tracking-wider transition-all ${
            locale === l
              ? "gradient-bg text-white"
              : "text-ink-faint hover:text-ink"
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
