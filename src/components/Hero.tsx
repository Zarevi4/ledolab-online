"use client";

import { motion } from "framer-motion";
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
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent-warm/[0.05] blur-[100px]" />
      </div>
      <div className="relative max-w-[780px] text-center">
        <motion.div {...fade(0.15)}>
          <span className="inline-block text-[12px] font-semibold tracking-[0.25em] uppercase text-accent mb-6">
            {t.hero.tag}
          </span>
        </motion.div>
        <motion.h1 {...fade(0.25)} className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink">
          {t.hero.title}
          <br />
          <span className="gradient-text">{t.hero.titleAccent}</span>
        </motion.h1>
        <motion.p {...fade(0.4)} className="mt-5 text-[17px] sm:text-[18px] leading-[1.7] text-ink-light max-w-[600px] mx-auto">
          {t.hero.subtitle}
        </motion.p>
        <motion.div {...fade(0.5)} className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-accent-warm/30 bg-accent-warm/5 px-5 py-3">
          <span className="text-[14px] font-semibold text-accent-warm">{t.hero.promoPrice}</span>
          <span className="text-[13px] text-ink-faint line-through">{t.hero.promoOld}</span>
          <span className="text-[13px] text-ink-light">{t.hero.promoDesc}</span>
        </motion.div>
        <motion.div {...fade(0.6)} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contact" className="gradient-bg text-white font-semibold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity">
            {t.hero.ctaPrimary}
          </a>
          <a href="#services" className="text-ink font-medium text-[14px] px-7 py-[13px] rounded-full border border-border hover:border-accent/40 transition-colors">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
