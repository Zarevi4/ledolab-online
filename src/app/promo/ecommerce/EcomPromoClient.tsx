"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, ShoppingCart, TrendingUp, DollarSign, BarChart3, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { caseStudies } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease },
});

const ecomCases = caseStudies.filter((c) => c.category === "E-Commerce" || c.category === "E-Commerce / Beauty");

export default function EcomPromo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg max-w-[480px] mx-auto overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-5 py-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] right-[-25%] w-[350px] h-[350px] rounded-full bg-emerald-500/[0.06] blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-15%] w-[250px] h-[250px] rounded-full bg-accent-warm/[0.08] blur-[80px]" />
        </div>

        <motion.div {...fade(0.1)} className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 mb-5">
            <ShoppingCart size={14} className="text-emerald-600" />
            <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">E-Commerce</span>
          </div>

          <h1 className="font-heading text-[30px] leading-[1.15] font-bold text-ink tracking-tight">
            От <span className="gradient-text">$0 до $118 000</span> за 90 дней
          </h1>

          <p className="mt-4 text-[15px] text-ink-light leading-relaxed">
            Запускаем e-commerce с нуля и масштабируем до $5K/день. Facebook, TikTok, Google Ads — подберём идеальный канал для вашего продукта.
          </p>

          {/* Metrics highlight */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              { icon: <TrendingUp size={16} />, value: "510%", label: "ROAS" },
              { icon: <DollarSign size={16} />, value: "$9", label: "CAC" },
              { icon: <BarChart3 size={16} />, value: "2400+", label: "продаж" },
            ].map((m) => (
              <div key={m.label} className="text-center py-3 rounded-2xl border border-border bg-surface">
                <div className="flex justify-center text-accent mb-1">{m.icon}</div>
                <span className="block font-heading text-[18px] font-bold gradient-text">{m.value}</span>
                <span className="text-[10px] text-ink-faint">{m.label}</span>
              </div>
            ))}
          </div>

          <a href="#ecom-form" className="mt-8 w-full gradient-bg text-white text-[15px] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Запустить e-commerce
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* E-commerce cases */}
      <section className="px-5 py-12 bg-bg-alt">
        <motion.div {...fade(0)}>
          <h2 className="font-heading text-[22px] font-bold text-ink mb-6">
            Кейсы <span className="gradient-text">e-commerce</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {ecomCases.map((cs, i) => (
            <motion.div key={cs.id} {...fade(i * 0.06)}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                {cs.heroImage && (
                  <div className="relative h-28 overflow-hidden">
                    <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" sizes="480px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-heading text-[15px] font-semibold text-ink">{cs.title}</h3>
                  <p className="mt-1 text-[12px] text-ink-light line-clamp-2">{cs.subtitle}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-center py-1.5 rounded-lg bg-bg-alt">
                        <span className="block text-[13px] font-bold gradient-text">{m.value}</span>
                        <span className="text-[9px] text-ink-faint">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="px-5 py-12">
        <motion.div {...fade(0)}>
          <h2 className="font-heading text-[22px] font-bold text-ink mb-6">Что вы получите</h2>
        </motion.div>
        <div className="space-y-3">
          {[
            "Настройка Meta Pixel, TikTok Pixel, GA4, GTM",
            "Тестирование креативов и аудиторий",
            "Масштабирование выигрышных связок",
            "Ремаркетинг и look-alike аудитории",
            "Еженедельные отчёты с KPI",
            "Личный менеджер и стратегия роста",
          ].map((item, i) => (
            <motion.div key={i} {...fade(i * 0.04)} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-surface">
              <Check size={16} className="text-emerald-600 mt-0.5 shrink-0" />
              <span className="text-[13px] text-ink-light">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="px-5 py-10 bg-bg-alt">
        <div className="space-y-3">
          {[
            { name: "Алексей К.", text: "Лиды выросли в 4 раза за 3 месяца." },
            { name: "Игорь П.", text: "Впервые за 3 года видим окупаемость маркетинга." },
          ].map((r, i) => (
            <div key={i} className="p-4 rounded-2xl border border-border bg-surface">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (<Star key={j} size={11} className="text-accent-warm fill-accent-warm" />))}
              </div>
              <p className="text-[13px] text-ink-light">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-1.5 text-[12px] font-semibold text-ink">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="ecom-form" className="px-5 py-12">
        <motion.div {...fade(0)} className="text-center mb-6">
          <h2 className="font-heading text-[22px] font-bold text-ink">Запустите <span className="gradient-text">e-commerce</span></h2>
          <p className="mt-2 text-[14px] text-ink-light">Расскажите о продукте — мы подберём стратегию</p>
        </motion.div>

        {submitted ? (
          <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5 text-center">
            <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4"><Check size={24} className="text-white" /></div>
            <h3 className="font-heading text-[18px] font-bold text-ink mb-2">Заявка отправлена!</h3>
            <p className="text-[14px] text-ink-light">Мы свяжемся с вами в ближайшие 24 часа.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
            <input type="text" placeholder="Ваше имя" required className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all" />
            <input type="tel" placeholder="Телефон или Telegram" required className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all" />
            <input type="url" placeholder="Ссылка на магазин (если есть)" className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all" />
            <textarea rows={3} placeholder="Какой продукт? Какие цели?" className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all resize-none" />
            <button type="submit" className="w-full gradient-bg text-white text-[15px] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Получить стратегию запуска
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 max-w-[480px] mx-auto p-3 bg-bg/90 backdrop-blur-xl border-t border-border">
        <a href="#ecom-form" className="w-full gradient-bg text-white text-[14px] font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2">
          <MessageCircle size={16} />
          Запустить e-commerce
        </a>
      </div>
      <div className="h-20" />
    </div>
  );
}
