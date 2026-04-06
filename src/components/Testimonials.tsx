"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Алексей К.",
    role: "eCommerce, Германия",
    text: "За 3 месяца работы с LedoLab мы увеличили количество лидов в 4 раза. Команда работает системно и прозрачно — каждую неделю отчёты с реальными цифрами.",
  },
  {
    name: "Мария С.",
    role: "Стартап, Болгария",
    text: "Начали с аудита за 19.99€ — и уже на этом этапе увидели, где теряли деньги. Сейчас на полном тарифе, результаты превзошли ожидания.",
  },
  {
    name: "Дмитрий Л.",
    role: "SaaS, Украина",
    text: "Работаем с LedoLab уже полгода. Стоимость привлечения клиента снизилась на 40%, а качество лидов выросло. Рекомендую всем.",
  },
  {
    name: "Анна В.",
    role: "Услуги, Польша",
    text: "LedoLab полностью перестроили наш маркетинг. Настроили воронки, CRM и аналитику. Теперь мы понимаем каждый потраченный евро.",
  },
  {
    name: "Игорь П.",
    role: "Ритейл, Чехия",
    text: "Впервые за 3 года мы видим окупаемость маркетинга. Прозрачные KPI, честные отчёты, и команда реально горит результатом.",
  },
  {
    name: "Елена Т.",
    role: "Образование, СНГ",
    text: "Профессиональный подход на каждом этапе. Денис лично контролирует процессы. За 2 месяца вышли на стабильный поток заявок.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex items-center justify-center gap-1.5 mt-6">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-1.5 h-1.5 rounded-full bg-border transition-all duration-300" />
    ),
  };

  return (
    <section id="reviews" className="py-28 sm:py-36 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">
              Отзывы
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              Что говорят наши
              <br />
              <span className="gradient-text">клиенты</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all"
              aria-label="Предыдущий"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all"
              aria-label="Следующий"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <style jsx global>{`
          .testimonials-slider .slick-slide > div {
            padding: 0 10px;
          }
          .testimonials-slider .slick-list {
            margin: 0 -10px;
          }
          .testimonials-slider .slick-dots {
            position: relative;
            bottom: 0;
            display: flex !important;
            align-items: center;
            justify-content: center;
            gap: 6px;
            margin-top: 28px;
            padding: 0;
            list-style: none;
          }
          .testimonials-slider .slick-dots li {
            width: 6px;
            height: 6px;
            margin: 0;
            padding: 0;
          }
          .testimonials-slider .slick-dots li button {
            width: 6px;
            height: 6px;
            padding: 0;
            border-radius: 999px;
            background: var(--border);
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .testimonials-slider .slick-dots li button::before {
            display: none;
          }
          .testimonials-slider .slick-dots li.slick-active {
            width: 24px;
          }
          .testimonials-slider .slick-dots li.slick-active button {
            width: 24px;
            height: 6px;
            background: linear-gradient(135deg, #2563EB, #F59E0B);
          }
          .testimonials-slider .slick-track {
            display: flex;
            align-items: stretch;
          }
          .testimonials-slider .slick-slide {
            height: auto;
          }
          .testimonials-slider .slick-slide > div {
            height: 100%;
          }
        `}</style>

        <Slider ref={sliderRef} {...settings} className="testimonials-slider">
          {testimonials.map((t, i) => (
            <div key={i} className="h-full">
              <div className="h-full p-6 rounded-[20px] border border-border bg-surface flex flex-col">
                <Quote size={24} className="text-accent/20 mb-3" />
                <p className="text-[14px] text-ink-light leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 mb-1.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} className="text-accent-warm fill-accent-warm" />
                    ))}
                  </div>
                  <p className="font-heading text-[14px] font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-ink-faint">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
