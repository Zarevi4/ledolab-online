"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, MapPin, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function Contact() {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const handler = (e: CustomEvent<string>) => {
      setSelectedService(e.detail);
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("select-service", handler as EventListener);
    return () => window.removeEventListener("select-service", handler as EventListener);
  }, []);

  return (
    <section id="contact" className="py-28 sm:py-36">
      <div className="max-w-[580px] mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-accent">{t.contact.tag}</span>
          <h2 className="mt-3 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink">
            {t.contact.title} <span className="gradient-text">{t.contact.titleAccent}</span>?
          </h2>
          <p className="mt-3 text-[16px] text-ink-light leading-relaxed">{t.contact.subtitle}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[20px] border border-border bg-surface p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1.5">{t.contact.name}</label>
                <input type="text" placeholder={t.contact.name} className="w-full px-4 py-[11px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1.5">{t.contact.email}</label>
                <input type="email" placeholder="email@company.com" className="w-full px-4 py-[11px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1.5">{t.contact.service}</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-[11px] rounded-xl bg-bg border border-border text-ink text-[14px] focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all appearance-none"
              >
                <option value="" disabled>{t.contact.servicePlaceholder}</option>
                {t.contact.serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                {selectedService && !t.contact.serviceOptions.includes(selectedService) && (
                  <option value={selectedService}>{selectedService}</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1.5">{t.contact.message}</label>
              <textarea rows={4} placeholder={t.contact.messagePlaceholder} className="w-full px-4 py-[11px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all resize-none" />
            </div>
            <button type="submit" className="w-full gradient-bg text-white text-[14px] font-semibold py-[13px] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send size={15} />{t.contact.send}
            </button>
          </form>
          <div className="mt-6 pt-5 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-ink-light">
            <a href="tel:+380638619285" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={14} />+380 63 861 92 85</a>
            <a href="mailto:support@ledolab.online" className="flex items-center gap-2 hover:text-accent transition-colors"><Mail size={14} />support@ledolab.online</a>
            <div className="flex items-center gap-2"><Building2 size={14} />LEDO LAB EOOD (EIK: 208624555)</div>
            <div className="flex items-center gap-2"><MapPin size={14} />Bulgaria, Burgas</div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-5 text-[13px] text-ink-light">
            <a href="https://t.me/ledolab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><MessageCircle size={14} />Telegram</a>
            <a href="https://wa.me/380638619285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone size={14} />WhatsApp</a>
            <a href="https://instagram.com/ledolab" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
            <a href="https://youtube.com/@ledolab" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
            <a href="https://tiktok.com/@ledolab" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">TikTok</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
