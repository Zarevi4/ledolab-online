"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useI18n } from "@/lib/i18n/context";
import { facts, type Fact } from "@/lib/facts-data";

const sectionTitle: Record<string, string> = {
  ru: "7 пунктов о нас в цифрах",
  uk: "7 пунктів про нас у цифрах",
  en: "7 facts about us in numbers",
  bg: "7 факта за нас в цифри",
};

export default function SevenFacts() {
  const sliderRef = useRef<Slider>(null);
  const { locale } = useI18n();
  const t = (f: Fact) => ({ title: f.titles[locale] || f.titles.ru, text: f.texts[locale] || f.texts.ru });
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div><ul className="flex items-center justify-center gap-1.5 mt-6">{dots}</ul></div>
    ),
    customPaging: () => (
      <button className="w-1.5 h-1.5 rounded-full bg-border transition-all duration-300" />
    ),
  };

  return (
    <section className="py-28 sm:py-36 bg-bg-alt overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {sectionTitle[locale] || sectionTitle.ru}
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => sliderRef.current?.slickPrev()} className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all" aria-label="Prev">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => sliderRef.current?.slickNext()} className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <style jsx global>{`
          .facts-slider .slick-slide > div { padding: 0 10px; }
          .facts-slider .slick-list { margin: 0 -10px; }
          .facts-slider .slick-dots { position: relative; bottom: 0; display: flex !important; align-items: center; justify-content: center; gap: 6px; margin-top: 28px; padding: 0; list-style: none; }
          .facts-slider .slick-dots li { width: 6px; height: 6px; margin: 0; padding: 0; }
          .facts-slider .slick-dots li button { width: 6px; height: 6px; padding: 0; border-radius: 999px; background: var(--border); border: none; cursor: pointer; transition: all 0.3s ease; }
          .facts-slider .slick-dots li button::before { display: none; }
          .facts-slider .slick-dots li.slick-active { width: 24px; }
          .facts-slider .slick-dots li.slick-active button { width: 24px; height: 6px; background: linear-gradient(135deg, #2563EB, #F59E0B); }
          .facts-slider .slick-track { display: flex; align-items: stretch; }
          .facts-slider .slick-slide { height: auto; }
          .facts-slider .slick-slide > div { height: 100%; }
        `}</style>

        <Slider ref={sliderRef} key={slides} {...settings} className="facts-slider">
          {facts.map((fact) => (
            <div key={fact.id} className="h-full">
              <Link href={`/facts/${fact.id}`} className="block h-full">
                <div className="group h-full rounded-[20px] border border-border bg-surface overflow-hidden flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-accent/20 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={fact.image}
                      alt={t(fact).title}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg gradient-bg text-white flex items-center justify-center text-[13px] font-bold">
                      {fact.num}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-[15px] sm:text-[16px] font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                      {t(fact).title}
                    </h3>
                    <p className="text-[13px] sm:text-[13px] text-ink-light leading-relaxed flex-1 line-clamp-4 sm:line-clamp-none">
                      {t(fact).text}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
