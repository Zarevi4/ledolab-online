"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useI18n } from "@/lib/i18n/context";

const facts = [
  {
    id: "7-years-experience",
    num: "1",
    title: "7+ years of experience",
    titleRu: "7+ лет опыта",
    text: "We've grown from working with local projects to supporting startups and companies across Europe, the USA, and the CIS. We understand the market, trends, and real business challenges.",
    textRu: "Мы выросли от работы с локальными проектами до поддержки стартапов и компаний по всей Европе, США и СНГ. Мы понимаем рынок, тренды и реальные бизнес-вызовы.",
    image: "/images/cases/card-fb1.png",
  },
  {
    id: "100-projects",
    num: "2",
    title: "100+ completed projects",
    titleRu: "100+ завершённых проектов",
    text: "Startups, eCommerce, services, B2B - we grow sales systematically. Each case is a complete sales system: strategy, advertising, website, analytics.",
    textRu: "Стартапы, eCommerce, услуги, B2B - мы системно растим продажи. Каждый кейс - это полная система продаж: стратегия, реклама, сайт, аналитика.",
    image: "/images/cases/card-google1.jpg",
  },
  {
    id: "1m-under-management",
    num: "3",
    title: "$1,000,000+ under management",
    titleRu: "$1 000 000+ под управлением",
    text: "We handle both small and large budgets and know how to make every dollar generate profit. Transparency, reporting, and KPI-driven work are essential parts of every project.",
    textRu: "Мы работаем как с малыми, так и с крупными бюджетами и знаем, как заставить каждый доллар приносить прибыль. Прозрачность, отчётность и KPI - обязательная часть каждого проекта.",
    image: "/images/cases/card-fb3.png",
  },
  {
    id: "300-sales-growth",
    num: "4",
    title: "Up to 300% sales growth",
    titleRu: "До 300% роста продаж",
    text: "We achieve this through a systematic approach: from analytics and strategy to campaign optimization. We work with proven methods that deliver real results.",
    textRu: "Мы достигаем этого через системный подход: от аналитики и стратегии до оптимизации кампаний. Работаем проверенными методами, дающими реальные результаты.",
    image: "/images/cases/card-shopify1.jpg",
  },
  {
    id: "92-referrals",
    num: "5",
    title: "92% of clients come via referral",
    titleRu: "92% клиентов приходят по рекомендации",
    text: "Clients recommend us because we work honestly, don't inflate metrics, and always keep our word. We invest in every project as if it were our own business.",
    textRu: "Клиенты рекомендуют нас, потому что мы работаем честно, не раздуваем метрики и всегда держим слово. Мы вкладываемся в каждый проект, как в свой собственный бизнес.",
    image: "/images/cases/card-tt1.jpg",
  },
  {
    id: "24-72-hours",
    num: "6",
    title: "24-72 hours to first launches",
    titleRu: "24-72 часа до первых запусков",
    text: "We don't spend weeks on preparation - we act quickly and precisely according to plan. You get your first leads and results immediately after the strategy is approved.",
    textRu: "Мы не тратим недели на подготовку - действуем быстро и точно по плану. Первые лиды и результаты вы получаете сразу после утверждения стратегии.",
    image: "/images/cases/card-fb6.png",
  },
  {
    id: "3-geo-presences",
    num: "7",
    title: "3 geo-presences",
    titleRu: "3 гео-присутствия",
    text: "We work with clients from Europe, the USA, and the CIS, understanding the specifics of different markets. All processes are online, transparent, and fully under your control.",
    textRu: "Мы работаем с клиентами из Европы, США и СНГ, понимая специфику разных рынков. Все процессы онлайн, прозрачны и полностью под вашим контролем.",
    image: "/images/cases/card-fb2.png",
  },
];

const sectionTitle: Record<string, string> = {
  ru: "7 пунктов о нас в цифрах",
  uk: "7 пунктів про нас у цифрах",
  en: "7 facts about us in numbers",
  bg: "7 факта за нас в цифри",
};

export default function SevenFacts() {
  const sliderRef = useRef<Slider>(null);
  const { locale } = useI18n();
  const isRu = locale !== "en";

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
      <div><ul className="flex items-center justify-center gap-1.5 mt-6">{dots}</ul></div>
    ),
    customPaging: () => (
      <button className="w-1.5 h-1.5 rounded-full bg-border transition-all duration-300" />
    ),
  };

  return (
    <section className="py-28 sm:py-36 px-6 lg:px-8 bg-bg-alt overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
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

        <Slider ref={sliderRef} {...settings} className="facts-slider">
          {facts.map((fact) => (
            <div key={fact.id} className="h-full">
              <Link href={`/facts/${fact.id}`} className="block h-full">
                <div className="group h-full rounded-[20px] border border-border bg-surface overflow-hidden flex flex-col hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-accent/20 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={fact.image}
                      alt={isRu ? fact.titleRu : fact.title}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-heading text-[28px] font-bold select-none tracking-wide rotate-[-15deg] text-white/20">LedoLab</span>
                    </div>
                    {/* Number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg gradient-bg text-white flex items-center justify-center text-[13px] font-bold">
                      {fact.num}
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-[16px] font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                      {isRu ? fact.titleRu : fact.title}
                    </h3>
                    <p className="text-[13px] text-ink-light leading-relaxed flex-1">
                      {isRu ? fact.textRu : fact.text}
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
