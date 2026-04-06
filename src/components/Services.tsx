"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const fade = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
});

const plans = [
  {
    name: "Growth Starter System",
    price: 400,
    oldPrice: 1000,
    features: [
      "Facebook/Instagram Ads (1 источник)",
      "1 воронка продаж",
      "Базовый email-маркетинг",
      "CRO-оптимизация",
      "Базовая аналитика",
      "Ремаркетинг/Ретаргетинг",
      "Продажные офферы и креативы",
      "Анализ конкурентов и тест гипотез",
      "Партнёрские воронки",
      "CRM/ERP-интеграции",
      "Персональный менеджер + стратегия",
    ],
    breakdown: [
      { service: "Трафик (FB / IG)", price: "€500" },
      { service: "Воронка", price: "€200" },
      { service: "Email-маркетинг", price: "€100" },
      { service: "CRO", price: "€200" },
      { service: "Аналитика", price: "€100" },
    ],
    breakdownTotal: "€1000",
  },
  {
    name: "Growth System",
    price: 800,
    oldPrice: 2000,
    highlighted: true,
    features: [
      "2 источника трафика (Meta/TikTok/Google)",
      "2-3 воронки под разные сегменты",
      "Продажные офферы и креативы",
      "Email-маркетинг + авто-follow-up",
      "CRO (оптимизация конверсии)",
      "Кросс-платформенная аналитика + LTV",
      "Ремаркетинг/Ретаргетинг",
      "Анализ конкурентов и тест гипотез",
      "Партнёрские воронки",
      "CRM/ERP-интеграции",
      "Персональный менеджер + стратегия",
    ],
    breakdown: [
      { service: "Трафик (2 источника)", price: "€800" },
      { service: "Воронки (2-3)", price: "€400" },
      { service: "Email-маркетинг / дожим", price: "€200" },
      { service: "CRO", price: "€300" },
      { service: "Сквозная аналитика и LTV", price: "€300" },
    ],
    breakdownTotal: "€2000",
  },
  {
    name: "Growth Full System Enterprise",
    price: 1500,
    oldPrice: 3500,
    features: [
      "Все ключевые источники (Meta/TikTok/Google + нишевые)",
      "5+ воронок под разные сегменты",
      "Продажные офферы и креативы",
      "Email, SMS + авто-follow-up",
      "CRO + Conversion Rating",
      "Кросс-платформенная аналитика, LTV, ROI",
      "Ремаркетинг/Ретаргетинг",
      "Анализ конкурентов и тест гипотез",
      "Партнёрские воронки",
      "Полные CRM/ERP/BI-интеграции",
      "Персональный менеджер + стратегия",
    ],
    breakdown: [
      { service: "Трафик и источники", price: "€800" },
      { service: "Воронки (5+)", price: "€500" },
      { service: "Email / SMS / дожим", price: "€400" },
      { service: "CRO + Conversion Rating", price: "€400" },
      { service: "Сквозная аналитика, LTV, ROI", price: "€400" },
      { service: "Affiliate / партнёрки", price: "€400" },
      { service: "Персональный менеджер + стратегия", price: "€300" },
      { service: "Разбор конкурентов + гипотезы", price: "€300" },
    ],
    breakdownTotal: "€3500",
  },
];

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-28 sm:py-36 bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Promo banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold text-ink mb-4">
            {t.services.title} <span className="gradient-text">{t.services.titleAccent}</span>
          </h2>
          <div className="inline-block p-4 rounded-2xl gradient-bg">
            <p className="text-[16px] font-bold text-white">
              {t.hero.promoPrice}{" "}
              <span className="text-white/60 line-through">{t.hero.promoOld}</span>
            </p>
            <p className="text-[14px] text-white/80 mt-1">{t.hero.promoDesc}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} {...fade(i)} className={`relative group rounded-[20px] border bg-surface transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] flex flex-col ${plan.highlighted ? "border-accent/30 shadow-[0_8px_32px_rgba(37,99,235,0.08)]" : "border-border hover:border-accent/20"}`}>
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 gradient-bg text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  <Star size={12} />{t.services.popular}
                </div>
              )}

              {/* Features */}
              <div className="p-6 flex-1">
                <h3 className="font-heading text-[18px] font-semibold text-ink mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="font-heading text-[36px] font-bold gradient-text">€{plan.price}</span>
                  <span className="text-[14px] text-ink-faint line-through">€{plan.oldPrice}</span>
                  <span className="text-[14px] text-ink-light">{t.services.perMonth}</span>
                </div>
                <ul className="space-y-2 mb-5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-ink-light leading-relaxed">
                      <Check size={14} className="text-accent mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price breakdown table */}
              <div className="px-6 pb-4">
                <p className="text-[12px] font-semibold text-ink-faint mb-2 text-center">Если заказывать по отдельности:</p>
                <table className="w-full text-[12px] border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-1.5 text-ink-faint font-semibold">Услуга</th>
                      <th className="text-right py-1.5 text-ink-faint font-semibold">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.breakdown.map((row) => (
                      <tr key={row.service} className="border-b border-border/50">
                        <td className="py-1.5 text-ink-light">{row.service}</td>
                        <td className="py-1.5 text-right text-ink-light">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-center text-[13px] font-bold text-ink">
                  Итого: <span className="line-through text-ink-faint">{plan.breakdownTotal}</span> / месяц
                </p>
              </div>

              {/* CTA button at very bottom */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("select-service", { detail: plan.name }));
                  }}
                  className={`block w-full text-center text-[14px] font-semibold py-[11px] rounded-xl transition-all ${plan.highlighted ? "gradient-bg text-white hover:opacity-90" : "border border-border text-ink hover:border-accent/40 hover:text-accent"}`}
                >
                  {t.services.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
