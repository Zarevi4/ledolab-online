"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ZoomIn, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Fact } from "@/lib/facts-data";
import { facts } from "@/lib/facts-data";
import { useI18n } from "@/lib/i18n/context";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FactPageClient({ fact }: { fact: Fact }) {
  const { locale } = useI18n();
  const title = fact.titles[locale] || fact.titles.ru;
  const text = fact.texts[locale] || fact.texts.ru;
  const idx = facts.findIndex((f) => f.id === fact.id);
  const prev = idx > 0 ? facts[idx - 1] : null;
  const next = idx < facts.length - 1 ? facts[idx + 1] : null;
  const [lightbox, setLightbox] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-[700px] mx-auto px-6 lg:px-8 py-12">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link href="/#stats" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-light hover:text-ink transition-colors mb-8">
            <ArrowLeft size={14} /> Назад
          </Link>
        </motion.div>

        {/* Number + Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-start gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-xl gradient-bg text-white flex items-center justify-center text-[18px] font-bold shrink-0">
            {fact.num}
          </div>
          <h1 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-ink leading-[1.15]">
            {title}
          </h1>
        </motion.div>

        {/* Image as clickable card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="group relative rounded-[16px] border border-border overflow-hidden bg-surface cursor-pointer mb-8"
          onClick={() => setLightbox(true)}
        >
          {/* Watermark */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <span className="font-heading text-[32px] font-bold select-none tracking-wide rotate-[-15deg] text-black/15 dark:text-white/15">LedoLab</span>
          </div>
          {/* Zoom hint */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
              <ZoomIn size={18} className="text-ink" />
            </div>
          </div>
          <Image
            src={fact.image}
            alt={title}
            width={700}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="text-[17px] text-ink-light leading-relaxed mb-10"
        >
          {text}
        </motion.p>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          {prev ? (
            <Link href={`/facts/${prev.id}`} className="text-[13px] font-medium text-ink-light hover:text-accent transition-colors">
              &larr; {prev.titles[locale] || prev.titles.ru}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/facts/${next.id}`} className="text-[13px] font-medium text-ink-light hover:text-accent transition-colors">
              {next.titles[locale] || next.titles.ru} &rarr;
            </Link>
          ) : <span />}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => { setLightbox(false); setZoomed(false); }}
          >
            <button
              onClick={() => { setLightbox(false); setZoomed(false); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-surface/20 backdrop-blur flex items-center justify-center text-white hover:bg-surface/30 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-2xl overflow-auto ${
                zoomed ? "w-full max-w-[95vw] max-h-[95vh] cursor-zoom-out" : "w-full max-w-[1000px] max-h-[85vh] cursor-zoom-in"
              }`}
              onClick={(e) => { e.stopPropagation(); setZoomed(!zoomed); }}
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <span className="font-heading text-[48px] sm:text-[64px] font-bold select-none tracking-wide rotate-[-15deg]" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}>
                  <span className="text-black/20">LedoLab</span>
                  <span className="absolute inset-0 text-white/20">LedoLab</span>
                </span>
              </div>
              <Image
                src={fact.image}
                alt={title}
                width={1800}
                height={1200}
                className={`bg-[#0d0d12] rounded-2xl transition-all duration-300 ${
                  zoomed ? "w-[1800px] max-w-none" : "w-full h-auto max-h-[85vh] object-contain"
                }`}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
