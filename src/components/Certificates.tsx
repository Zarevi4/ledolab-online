"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

const labels: Record<string, string> = {
  ru: "Сертификаты — Достижения и награды",
  uk: "Сертифікати — Досягнення та нагороди",
  en: "Certificates — Achievements & Awards",
  bg: "Сертификати — Постижения и награди",
};

export default function Certificates() {
  const { locale } = useI18n();

  return (
    <section className="py-20 sm:py-28 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">
            {locale === "en" ? "Certificates" : locale === "bg" ? "Сертификати" : locale === "uk" ? "Сертифікати" : "Сертификаты"}
          </span>
          <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {labels[locale] || labels.ru}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-2xl border border-border bg-surface p-3 flex items-center justify-center hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:border-accent/20 transition-all duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={100}
                height={100}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
