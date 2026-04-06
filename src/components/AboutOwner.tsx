"use client";

import { motion } from "framer-motion";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";
import type { ReactNode } from "react";

const icons: { icon: ReactNode; color: string; iconBg: string }[] = [
  { icon: <TrendingUp size={20} strokeWidth={1.8} />, color: "text-blue-700", iconBg: "bg-blue-100" },
  { icon: <Globe size={20} strokeWidth={1.8} />, color: "text-emerald-700", iconBg: "bg-emerald-100" },
  { icon: <Award size={20} strokeWidth={1.8} />, color: "text-amber-700", iconBg: "bg-amber-100" },
  { icon: <Users size={20} strokeWidth={1.8} />, color: "text-rose-700", iconBg: "bg-rose-100" },
];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function AboutOwner() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-28 sm:py-36 px-6 lg:px-8 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        {/* Owner card: photo left + text right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 mb-14"
        >
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-surface aspect-[3/4] md:aspect-auto">
            <Image
              src="/images/homepage/owner-full.jpg"
              alt="Денис Ледовской"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.about.tag}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              {t.about.title} <span className="gradient-text">{t.about.titleAccent}</span> LedoLab Digital
            </h2>
            <div className="mt-4 w-12 h-[3px] bg-ink/20 rounded-full" />
            <p className="mt-4 text-[16px] text-ink-light leading-relaxed">{t.about.bio}</p>

            {/* Google Reviews badge */}
            <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-2.5 self-start">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <div className="text-[12px]">
                <span className="font-bold text-ink">5.0</span>
                <span className="text-ink-faint"> / 5 – </span>
                <span className="text-ink-light">56 reviews on Google</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.about.highlights.map((h, i) => (
            <motion.div key={h.title} {...fade(i)} className="group p-6 rounded-[20px] border border-border bg-surface hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-500">
              <div className={`w-10 h-10 rounded-xl ${icons[i].iconBg} ${icons[i].color} flex items-center justify-center mb-4`}>
                {icons[i].icon}
              </div>
              <h3 className="font-heading text-[16px] font-semibold text-ink mb-1.5">{h.title}</h3>
              <p className="text-[13px] text-ink-light leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
