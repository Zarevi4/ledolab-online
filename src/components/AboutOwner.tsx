"use client";

import { motion } from "framer-motion";
import { Award, Globe, TrendingUp, Users } from "lucide-react";
import type { ReactNode } from "react";

const highlights: { icon: ReactNode; title: string; desc: string; color: string; iconBg: string }[] = [
  {
    icon: <TrendingUp size={20} strokeWidth={1.8} />,
    title: "Performance-маркетинг",
    desc: "Специализация на performance-рекламе и масштабировании eCommerce-проектов с прозрачными KPI.",
    color: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: <Globe size={20} strokeWidth={1.8} />,
    title: "Международный опыт",
    desc: "Практика в Европе, США и СНГ. Работаем с бизнесами по всему миру на разных рынках.",
    color: "text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: <Award size={20} strokeWidth={1.8} />,
    title: "Системный маркетинг",
    desc: "Построение системного маркетинга: от стратегии и аудита до запуска и масштабирования.",
    color: "text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    icon: <Users size={20} strokeWidth={1.8} />,
    title: "Команда под ключ",
    desc: "Вы получаете команду профессионалов — от таргетолога до аналитика — по цене одного специалиста.",
    color: "text-rose-700",
    iconBg: "bg-rose-100",
  },
];

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
});

export default function AboutOwner() {
  return (
    <section id="about" className="py-28 sm:py-36 px-6 lg:px-8 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-14"
        >
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">
            О владельце
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            Денис Ледовской — <span className="gradient-text">основатель</span> LedoLab Digital
          </h2>
          <p className="mt-4 text-[16px] text-ink-light leading-relaxed">
            Маркетолог с 10+ годами опыта и практикой в Европе, США и СНГ.
            Специализируется на построении системного маркетинга, performance-рекламе
            и масштабировании eCommerce-проектов. За 2024 год вложено в рекламу
            более 1&nbsp;500&nbsp;000&nbsp;$.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              {...fade(i)}
              className="group p-6 rounded-[20px] border border-border bg-surface hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-500"
            >
              <div
                className={`w-10 h-10 rounded-xl ${h.iconBg} ${h.color} flex items-center justify-center mb-4`}
              >
                {h.icon}
              </div>
              <h3 className="font-heading text-[16px] font-semibold text-ink mb-1.5">
                {h.title}
              </h3>
              <p className="text-[13px] text-ink-light leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
