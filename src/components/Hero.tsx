"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const ease = [0.16, 1, 0.3, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[100svh] flex items-center px-6 lg:px-8 pt-20 pb-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent-warm/[0.05] blur-[100px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.div {...fade(0.15)}>
            <span className="inline-block text-[12px] font-semibold tracking-[0.25em] uppercase text-accent mb-6">
              {t.hero.tag}
            </span>
          </motion.div>
          <motion.h1 {...fade(0.25)} className="font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink">
            {t.hero.title}
            <br />
            <span className="gradient-text">{t.hero.titleAccent}</span>
          </motion.h1>
          <motion.div {...fade(0.4)} className="mt-5 space-y-2">
            {t.hero.subtitle.split('. ').filter(Boolean).map((line, i) => (
              <p key={i} className="text-[16px] leading-[1.7] text-ink-light">
                {line}{!line.endsWith('.') ? '.' : ''}
              </p>
            ))}
          </motion.div>
          <motion.div {...fade(0.55)} className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <a href="#services" className="text-ink font-medium text-[14px] px-7 py-[13px] rounded-full border border-border hover:border-accent/40 transition-colors">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="rounded-[20px] border border-border bg-surface p-6 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
        >
          {/* Promo badge */}
          <div className="mb-5 p-4 rounded-xl gradient-bg">
            <p className="text-[15px] font-bold text-white">
              {t.hero.promoPrice}{" "}
              <span className="text-white/60 line-through text-[13px] font-normal">{t.hero.promoOld}</span>
            </p>
            <p className="text-[13px] text-white/80 mt-0.5">{t.hero.promoDesc}</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input
              type="text"
              placeholder={t.contact.name}
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <input
              type="tel"
              placeholder="+359 (000) 000-000"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <input
              type="email"
              placeholder="your_email@gmail.com"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <input
              type="url"
              placeholder="www.your_site.com"
              className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <button
              type="submit"
              className="w-full gradient-bg text-white text-[15px] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              {t.hero.ctaPrimary}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
