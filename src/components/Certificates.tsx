"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useI18n } from "@/lib/i18n/context";

const certificates = [
  { src: "/images/homepage/cert-1.jpg", alt: "Certificate" },
  { src: "/images/homepage/cert-gmp.webp", alt: "Google Marketing Platform" },
  { src: "/images/homepage/cert-meta-1.webp", alt: "Meta Community Manager" },
  { src: "/images/homepage/cert-meta-2.webp", alt: "Meta Certification" },
  { src: "/images/homepage/cert-2.png", alt: "Certificate 2" },
  { src: "/images/homepage/cert-3.png", alt: "Certificate 3" },
  { src: "/images/homepage/cert-4.png", alt: "Certificate 4" },
  { src: "/images/homepage/cert-5.png", alt: "Certificate 5" },
  { src: "/images/homepage/cert-6.png", alt: "Certificate 6" },
  { src: "/images/homepage/cert-7.png", alt: "Certificate 7" },
  { src: "/images/homepage/cert-8.png", alt: "Certificate 8" },
];

const labels: Record<string, { tag: string; title: string }> = {
  ru: { tag: "Сертификаты", title: "Достижения и награды" },
  uk: { tag: "Сертифікати", title: "Досягнення та нагороди" },
  en: { tag: "Certificates", title: "Achievements & Awards" },
  bg: { tag: "Сертификати", title: "Постижения и награди" },
};

export default function Certificates() {
  const { locale } = useI18n();
  const sliderRef = useRef<Slider>(null);
  const l = labels[locale] || labels.ru;
  const [slides, setSlides] = useState(6);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setSlides(w < 480 ? 1 : w < 768 ? 3 : w < 1024 ? 5 : 6);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: slides,
    slidesToScroll: Math.min(2, slides),
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "500px 0px 500px 0px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">
              {l.tag}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
              {l.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all"
              aria-label="Prev"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-ink-light hover:text-ink hover:border-accent/30 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        <style jsx global>{`
          .certs-slider .slick-slide > div { padding: 0 8px; }
          .certs-slider .slick-list { margin: 0 -8px; }
        `}</style>

        <Slider ref={sliderRef} key={slides} {...settings} className="certs-slider">
          {certificates.map((cert, i) => (
            <div key={i}>
              <div className="w-full aspect-square rounded-2xl border border-border bg-surface p-4 flex items-center justify-center hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-300">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={120}
                  height={120}
                  className="object-contain max-h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
