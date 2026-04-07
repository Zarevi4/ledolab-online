"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Process() {
  const { t } = useI18n();
  return (
    <section className="py-28 sm:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.6 }} className="max-w-[560px] mb-14">
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.process.tag}</span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {t.process.title} <span className="gradient-text">{t.process.titleAccent}</span>
          </h2>
          <p className="mt-4 text-[16px] text-ink-light leading-relaxed">{t.process.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.process.steps.map((step, i) => (
            <motion.div key={i} {...fade(i)} className="group relative p-6 rounded-[20px] border border-border bg-surface hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-500">
              <div className="w-10 h-10 rounded-xl gradient-bg text-white flex items-center justify-center mb-4 text-[14px] font-bold">{i + 1}</div>
              <h3 className="font-heading text-[16px] font-semibold text-ink mb-1.5">{step.title}</h3>
              <p className="text-[13px] text-ink-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
