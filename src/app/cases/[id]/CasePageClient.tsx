"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, Lightbulb, Trophy, Check, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import type { CaseStudy } from "@/lib/data";
import { caseStudies } from "@/lib/data";
import { caseFullContent } from "@/lib/case-content";
import ContactModal from "@/components/ContactModal";

const ease = [0.16, 1, 0.3, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function CasePageClient({ caseStudy: cs }: { caseStudy: CaseStudy }) {
  const related = caseStudies.filter((c) => c.id !== cs.id && c.category === cs.category).slice(0, 3);
  const full = caseFullContent[cs.id];
  const [modalOpen, setModalOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const closeLightbox = useCallback(() => { setLightbox(null); setZoomed(false); }, []);

  useEffect(() => {
    if (lightbox === null || !cs.images) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") { setLightbox((p) => (p !== null && p < cs.images!.length - 1 ? p + 1 : p)); setZoomed(false); }
      if (e.key === "ArrowLeft") { setLightbox((p) => (p !== null && p > 0 ? p - 1 : p)); setZoomed(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, cs.images]);

  return (
    <div className="min-h-screen">
      {/* Header with hero image */}
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

      {/* Hero image */}
      {cs.heroImage && (
        <div className="px-6 lg:px-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="max-w-[900px] mx-auto rounded-[16px] border border-border overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
          >
            <Image
              src={cs.heroImage}
              alt={cs.title}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      )}

      {/* Metrics bar */}
      <div className="px-6 lg:px-8 mt-8">
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
        {/* Intro */}
        {full?.intro && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-[16px] text-ink-light leading-relaxed">{full.intro}</p>
          </motion.div>
        )}

        {/* Goals */}
        {full?.goals && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">
                <Target size={20} strokeWidth={1.8} />
              </div>
              <h2 className="font-heading text-[22px] font-bold text-ink">Цели проекта</h2>
            </div>
            <ul className="space-y-2.5 pl-[52px]">
              {full.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-ink-light leading-relaxed">
                  <Check size={16} className="text-accent mt-1 shrink-0" />{g}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Starting situation */}
        {full?.situation && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-[14px] text-ink-faint italic leading-relaxed p-4 rounded-xl border border-border bg-bg-alt">{full.situation}</p>
          </motion.div>
        )}

        {/* Phases */}
        {full?.phases && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Lightbulb size={20} strokeWidth={1.8} />
              </div>
              <h2 className="font-heading text-[22px] font-bold text-ink">Стратегия и реализация</h2>
            </div>
            <div className="space-y-5 pl-[52px]">
              {full.phases.map((phase, i) => (
                <div key={i} className="rounded-[16px] border border-border bg-surface p-5">
                  <h3 className="font-heading text-[15px] font-semibold text-ink mb-2">{phase.title}</h3>
                  <p className="text-[14px] text-ink-light leading-relaxed">{phase.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Fallback: old strategy if no full content */}
        {!full && (
          <>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center"><Target size={20} strokeWidth={1.8} /></div>
                <h2 className="font-heading text-[22px] font-bold text-ink">Задача</h2>
              </div>
              <p className="text-[16px] text-ink-light leading-relaxed pl-[52px]">{cs.challenge}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center"><Lightbulb size={20} strokeWidth={1.8} /></div>
                <h2 className="font-heading text-[22px] font-bold text-ink">Стратегия</h2>
              </div>
              <ul className="space-y-3 pl-[52px]">
                {cs.strategy.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-ink-light leading-relaxed"><Check size={16} className="text-accent mt-1 shrink-0" />{s}</li>
                ))}
              </ul>
            </motion.div>
          </>
        )}

        {/* Screenshots gallery */}
        {cs.images && cs.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-[22px] font-bold text-ink mb-6">Скриншоты</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="group relative rounded-[12px] border border-border overflow-hidden bg-surface cursor-pointer"
                >
                  {/* Watermark */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <span className="font-heading text-[24px] sm:text-[32px] font-bold select-none tracking-wide rotate-[-15deg] text-black/15 dark:text-white/15">
                      LedoLab
                    </span>
                  </div>
                  {/* Zoom hint */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn size={18} className="text-ink" />
                    </div>
                  </div>
                  <Image
                    src={img}
                    alt={`${cs.title} – скриншот ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && cs.images && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-surface/20 backdrop-blur flex items-center justify-center text-white hover:bg-surface/30 transition-colors z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {lightbox > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); setZoomed(false); }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/20 backdrop-blur flex items-center justify-center text-white hover:bg-surface/30 transition-colors z-10"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {lightbox < cs.images.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); setZoomed(false); }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/20 backdrop-blur flex items-center justify-center text-white hover:bg-surface/30 transition-colors z-10"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl overflow-auto ${
                  zoomed ? "w-full max-w-[95vw] max-h-[95vh] cursor-zoom-out" : "w-full max-w-[1000px] max-h-[85vh] cursor-zoom-in"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed(!zoomed);
                }}
              >
                {/* Watermark in lightbox */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <span className="font-heading text-[48px] sm:text-[64px] font-bold select-none tracking-wide rotate-[-15deg]" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}>
                    <span className="text-black/20">LedoLab</span>
                    <span className="absolute inset-0 text-white/20">LedoLab</span>
                  </span>
                </div>
                <Image
                  src={cs.images[lightbox]}
                  alt={`${cs.title} – скриншот ${lightbox + 1}`}
                  width={1800}
                  height={1200}
                  className={`bg-[#0d0d12] rounded-2xl transition-all duration-300 ${
                    zoomed ? "w-[1800px] max-w-none" : "w-full h-auto max-h-[85vh] object-contain"
                  }`}
                  priority
                />
              </motion.div>

              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[13px] text-white/50 font-medium">
                {lightbox + 1} / {cs.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
          {full?.conclusion && (
            <p className="mt-6 pl-[52px] text-[15px] text-ink-light leading-relaxed p-4 rounded-xl border border-emerald-200/50 bg-emerald-50/30 dark:border-emerald-800/30 dark:bg-emerald-950/20">
              {full.conclusion}
            </p>
          )}
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
            Оставьте заявку – мы проведём бесплатную консультацию и составим план роста для вашего бизнеса.
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
                <Link key={rc.id} href={`/cases/${rc.id}`} className="block h-full">
                  <div className="group h-full rounded-[16px] border border-border bg-surface p-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-500 flex flex-col">
                    <span className={`inline-block text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${rc.badge} mb-3 self-start`}>
                      {rc.category}
                    </span>
                    <h4 className="font-heading text-[15px] font-semibold text-ink group-hover:text-accent transition-colors">
                      {rc.title}
                    </h4>
                    <p className="mt-1.5 text-[12px] text-ink-light line-clamp-2 flex-1">
                      {rc.subtitle}
                    </p>
                    <div className="mt-4 pt-3 border-t border-border flex items-center gap-1.5 text-[12px] font-semibold text-accent group-hover:gap-2.5 transition-all">
                      Перейти
                      <ArrowRight size={13} />
                    </div>
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
