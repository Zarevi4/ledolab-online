export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  channels: string[];
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string[];
  results: string[];
  gradient: string;
  badge: string;
  heroImage?: string;
  images?: string[];
}

export interface ServicePlan {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  currency: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const servicePlans: ServicePlan[] = [
  {
    id: "starter",
    name: "Growth Starter System",
    price: 400,
    oldPrice: 1000,
    currency: "\u20AC",
    period: "/\u043C\u0435\u0441\u044F\u0446",
    features: [
      "Facebook/Instagram Ads (1 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A)",
      "1 \u0432\u043E\u0440\u043E\u043D\u043A\u0430 \u043F\u0440\u043E\u0434\u0430\u0436",
      "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 email-\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433",
      "CRO-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F",
      "\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
      "\u0420\u0435\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433/\u0420\u0435\u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433",
      "\u041F\u0440\u043E\u0434\u0430\u0436\u043D\u044B\u0435 \u043E\u0444\u0444\u0435\u0440\u044B \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u044B",
      "\u0410\u043D\u0430\u043B\u0438\u0437 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442\u0435\u0441\u0442 \u0433\u0438\u043F\u043E\u0442\u0435\u0437",
      "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0438",
      "CRM/ERP-\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
      "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 + \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    ],
  },
  {
    id: "growth",
    name: "Growth System",
    price: 800,
    oldPrice: 2000,
    currency: "\u20AC",
    period: "/\u043C\u0435\u0441\u044F\u0446",
    highlighted: true,
    features: [
      "2 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0442\u0440\u0430\u0444\u0438\u043A\u0430 (Meta/TikTok/Google)",
      "2\u20133 \u0432\u043E\u0440\u043E\u043D\u043A\u0438 \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u044B",
      "\u041F\u0440\u043E\u0434\u0430\u0436\u043D\u044B\u0435 \u043E\u0444\u0444\u0435\u0440\u044B \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u044B",
      "Email-\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 + \u0430\u0432\u0442\u043E-follow-up",
      "CRO (\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438)",
      "\u041A\u0440\u043E\u0441\u0441-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 + LTV",
      "\u0420\u0435\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433/\u0420\u0435\u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433",
      "\u0410\u043D\u0430\u043B\u0438\u0437 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442\u0435\u0441\u0442 \u0433\u0438\u043F\u043E\u0442\u0435\u0437",
      "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0438",
      "CRM/ERP-\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
      "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 + \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    ],
  },
  {
    id: "enterprise",
    name: "Growth Full System Enterprise",
    price: 1500,
    oldPrice: 3500,
    currency: "\u20AC",
    period: "/\u043C\u0435\u0441\u044F\u0446",
    features: [
      "\u0412\u0441\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 (Meta/TikTok/Google + \u043D\u0438\u0448\u0435\u0432\u044B\u0435)",
      "5+ \u0432\u043E\u0440\u043E\u043D\u043E\u043A \u043F\u043E\u0434 \u0440\u0430\u0437\u043D\u044B\u0435 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u044B",
      "\u041F\u0440\u043E\u0434\u0430\u0436\u043D\u044B\u0435 \u043E\u0444\u0444\u0435\u0440\u044B \u0438 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u044B",
      "Email, SMS + \u0430\u0432\u0442\u043E-follow-up",
      "CRO + Conversion Rating",
      "\u041A\u0440\u043E\u0441\u0441-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430, LTV, ROI",
      "\u0420\u0435\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433/\u0420\u0435\u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433",
      "\u0410\u043D\u0430\u043B\u0438\u0437 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u0442\u0435\u0441\u0442 \u0433\u0438\u043F\u043E\u0442\u0435\u0437",
      "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0438\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0438",
      "\u041F\u043E\u043B\u043D\u044B\u0435 CRM/ERP/BI-\u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
      "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 + \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    ],
  },
];

export const stats: Stat[] = [
  { value: "10+", label: "\u041B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430" },
  { value: "$1.5M+", label: "\u0412\u043B\u043E\u0436\u0435\u043D\u043E \u0432 \u0440\u0435\u043A\u043B\u0430\u043C\u0443" },
  { value: "50+", label: "\u041B\u0438\u0434\u043E\u0432 \u0437\u0430 30 \u0434\u043D\u0435\u0439" },
  { value: "100+", label: "\u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432" },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0438 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",
    description: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u043C \u0432\u0430\u0448\u0438 \u0446\u0435\u043B\u0438, \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442",
  },
  {
    number: 2,
    title: "\u0410\u0443\u0434\u0438\u0442",
    description: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443 \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u0438\u0437\u0443\u0447\u0430\u0435\u043C \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441, \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u043D\u0438\u0448\u0443",
  },
  {
    number: 3,
    title: "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
    description: "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F",
  },
  {
    number: 4,
    title: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440",
    description: "\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430",
  },
  {
    number: 5,
    title: "\u0421\u0442\u0430\u0440\u0442 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F",
    description: "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u043C \u043F\u043B\u0430\u043D\u043E\u043C",
  },
  {
    number: 6,
    title: "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
    description: "\u00AB\u0423\u0441\u0438\u043B\u0438\u0432\u0430\u0435\u043C \u0441\u0438\u043B\u044C\u043D\u043E\u0435\u00BB, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044F \u0441\u0430\u043C\u044B\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0430\u0443\u0434\u0438\u0442?",
    answer:
      "\u0412 \u0430\u0443\u0434\u0438\u0442 \u0432\u0445\u043E\u0434\u0438\u0442 \u0430\u043D\u0430\u043B\u0438\u0437 \u0441\u0430\u0439\u0442\u0430, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439, \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439, \u0432\u043E\u0440\u043E\u043D\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u044B. \u0412 \u0438\u0442\u043E\u0433\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 PDF-\u043E\u0442\u0447\u0451\u0442 + \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433-\u043F\u043B\u0430\u043D \u0441 \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u044B\u043C\u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C\u0438.",
  },
  {
    question: "\u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043E\u0434\u043D\u043E\u0439 \u0443\u0441\u043B\u0443\u0433\u043E\u0439?",
    answer:
      "\u0414\u0430, \u043A\u043E\u043D\u0435\u0447\u043D\u043E. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043B\u044E\u0431\u0443\u044E \u0443\u0441\u043B\u0443\u0433\u0443 \u2014 SEO, \u0442\u0430\u0440\u0433\u0435\u0442, Google Ads, SMM, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 CRM. \u041D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u0430\u0451\u0442 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434.",
  },
  {
    question: "\u0414\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430?",
    answer:
      "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0445 KPI: \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043B\u0438\u0434\u0430, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0437\u0430\u044F\u0432\u043E\u043A, \u0440\u043E\u0441\u0442 \u0442\u0440\u0430\u0444\u0438\u043A\u0430, \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438. \u0424\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u044B, \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u0446\u0435\u043B\u0438 \u0438 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0438\u0444\u0440\u044B.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "auto-ecommerce-romania",
    title: "1 547 668 RON за 6 месяцев",
    subtitle: "E-Commerce в авто-сегменте. Facebook Ads + TikTok Ads для бренда навигационных консолей.",
    category: "E-Commerce",
    channels: ["Facebook Ads", "TikTok Ads"],
    metrics: [
      { label: "Выручка", value: "1 547 668 RON" },
      { label: "Продажи", value: "1 509 шт." },
      { label: "Средний CAC", value: "95.56 RON" },
      { label: "Рост продаж", value: "+49.5%" },
    ],
    challenge: "8-летний бренд с сильным продуктом, но нулевой рекламной историей на Meta и TikTok. Узкая ЦА: владельцы авто, обновляющие навигационные системы.",
    strategy: [
      "Одновременный тест TikTok + Facebook с бюджетами 200\u2013400 RON/день",
      "Выявлено: TikTok генерирует в 4 раза меньше продаж \u2014 оптимальное распределение 75% Facebook / 25% TikTok",
      "Динамическое управление бюджетом на основе real-time данных в течение дня",
      "Масштабирование с 500 RON/день при сохранении эффективности",
    ],
    results: [
      "1 547 668 RON выручки за 6 месяцев",
      "1 509 продаж, средний CAC снижен до 95.56 RON",
      "В первый месяц: 196 073 RON, CAC снижен со 110 до 60 RON",
      "Возвраты: ~0.17% (1 на 600 заказов)",
    ],
    gradient: "from-amber-200/70 via-orange-100/50 to-yellow-50/30",
    badge: "bg-amber-100 text-amber-800",
    heroImage: "/images/cases/case-auto-romania.jpg",
    images: [
      "/images/cases/case-auto-romania-2.png",
      "/images/cases/case-auto-romania-3.jpg",
      "/images/cases/case-auto-romania-4.jpg",
      "/images/cases/case-auto-romania-5.jpg",
      "/images/cases/case-auto-romania-6.jpg",
      "/images/cases/case-auto-romania-7.jpg",
    ],
  },
  {
    id: "ecommerce-0-to-118k",
    title: "С $0 до $118 000 за 90 дней",
    subtitle: "Запуск e-commerce нового бренда спортивных аксессуаров через Facebook и TikTok Ads.",
    category: "E-Commerce",
    channels: ["Facebook Ads", "TikTok Ads", "Advantage+"],
    metrics: [
      { label: "Выручка (90 дн.)", value: "$118 000" },
      { label: "ROAS", value: "510%" },
      { label: "Продажи", value: "2 400+" },
      { label: "CAC", value: "$9" },
    ],
    challenge: "Новый продукт с нулевым узнаванием бренда. Нужно проверить спрос, выйти на окупаемость в первые недели и достичь $100K+ оборота за 3 месяца.",
    strategy: [
      "Настройка Meta Pixel + TikTok Pixel, UTM, математическое моделирование CAC/CPA/ROAS",
      "TikTok: 18 нативных коротких видео (POV, UGC, обзоры) с 4 вариантами офферов",
      "Facebook: ABO + CBO тесты, 12 сегментов аудитории, ремаркетинг 7/14/30 дней",
      "TikTok \u2014 верх воронки, Facebook + Advantage Plus \u2014 основной драйвер продаж",
    ],
    results: [
      "14 дней: CAC $9, найдены 2 Facebook + 1 TikTok связки",
      "30 дней: $38 000 выручки, 420% ROAS, +27% CTR",
      "60 дней: $78 000 выручки, 11 500 кликов, $11 CPA",
      "90 дней: $118 000 выручки, 510% ROAS, 2 400+ продаж",
    ],
    gradient: "from-emerald-200/70 via-green-100/50 to-teal-50/30",
    badge: "bg-emerald-100 text-emerald-800",
    heroImage: "/images/cases/case-ecommerce-118k.png",
  },
  {
    id: "auto-literature-969-roas",
    title: "969% ROAS и 160+ продаж/мес",
    subtitle: "Google Ads для интернет-магазина автомобильной литературы. Performance Max + Shopping.",
    category: "E-Commerce",
    channels: ["Google Ads", "Performance Max", "Shopping"],
    metrics: [
      { label: "ROAS", value: "969%" },
      { label: "Продажи/мес", value: "160+" },
      { label: "Рост продаж", value: "3x" },
      { label: "Выручка", value: "~150 000 UAH" },
    ],
    challenge: "Нишевый магазин автолитературы (мануалы, инструкции). Тысячи запросов по маркам/моделям \u2014 невозможно покрыть вручную.",
    strategy: [
      "Настройка GA4, Google Search Console, конверсии, геотаргетинг",
      "Брендовые, конкурентные и категорийные поисковые кампании",
      "Dynamic Search Ads (DSA) для автоматического покрытия тысяч запросов",
      "Performance Max + Google Shopping после исправления ошибок сайта",
    ],
    results: [
      "969% ROAS \u2014 возврат почти 10x на каждый вложенный доллар",
      "148+ продаж в первый месяц после запуска PMax",
      "160+ продаж/мес на стабильной основе",
      "DSA: 80% средний показатель верхней позиции",
    ],
    gradient: "from-blue-200/70 via-indigo-100/50 to-violet-50/30",
    badge: "bg-blue-100 text-blue-800",
    heroImage: "/images/cases/case-969roas-1.png",
    images: [
      "/images/cases/case-969roas-2.png",
      "/images/cases/case-969roas-3.png",
      "/images/cases/case-969roas-4.png",
      "/images/cases/case-969roas-5.png",
      "/images/cases/case-969roas-6.png",
      "/images/cases/case-969roas-7.png",
    ],
  },
  {
    id: "saas-14-markets",
    title: "SaaS-запуск на 14 рынков: 3 000+ лидов",
    subtitle: "GPS-навигация для тракторов. Google Ads + Facebook Ads по 14 странам Европы и Южной Африки.",
    category: "SaaS / AgriTech",
    channels: ["Google Ads", "Facebook Ads", "Looker Studio"],
    metrics: [
      { label: "Визиты", value: "120 000+" },
      { label: "Лиды", value: "3 000+" },
      { label: "Квалиф. лиды", value: "900" },
      { label: "Снижение CPL", value: "65%+" },
    ],
    challenge: "Агро-SaaS продукт (GPS-навигация на смартфоне для тракторов) нужно вывести на 14 стран. Определить перспективные рынки и аудитории.",
    strategy: [
      "Интеграция CRM \u2192 Google Analytics для оценки качества лидов",
      "Google: брендовые, категорийные, конкурентные кампании + Smart Display + Discovery",
      "Facebook: конверсии + лид-формы на Lookalike, ретаргетинг CRM-контактов",
      "A/B-тестирование креативов, сообщений и форматов по странам",
    ],
    results: [
      "120 000+ посетителей сайта за 6 месяцев",
      "3 000+ лидов, из них 900 квалифицированных",
      "CPC снижен в 2 раза, конверсия +50%",
      "Стоимость лида снижена на 65%+",
    ],
    gradient: "from-teal-200/70 via-cyan-100/50 to-sky-50/30",
    badge: "bg-teal-100 text-teal-800",
    heroImage: "/images/cases/case-saas-14.jpg",
  },
  {
    id: "pet-products-uk",
    title: "Выход на рынок UK: продажи x4",
    subtitle: "Онлайн-магазин зоотоваров. Google Ads: Performance Max + Search для британского рынка.",
    category: "E-Commerce",
    channels: ["Google Ads", "Performance Max", "Search"],
    metrics: [
      { label: "Рост трафика", value: "+1000%" },
      { label: "ROAS", value: "400%+" },
      { label: "Продажи/мес", value: "1 000+" },
      { label: "Результат", value: "Бренд закрепился" },
    ],
    challenge: "Магазин зоотоваров выходит на UK-рынок: ~100 визитов/день, нулевое узнавание бренда, отсутствие данных о конверсиях.",
    strategy: [
      "Миграция с UA на GA4, интеграция GA4 + Shopify, GTM для поведенческого трекинга",
      "Performance Max + Google Search как основные каналы",
      "Сегментация товаров по маржинальности, отключение убыточных SKU",
      "PMax на Target ROAS, усиление брендовых запросов (600%+ ROAS)",
    ],
    results: [
      "Трафик +1000% за 30 дней",
      "ROAS стабильно 400%+",
      "1 000+ транзакций в месяц",
      "Бренд занял конкурентную позицию на рынке UK",
    ],
    gradient: "from-sky-200/70 via-blue-100/50 to-indigo-50/30",
    badge: "bg-sky-100 text-sky-800",
    heroImage: "/images/cases/case-pet-uk.jpg",
  },
  {
    id: "household-0-to-100k",
    title: "С \u00a30 до \u00a3100 000 за 8 недель",
    subtitle: "Запуск e-commerce бренда Household & Gadgets на UK-рынке через Facebook Ads.",
    category: "E-Commerce",
    channels: ["Facebook Ads", "Shopify", "Klaviyo"],
    metrics: [
      { label: "Выручка", value: "\u00a3100 000+" },
      { label: "Дневная выручка", value: "\u00a35 000" },
      { label: "Срок", value: "8 недель" },
      { label: "ROAS", value: "Стабильный" },
    ],
    challenge: "Новый бренд товаров для дома на UK-рынке: ноль трафика, ноль рекламной истории, ноль инфраструктуры.",
    strategy: [
      "Shopify-тема + Meta Pixel + Klaviyo (welcome, abandoned cart)",
      "Интеграции: Loox, Bundler, Candy Rack, SMSBump",
      "Закупка 1 000 ед. через Alibaba с тестированием образцов",
      "Старт рекламы с UGC-креативами, масштабирование до \u00a35 000/день",
    ],
    results: [
      "\u00a3100 000+ выручки за 8 недель",
      "Масштабирование до \u00a35 000 дневной выручки",
      "Стабильный ROAS при масштабировании",
      "Полностью рабочая логистическая инфраструктура",
    ],
    gradient: "from-rose-200/70 via-pink-100/50 to-fuchsia-50/30",
    badge: "bg-rose-100 text-rose-800",
    heroImage: "/images/cases/case-household.jpg",
    images: [
      "/images/cases/case-household-2.png",
      "/images/cases/case-household-3.png",
      "/images/cases/case-household-4.png",
      "/images/cases/case-household-5.png",
    ],
  },
  {
    id: "cosmetics-5x-conversion",
    title: "5x рост конверсии, \u2212240% стоимости транзакции",
    subtitle: "Performance-маркетинг для компании косметики и парфюмерии. Google + Facebook + Criteo.",
    category: "E-Commerce / Beauty",
    channels: ["Google Ads", "Facebook Ads", "Criteo", "SA360"],
    metrics: [
      { label: "Рост конверсии", value: "5x" },
      { label: "Снижение ERS", value: "260%" },
      { label: "Conv. Rate", value: "0.20% \u2192 1.06%" },
      { label: "Период", value: "8 месяцев" },
    ],
    challenge: "Крупная компания косметики и парфюмерии с прямыми продажами и e-commerce. Цель: ROI 3:1, рост онлайн-продаж, снижение стоимости транзакции.",
    strategy: [
      "Аудит GTM, GA, Google Ads, Merchant Center, Facebook Ads",
      "Доработка сайта по данным аналитики \u2192 конверсия x2",
      "GA360 + Campaign Manager + Search Ads 360 для автоматизации",
      "Shopping, DSA, Criteo ремаркетинг, Facebook Dynamic Catalog",
    ],
    results: [
      "Конверсия выросла в 5 раз: с 0.20% до 1.06%",
      "Стоимость транзакции снижена на 240%",
      "ERS снижен на 260%",
      "Многоканальная оптимизация: Search, Shopping, Display, Social",
    ],
    gradient: "from-fuchsia-200/70 via-purple-100/50 to-violet-50/30",
    badge: "bg-fuchsia-100 text-fuchsia-800",
    heroImage: "/images/cases/case-cosmetics.jpg",
  },
  {
    id: "car-rental-app",
    title: "33 000+ установок, CPI $0.22",
    subtitle: "Масштабирование мобильного приложения по аренде авто. Google Ads + DV360.",
    category: "Mobile App",
    channels: ["Google Ads", "DV360", "AppsFlyer"],
    metrics: [
      { label: "Установки", value: "33 000+" },
      { label: "CPI", value: "$0.22" },
      { label: "Удержание 30д", value: "25%" },
      { label: "Активные юзеры", value: "80%" },
    ],
    challenge: "Компания аренды авто запускает поминутную аренду. Нужно 30 000 установок за 3 месяца при CPI $0.25, плюс стратегия удержания.",
    strategy: [
      "Микс Google Ads + DV360 для iOS и Android",
      "Сегментация: интересы, гео, in-app активность, look-alike",
      "AppsFlyer \u2192 DV360 \u2192 Google Ads синхронизация",
      "Прогрессивный сдвиг от установок к high-value событиям (регистрация, аренда)",
    ],
    results: [
      "33 000+ установок (превысили цель 30 000)",
      "Средний CPI: $0.22 (ниже цели $0.25)",
      "25% возвращаются в течение 30 дней",
      "80% зарегистрированных продолжают пользоваться регулярно",
    ],
    gradient: "from-violet-200/70 via-indigo-100/50 to-blue-50/30",
    badge: "bg-violet-100 text-violet-800",
    heroImage: "/images/cases/case-car-rental.jpg",
  },
  {
    id: "lamel-international",
    title: "5M+ показов: Lamel в Польше и Италии",
    subtitle: "Международная медийная кампания для украинского бренда декоративной косметики.",
    category: "Brand Awareness",
    channels: ["YouTube", "TikTok", "DV360", "Google Ads", "Meta Ads"],
    metrics: [
      { label: "Показы", value: "5 000 000+" },
      { label: "Охват Польша", value: "762 000" },
      { label: "Охват Италия", value: "913 000" },
      { label: "Рост брендовых", value: "+40%" },
    ],
    challenge: "Украинский бренд Lamel ускорил выход на европейские рынки после 2022 года. Без собственного лендинга \u2014 трафик на сайты партнёров-ритейлеров.",
    strategy: [
      "YouTube TrueView In-Stream (15 сек) + Bumper Ads (6 сек), TikTok In-Feed",
      "DV360 программатик-дисплей для масштаба",
      "Google Display + Meta Lookalike + Google Search (бренд, категория, конкуренты)",
      "Трафик направлен на партнёрские сайты ритейлеров",
    ],
    results: [
      "5 000 000+ показов суммарно в двух странах",
      "Польша: 762 000 охват, Италия: 913 000 охват",
      "Брендовые запросы: +40%, категорийные: +98%, конкурентные: +67%",
      "Успешный выход без собственного лендинга",
    ],
    gradient: "from-pink-200/70 via-rose-100/50 to-red-50/30",
    badge: "bg-pink-100 text-pink-800",
    heroImage: "/images/cases/case-lamel.jpg",
    images: [
      "/images/cases/case-lamel-2.jpg",
      "/images/cases/case-lamel-3.png",
      "/images/cases/case-lamel-4.png",
    ],
  },
  {
    id: "kasta-black-friday",
    title: "3.5x продажи: Black Friday Kasta",
    subtitle: "Видеокампания для маркетплейса Kasta. YouTube + DV360 + Megogo.",
    category: "Marketplace",
    channels: ["YouTube", "DV360", "Megogo", "Fusify"],
    metrics: [
      { label: "Рост продаж", value: "3.5x" },
      { label: "Brand awareness", value: "+11%" },
      { label: "Показы", value: "+17% к плану" },
      { label: "Охват", value: "+32% к плану" },
    ],
    challenge: "Kasta \u2014 крупный украинский маркетплейс. Конкуренция с Rozetka, Prom, Temu. С 2020 бренд-коммуникации были на паузе. Нужно восстановить узнаваемость и x3 продажи на Black Friday.",
    strategy: [
      "Инсайт: людей мотивирует не скидка, а эмоция находки \u2014 Black Friday = \u00abПраздник открытий\u00bb",
      "YouTube Ad Sequencing: длинное эмоциональное видео + короткие продуктовые",
      "DV360 баннеры + Megogo + Fusify Mobile Brander",
      "TrueView for Reach + In-Stream + Bumper Ads ремаркетинг",
    ],
    results: [
      "Продажи x3.5 по сравнению с Black Friday 2023",
      "Узнаваемость бренда: +11%",
      "Показы: +17% сверх плана, охват: +32% сверх плана",
      "Все KPI превышены, позиция Kasta укреплена",
    ],
    gradient: "from-orange-200/70 via-amber-100/50 to-yellow-50/30",
    badge: "bg-orange-100 text-orange-800",
    heroImage: "/images/cases/case-kasta.png",
    images: ["/images/cases/case-kasta-2.png"],
  },
];
