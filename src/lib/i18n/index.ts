export { ru } from "./ru";
export { en } from "./en";
export { bg } from "./bg";
export { uk } from "./uk";
export type { Locale, Translations } from "./types";

import { ru } from "./ru";
import { en } from "./en";
import { bg } from "./bg";
import { uk } from "./uk";
import type { Locale, Translations } from "./types";

export const locales: Record<Locale, Translations> = { ru, en, bg, uk };

export const localeNames: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  bg: "BG",
  uk: "UA",
};

export function getTranslations(locale: Locale): Translations {
  return locales[locale] || ru;
}
