"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Lightbulb, Trophy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "@/lib/data";
import { caseStudies } from "@/lib/data";
import ContactModal from "@/components/ContactModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function CasePageClient({ caseStudy: cs }: { caseStudy: CaseStudy }) {
  const related = caseStudies.filter((c) => c.id !== cs.id && c.category === cs.category).slice(0, 3);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className={`relative bg-gradient-to-br ${cs.gradient} py-20 sm:py-28 px-6 lg:px-8`}>
        <div className="max-w-[900px] mx-auto">
          <motion.div {...fade(0.1)}>
            <Link
              href="/#cases"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-light hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Все кейсы
            </Link>
          </motion.div>

          <motion.div {...fade(0.2)}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-[5px] rounded-full ${cs.badge} mb-4`}>
              {cs.category}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.3)}
            className="font-heading text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.025em] text-ink"
          >
            {cs.title}
          </motion.h1>

          <motion.p
            {...fade(0.4)}
            className="mt-4 text-[17px] text-ink-light leading-relaxed max-w-[640px]"
          >
            {cs.subtitle}
          </motion.p>

          {/* Channels */}
          <motion.div {...fade(0.5)} className="mt-6 flex flex-wrap gap-2">
            {cs.channels.map((ch) => (
              <span
                key={ch}
                className="px-3 py-1 text-[12px] font-medium rounded-full bg-white/60 backdrop-blur text-ink"
              >
                {ch}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="px-6 lg:px-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {cs.metrics.map((m) => (
            <div
              key={m.label}
              className="text-center py-5 rounded-[16px] border border-border bg-surface shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            >
              <span className="block font-heading text-[24px] sm:text-[28px] font-bold gradient-text">
                {m.value}
              </span>
              <span className="text-[12px] text-ink-light mt-0.5">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-20 sm:py-28">
        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
              <Target size={20} strokeWidth={1.8} />
            </div>
            <h2 className="font-heading text-[22px] font-bold text-ink">Задача</h2>
          </div>
          <p className="text-[16px] text-ink-light leading-relaxed pl-[52px]">
            {cs.challenge}
          </p>
        </motion.div>

        {/* Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Lightbulb size={20} strokeWidth={1.8} />
            </div>
            <h2 className="font-heading text-[22px] font-bold text-ink">Стратегия</h2>
          </div>
          <ul className="space-y-3 pl-[52px]">
            {cs.strategy.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-ink-light leading-relaxed">
                <Check size={16} className="text-accent mt-1 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Trophy size={20} strokeWidth={1.8} />
            </div>
            <h2 className="font-heading text-[22px] font-bold text-ink">Результаты</h2>
          </div>
          <ul className="space-y-3 pl-[52px]">
            {cs.results.map((r, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-ink-light leading-relaxed">
                <Check size={16} className="text-emerald-600 mt-1 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[20px] border border-border bg-surface p-8 sm:p-10 text-center"
        >
          <h3 className="font-heading text-[22px] font-bold text-ink mb-3">
            Хотите такие же <span className="gradient-text">результаты</span>?
          </h3>
          <p className="text-[15px] text-ink-light mb-6 max-w-[420px] mx-auto">
            Оставьте заявку — мы проведём бесплатную консультацию и составим план роста для вашего бизнеса.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="gradient-bg text-white font-semibold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity inline-block"
          >
            Оставить заявку
          </button>
        </motion.div>

        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />

        {/* Related cases */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h3 className="font-heading text-[20px] font-bold text-ink mb-6">
              Похожие кейсы
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rc) => (
                <Link key={rc.id} href={`/cases/${rc.id}`}>
                  <div className="group rounded-[16px] border border-border bg-surface p-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-500">
                    <span className={`inline-block text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${rc.badge} mb-3`}>
                      {rc.category}
                    </span>
                    <h4 className="font-heading text-[15px] font-semibold text-ink group-hover:text-accent transition-colors">
                      {rc.title}
                    </h4>
                    <p className="mt-1.5 text-[12px] text-ink-light line-clamp-2">
                      {rc.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
