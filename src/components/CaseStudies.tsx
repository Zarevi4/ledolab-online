"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <section id="cases" className="py-28 sm:py-36 px-6 lg:px-8 bg-bg-alt overflow-hidden">
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
              Кейсы
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              Кейсы наших <span className="gradient-text">клиентов</span>
            </h2>
            <p className="mt-2 text-[15px] text-ink-light">
              Реальные результаты. Каждый кейс — решение конкретной задачи с прозрачными цифрами.
            </p>
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
          .cases-slider .slick-slide > div {
            padding: 0 10px;
          }
          .cases-slider .slick-list {
            margin: 0 -10px;
          }
          .cases-slider .slick-dots {
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
          .cases-slider .slick-dots li {
            width: 6px;
            height: 6px;
            margin: 0;
            padding: 0;
          }
          .cases-slider .slick-dots li button {
            width: 6px;
            height: 6px;
            padding: 0;
            border-radius: 999px;
            background: var(--border);
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .cases-slider .slick-dots li button::before {
            display: none;
          }
          .cases-slider .slick-dots li.slick-active {
            width: 24px;
          }
          .cases-slider .slick-dots li.slick-active button {
            width: 24px;
            height: 6px;
            background: linear-gradient(135deg, #2563EB, #F59E0B);
          }
          .cases-slider .slick-track {
            display: flex;
            align-items: stretch;
          }
          .cases-slider .slick-slide {
            height: auto;
          }
          .cases-slider .slick-slide > div {
            height: 100%;
          }
        `}</style>

        <Slider ref={sliderRef} {...settings} className="cases-slider">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="h-full">
              <Link href={`/cases/${cs.id}`} className="block h-full">
                <div className="group h-full rounded-[20px] border border-border bg-surface overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-accent/20 flex flex-col">
                  {/* Gradient banner */}
                  <div className={`relative bg-gradient-to-br ${cs.gradient} h-32 flex items-end p-5 shrink-0`}>
                    <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase px-3 py-[5px] rounded-full ${cs.badge}`}>
                      {cs.category}
                    </span>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={15} className="text-ink" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-[17px] font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-ink-light leading-relaxed line-clamp-2 min-h-[2.6rem]">
                      {cs.subtitle}
                    </p>

                    {/* Key metrics */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {cs.metrics.slice(0, 4).map((m) => (
                        <div key={m.label} className="text-center py-2 rounded-lg bg-bg-alt">
                          <span className="block text-[14px] font-bold gradient-text">{m.value}</span>
                          <span className="text-[10px] text-ink-faint">{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Channels */}
                    <div className="mt-3 flex flex-wrap gap-[5px]">
                      {cs.channels.map((ch) => (
                        <span
                          key={ch}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-border text-ink-faint"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="gradient-bg text-white font-semibold text-[14px] px-7 py-[13px] rounded-full hover:opacity-90 transition-opacity inline-block"
          >
            Оставить заявку
          </a>
        </motion.div>
      </div>
    </section>
  );
}
