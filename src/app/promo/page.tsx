import type { Metadata } from "next";
import PromoPage from "./PromoClient";

export const metadata: Metadata = {
  title: "Бесплатный маркетинг-аудит за 19.99€ – LedoLab",
  description: "Получите полный аудит + пошаговый план роста трафика и лидов. Первые 50+ лидов за 30 дней. Команда с 10+ годами опыта.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PromoPage />;
}
