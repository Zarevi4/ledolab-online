"use client";

import { MessageCircle, Mail, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-heading text-[16px] font-bold text-ink">
            <span className="gradient-text">LedoLab</span><span className="text-accent">.</span>
          </span>
          <span className="text-[12px] text-ink-faint">&copy; {new Date().getFullYear()} {t.footer.copyright}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://t.me/ledolab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] text-ink-faint hover:text-accent transition-colors"><MessageCircle size={14} />Telegram</a>
          <a href="mailto:support@ledolab.online" className="flex items-center gap-1.5 text-[13px] text-ink-faint hover:text-accent transition-colors"><Mail size={14} />Email</a>
          <a href="tel:+380638619285" className="flex items-center gap-1.5 text-[13px] text-ink-faint hover:text-accent transition-colors"><Phone size={14} />+38063 861 92 85</a>
        </div>
      </div>
    </footer>
  );
}
