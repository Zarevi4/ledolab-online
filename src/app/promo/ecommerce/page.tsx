import type { Metadata } from "next";
import EcomPromo from "./EcomPromoClient";

export const metadata: Metadata = {
  title: "E-Commerce маркетинг: от $0 до $118K за 90 дней – LedoLab",
  description: "Запуск и масштабирование e-commerce через Facebook, TikTok, Google Ads. 510% ROAS. Реальные кейсы.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <EcomPromo />;
}
