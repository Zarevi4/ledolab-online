"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useI18n();

  return (
    <section className="py-28 sm:py-36 bg-bg-alt">
      <div className="max-w-[720px] mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.faq.tag}</span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {t.faq.title} <span className="gradient-text">{t.faq.titleAccent}</span>
          </h2>
        </motion.div>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-[16px] border border-border bg-surface overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-heading text-[15px] font-semibold text-ink pr-4">{item.question}</span>
                <ChevronDown size={18} className={`text-ink-faint shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                    <div className="px-5 pb-5 text-[14px] text-ink-light leading-relaxed">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-center">
          <a href="#contact" className="gradient-bg text-white font-semibold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity inline-block">{t.faq.cta}</a>
        </motion.div>
      </div>
    </section>
  );
}
