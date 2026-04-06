"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { servicePlans } from "@/lib/data";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Services() {
  return (
    <section id="services" className="py-28 sm:py-36 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px] mb-14"
        >
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">
            Тарифы
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            Маркетинг под ключ —
            <br />
            <span className="gradient-text">выберите свой план</span>
          </h2>
          <p className="mt-4 text-[16px] text-ink-light leading-relaxed">
            От первой продажи до масштабирования. Каждый тариф включает
            персональную стратегию и ежемесячные отчёты с реальными цифрами.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicePlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              {...fade(i)}
              className={`relative group p-6 rounded-[20px] border bg-surface transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] ${
                plan.highlighted
                  ? "border-accent/30 shadow-[0_8px_32px_rgba(37,99,235,0.08)]"
                  : "border-border hover:border-accent/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 gradient-bg text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  <Star size={12} />
                  Популярный
                </div>
              )}

              <h3 className="font-heading text-[18px] font-semibold text-ink mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-heading text-[36px] font-bold gradient-text">
                  {plan.currency}{plan.price}
                </span>
                <span className="text-[14px] text-ink-faint line-through">
                  {plan.currency}{plan.oldPrice}
                </span>
                <span className="text-[14px] text-ink-light">{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[13px] text-ink-light leading-relaxed">
                    <Check size={15} className="text-accent mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center text-[14px] font-semibold py-[11px] rounded-xl transition-all ${
                  plan.highlighted
                    ? "gradient-bg text-white hover:opacity-90"
                    : "border border-border text-ink hover:border-accent/40 hover:text-accent"
                }`}
              >
                Подробнее
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
