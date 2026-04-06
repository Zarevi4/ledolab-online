"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] bg-ink/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[480px] rounded-[20px] border border-border bg-surface p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border bg-bg flex items-center justify-center text-ink-light hover:text-ink transition-colors"
              aria-label="Закрыть"
            >
              <X size={18} />
            </button>

            <h3 className="font-heading text-[20px] font-bold text-ink mb-1">
              Оставить <span className="gradient-text">заявку</span>
            </h3>
            <p className="text-[14px] text-ink-light mb-5">
              Мы свяжемся с вами в течение 24 часов.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-[10px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-[10px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-ink-faint mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={3}
                  placeholder="Расскажите о вашем проекте"
                  className="w-full px-4 py-[10px] rounded-xl bg-bg border border-border text-ink text-[14px] placeholder:text-ink-faint/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-white text-[14px] font-semibold py-[12px] rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={15} />
                Отправить
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
