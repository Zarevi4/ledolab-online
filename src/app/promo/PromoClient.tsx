"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Shield, Clock, Users, TrendingUp, Zap, MessageCircle } from "lucide-react";
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

const topCases = caseStudies.slice(0, 4);

export default function PromoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg max-w-[480px] mx-auto overflow-hidden">
      {/* Hero – full mobile screen */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-5 py-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-30%] w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] rounded-full bg-accent-warm/[0.08] blur-[80px]" />
        </div>

        <motion.div {...fade(0.1)} className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 mb-6">
            <Zap size={14} className="text-accent" />
            <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">Limited Offer</span>
          </div>

          <h1 className="font-heading text-[32px] leading-[1.15] font-bold text-ink tracking-tight">
            Получите <span className="gradient-text">50+ лидов</span> за 30 дней
          </h1>

          <p className="mt-4 text-[16px] text-ink-light leading-relaxed">
            Системный маркетинг под ключ. Не расход – а точка масштабирования вашего бизнеса.
          </p>

          {/* Price card */}
          <div className="mt-6 p-4 rounded-2xl border border-accent-warm/30 bg-accent-warm/5">
            <div className="flex items-baseline gap-3">
              <span className="text-[28px] font-bold gradient-text">19.99€</span>
              <span className="text-[16px] text-ink-faint line-through">100€</span>
              <span className="text-[11px] font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">-80%</span>
            </div>
            <p className="mt-1 text-[13px] text-ink-light">Полный маркетинг-аудит + пошаговый план роста</p>
          </div>

          {/* Benefits */}
          <div className="mt-6 space-y-3">
            {[
              "Аудит сайта, рекламы, воронки и конкурентов",
              "PDF-отчёт с пошаговыми рекомендациями",
              "Персональная стратегия роста трафика",
              "Команда профессионалов по цене 1 таргетолога",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <Check size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-[14px] text-ink-light">{b}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#promo-form"
            className="mt-8 w-full gradient-bg text-white text-[15px] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Начать рост сейчас
            <ArrowRight size={18} />
          </a>

          <p className="mt-3 text-center text-[11px] text-ink-faint">
            Свяжемся в течение 24 часов. Без спама.
          </p>
        </motion.div>
      </section>

      {/* Social proof – stats */}
      <section className="px-5 py-10 bg-bg-alt">
        <motion.div {...fade(0)} className="grid grid-cols-2 gap-3">
          {[
            { icon: <Clock size={18} />, value: "10+", label: "лет опыта" },
            { icon: <TrendingUp size={18} />, value: "$1.5M+", label: "в рекламу" },
            { icon: <Users size={18} />, value: "100+", label: "клиентов" },
            { icon: <Shield size={18} />, value: "50+", label: "лидов/мес" },
          ].map((s) => (
            <div key={s.label} className="text-center py-4 rounded-2xl border border-border bg-surface">
              <div className="flex justify-center text-accent mb-1">{s.icon}</div>
              <span className="block font-heading text-[22px] font-bold gradient-text">{s.value}</span>
              <span className="text-[11px] text-ink-faint">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Case studies proof */}
      <section className="px-5 py-12">
        <motion.div {...fade(0)}>
          <h2 className="font-heading text-[22px] font-bold text-ink mb-6">
            Реальные <span className="gradient-text">результаты</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {topCases.map((cs, i) => (
            <motion.div key={cs.id} {...fade(i * 0.08)}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden">
                {cs.heroImage && (
                  <div className="relative h-32 overflow-hidden">
                    <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" sizes="480px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${cs.badge}`}>
                      {cs.category}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-heading text-[15px] font-semibold text-ink">{cs.title}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="text-center py-2 rounded-xl bg-bg-alt">
                        <span className="block text-[14px] font-bold gradient-text">{m.value}</span>
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

      {/* Testimonials */}
      <section className="px-5 py-12 bg-bg-alt">
        <motion.div {...fade(0)}>
          <h2 className="font-heading text-[22px] font-bold text-ink mb-6">
            <span className="gradient-text">Отзывы</span> клиентов
          </h2>
        </motion.div>

        <div className="space-y-3">
          {[
            { name: "Алексей К.", text: "За 3 месяца увеличили лидов в 4 раза. Системно и прозрачно." },
            { name: "Мария С.", text: "Начали с аудита за 19.99€ – уже увидели, где теряли деньги." },
            { name: "Дмитрий Л.", text: "Стоимость клиента снизилась на 40%. Рекомендую." },
          ].map((r, i) => (
            <motion.div key={i} {...fade(i * 0.05)} className="p-4 rounded-2xl border border-border bg-surface">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="text-accent-warm fill-accent-warm" />
                ))}
              </div>
              <p className="text-[13px] text-ink-light leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-2 text-[12px] font-semibold text-ink">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form section */}
      <section id="promo-form" className="px-5 py-12">
        <motion.div {...fade(0)}>
          <h2 className="font-heading text-[22px] font-bold text-ink mb-2 text-center">
            Начните <span className="gradient-text">рост</span> сейчас
          </h2>
          <p className="text-[14px] text-ink-light text-center mb-6">
            Заполните форму – мы свяжемся в течение 24 часов
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl border border-accent/30 bg-accent/5 text-center"
          >
            <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-white" />
            </div>
            <h3 className="font-heading text-[18px] font-bold text-ink mb-2">Заявка отправлена!</h3>
            <p className="text-[14px] text-ink-light">Мы свяжемся с вами в ближайшие 24 часа.</p>
          </motion.div>
        ) : (
          <motion.form
            {...fade(0.1)}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-3"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <input
              type="tel"
              placeholder="Телефон или Telegram"
              required
              className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
            />
            <textarea
              rows={3}
              placeholder="Расскажите кратко о вашем бизнесе"
              className="w-full px-4 py-3.5 rounded-2xl bg-bg-alt border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-bg text-white text-[15px] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Оставить заявку
              <ArrowRight size={18} />
            </button>
            <p className="text-center text-[10px] text-ink-faint">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </motion.form>
        )}
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 max-w-[480px] mx-auto p-3 bg-bg/90 backdrop-blur-xl border-t border-border">
        <a
          href="#promo-form"
          className="w-full gradient-bg text-white text-[14px] font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2"
        >
          <MessageCircle size={16} />
          Оставить заявку
        </a>
      </div>

      {/* Bottom spacer for sticky CTA */}
      <div className="h-20" />
    </div>
  );
}
