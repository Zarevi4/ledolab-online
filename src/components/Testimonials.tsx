"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useI18n } from "@/lib/i18n/context";

const reviews = [
  { name: "Алексей Пикалов", initial: "А", color: "bg-orange-500", text: "Отримали не просто аудит, а чіткий покроковий план розвитку маркетингу. Команда глибоко розібралась у нашому бізнесі та запропонувала конкретні кроки з чіткими KPI.", verified: true },
  { name: "Татьяна Саакян", initial: "Т", color: "bg-purple-500", text: "Хороший опыт сотрудничества. Команда помогла систематизировать маркетинг, настроить аналитику и запустить рекламные кампании с понятными результатами.", verified: true },
  { name: "Никита Бучковский", initial: "Н", color: "bg-pink-500", text: "Залишились задоволені співпрацею. Робота виконана якісно, з увагою до деталей. Отримали повний аудит та стратегію просування.", verified: true },
  { name: "Руслан Шульга", initial: "Р", color: "bg-pink-600", text: "Співпрацю почали з аналізу поточних рекламних кампаній. Отримали детальний звіт з рекомендаціями та покроковий план оптимізації.", verified: true },
  { name: "Андрей Банатурский", initial: "А", color: "bg-blue-500", text: "Обратились за консультацией по масштабированию. Вместо общих советов получили конкретный план с цифрами, сроками и бюджетами.", verified: true },
  { name: "Мария С.", initial: "М", color: "bg-emerald-500", text: "Начали с аудита за 19.99€ – и уже на этом этапе увидели, где теряли деньги. Сейчас на полном тарифе, результаты превзошли ожидания.", verified: true },
];

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);
  const { t } = useI18n();

  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, arrows: false, autoplay: true, autoplaySpeed: 4500, pauseOnHover: true,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 640, settings: { slidesToShow: 1 } }],
    appendDots: (dots: React.ReactNode) => (<div><ul className="flex items-center justify-center gap-1.5 mt-6">{dots}</ul></div>),
    customPaging: () => (<button className="w-1.5 h-1.5 rounded-full bg-border transition-all duration-300" />),
  };

  return (
    <section id="reviews" className="py-28 sm:py-36 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header with Google badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.testimonials.tag}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              {t.testimonials.title}<br /><span className="gradient-text">{t.testimonials.titleAccent}</span>
            </h2>
            {/* Google Reviews badge */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[20px] font-bold" style={{ color: '#4285F4' }}>G</span>
              <div>
                <p className="text-[14px] font-semibold text-ink">Excellent on Google</p>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-[13px] text-ink-light">5.0 out of 5 based on 56 reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => sliderRef.current?.slickPrev()} className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all" aria-label="Prev"><ChevronLeft size={18} /></button>
            <button onClick={() => sliderRef.current?.slickNext()} className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all" aria-label="Next"><ChevronRight size={18} /></button>
          </div>
        </motion.div>

        <style jsx global>{`
          .testimonials-slider .slick-slide > div { padding: 0 10px; }
          .testimonials-slider .slick-list { margin: 0 -10px; }
          .testimonials-slider .slick-dots { position: relative; bottom: 0; display: flex !important; align-items: center; justify-content: center; gap: 6px; margin-top: 28px; padding: 0; list-style: none; }
          .testimonials-slider .slick-dots li { width: 6px; height: 6px; margin: 0; padding: 0; }
          .testimonials-slider .slick-dots li button { width: 6px; height: 6px; padding: 0; border-radius: 999px; background: var(--border); border: none; cursor: pointer; transition: all 0.3s ease; }
          .testimonials-slider .slick-dots li button::before { display: none; }
          .testimonials-slider .slick-dots li.slick-active { width: 24px; }
          .testimonials-slider .slick-dots li.slick-active button { width: 24px; height: 6px; background: linear-gradient(135deg, #2563EB, #F59E0B); }
          .testimonials-slider .slick-track { display: flex; align-items: stretch; }
          .testimonials-slider .slick-slide { height: auto; }
          .testimonials-slider .slick-slide > div { height: 100%; }
        `}</style>

        <Slider ref={sliderRef} {...settings} className="testimonials-slider">
          {reviews.map((r, i) => (
            <div key={i} className="h-full">
              <div className="h-full p-5 rounded-[20px] border border-border bg-surface flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {/* Review text */}
                <p className="text-[14px] text-ink-light leading-relaxed flex-1">
                  {r.text}
                </p>
                {/* Author */}
                <div className="mt-4 pt-3 border-t border-border flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white text-[13px] font-bold shrink-0`}>
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-ink flex items-center gap-1">
                      {r.name}
                      {r.verified && (
                        <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      )}
                    </p>
                    <p className="text-[11px] text-ink-faint">on <span className="text-blue-500">Google</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
