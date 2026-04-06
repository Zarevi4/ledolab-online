"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#cases", label: t.nav.cases },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-2xl border-border/60 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-[18px] font-bold tracking-tight text-ink"
        >
          <span className="gradient-text">LedoLab</span><span className="text-accent">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-ink-light hover:text-ink transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="tel:+380638619285"
            className="flex items-center gap-2 text-[13px] font-medium text-ink-light hover:text-accent transition-colors"
          >
            <Phone size={14} />
            +38063 861 92 85
          </a>
          <a
            href="#contact"
            className="gradient-bg text-white text-[13px] font-semibold px-5 py-[9px] rounded-full hover:opacity-90 transition-opacity"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="text-ink-light"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-bg border-t border-border px-6 pb-6 pt-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] text-ink-light hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center gradient-bg text-white text-[14px] font-semibold px-5 py-3 rounded-full"
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
