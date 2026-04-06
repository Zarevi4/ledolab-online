"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Fact } from "@/lib/facts-data";
import { facts } from "@/lib/facts-data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FactPageClient({ fact }: { fact: Fact }) {
  const idx = facts.findIndex((f) => f.id === fact.id);
  const prev = idx > 0 ? facts[idx - 1] : null;
  const next = idx < facts.length - 1 ? facts[idx + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image src={fact.image} alt={fact.titleRu} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="font-heading text-[48px] font-bold select-none tracking-wide rotate-[-15deg] text-white/15">LedoLab</span>
        </div>
        <div className="absolute top-6 left-6">
          <Link href="/#stats" className="inline-flex items-center gap-2 text-[13px] font-medium text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur px-3 py-1.5 rounded-full">
            <ArrowLeft size={14} /> Назад
          </Link>
        </div>
        <div className="absolute top-6 right-6 w-12 h-12 rounded-xl gradient-bg text-white flex items-center justify-center text-[18px] font-bold">
          {fact.num}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[700px] mx-auto px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-ink leading-[1.15] mb-6"
        >
          {fact.titleRu}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="text-[17px] text-ink-light leading-relaxed mb-10"
        >
          {fact.textRu}
        </motion.p>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          {prev ? (
            <Link href={`/facts/${prev.id}`} className="text-[13px] font-medium text-ink-light hover:text-accent transition-colors">
              &larr; {prev.titleRu}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/facts/${next.id}`} className="text-[13px] font-medium text-ink-light hover:text-accent transition-colors">
              {next.titleRu} &rarr;
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  );
}
