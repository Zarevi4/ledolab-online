"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function Stats() {
  const { t } = useI18n();
  return (
    <section className="py-20 sm:py-28 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.stats.tag}</span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {t.stats.title} <span className="gradient-text">{t.stats.titleAccent}</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.5, delay: 0.15 }} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {t.stats.items.map(({ value, label }) => (
            <div key={label} className="text-center py-7 rounded-[16px] border border-border bg-surface">
              <span className="block font-heading text-[28px] sm:text-[32px] font-bold gradient-text">{value}</span>
              <span className="text-[13px] text-ink-light mt-0.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
