"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useI18n } from "@/lib/i18n/context";

const GOOGLE_REVIEWS_URL = "https://search.google.com/local/writereview?placeid=ChIJzzF8q59pl0ARhj7iU0OaG_s";
const GOOGLE_REVIEWS_READ = "https://search.google.com/local/reviews?placeid=ChIJzzF8q59pl0ARhj7iU0OaG_s";

const reviews = [
  { name: "Алексей Пикалов", initial: "А", color: "bg-orange-500", text: "Отримали не просто аудит, а чіткий покроковий план розвитку маркетингу. Багато ідей вже впровадили і бачимо позитивну динаміку.", verified: true, ago: "1 month ago" },
  { name: "Татьяна Саакян", initial: "Т", color: "bg-purple-500", text: "Хороший опыт сотрудничества. Команда помогла систематизировать маркетинг, наладить аналитику и построить понятную модель привлечения клиентов.", verified: true, ago: "1 month ago" },
  { name: "Никита Бучковский", initial: "Н", color: "bg-pink-500", text: "Залишились задоволені співпрацею. Робота виконана якісно, з глибоким аналізом та реальними діями для зростання бізнесу.", verified: true, ago: "1 month ago" },
  { name: "Руслан Шульга", initial: "Р", color: "bg-pink-600", text: "Співпрацю почали з аналізу поточних рекламних кампаній. Отримали глибокий аналіз воронки продажів і зрозуміли, де втрачаються потенційні клієнти. Підхід професійний і структурований.", verified: true, ago: "1 month ago" },
  { name: "Андрей Банатурский", initial: "А", color: "bg-blue-500", text: "Обратились за консультацией по масштабированию. Вместо поверхностных советов получили глубокий анализ текущей ситуации и реалистичный план роста.", verified: true, ago: "1 month ago" },
  { name: "Anastasia", initial: "А", color: "bg-teal-500", text: "LedoLab помогли связать маркетинг и продажи. Раньше мы получали лиды, но не понимали, почему часть не конвертируется. После настройки воронки и офферов ситуация улучшилась.", verified: true, ago: "1 month ago" },
  { name: "Daryna Zelenkovska", initial: "Д", color: "bg-violet-500", text: "LedoLab допомогли побудувати системний підхід до залучення клієнтів. Раніше маркетинг був хаотичним, тепер є структура і контроль результатів.", verified: true, ago: "1 month ago" },
  { name: "Ihor Shuvalov", initial: "И", color: "bg-cyan-500", text: "Понравилось, что команда мыслит стратегически, а не только в рамках рекламных кампаний. Это дало более широкое понимание рынка и позиционирования.", verified: true, ago: "1 month ago" },
  { name: "Денис Лагодный", initial: "Д", color: "bg-emerald-500", text: "Ценю системный подход и прозрачность в работе. Все решения подкреплены данными. Впервые увидел грамотный разбор воронки продаж от первого контакта до продажи.", verified: true, ago: "1 month ago" },
  { name: "Олена Баркова", initial: "О", color: "bg-amber-500", text: "Команда адекватная, отвечают по делу, без лишней теории.", verified: true, ago: "2 months ago" },
  { name: "Денис Мах", initial: "Д", color: "bg-rose-500", text: "Обратился в LedoLab, когда реклама полностью сливала бюджет. После аудита нашли кучу ошибок и за месяц вышли на стабильные лиды. Видно, что ребята реально разбираются.", verified: true, ago: "2 months ago" },
  { name: "Gena P", initial: "G", color: "bg-indigo-500", text: "Работаем с Ledolab! Это не агентство, которое продаёт клики. Это команда, которая строит маркетинг как бизнес-систему. Рекомендуем всем, кто хочет расти.", verified: true, ago: "2 months ago" },
];

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);
  const { t } = useI18n();
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setSlides(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: slides, slidesToScroll: 1, arrows: false, autoplay: true, autoplaySpeed: 4500, pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (<div><ul className="flex items-center justify-center gap-1.5 mt-6">{dots}</ul></div>),
    customPaging: () => (<button className="w-1.5 h-1.5 rounded-full bg-border transition-all duration-300" />),
  };

  return (
    <section id="reviews" className="py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header with Google badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.testimonials.tag}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              {t.testimonials.title}<br /><span className="gradient-text">{t.testimonials.titleAccent}</span>
            </h2>
            {/* Google Reviews badge */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[20px] font-bold" style={{ color: '#4285F4' }}>G</span>
                <div>
                  <p className="text-[14px] font-semibold text-ink">Excellent on Google</p>
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-[13px] text-ink-light">5.0 out of 5 based on 56 reviews</span>
                  </div>
                </div>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white text-[12px] font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Review us on Google
              </a>
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

        <Slider ref={sliderRef} key={slides} {...settings} className="testimonials-slider">
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
                <p className="text-[13px] sm:text-[14px] text-ink-light leading-relaxed flex-1 line-clamp-6 sm:line-clamp-none">
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
                    <p className="text-[11px] text-ink-faint">{r.ago} on <a href={GOOGLE_REVIEWS_READ} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google</a></p>
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
