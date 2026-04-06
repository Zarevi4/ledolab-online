import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LedoLab — Marketing & Digital Agency | Маркетинг под ключ",
    template: "%s — LedoLab",
  },
  description:
    "Системно выводим бизнесы на рынок под ключ — от первой продажи до $100 000. Получите 50+ лидов за 30 дней. Performance-маркетинг, таргет, Google Ads, SEO.",
  keywords: [
    "маркетинг под ключ",
    "digital агентство",
    "performance маркетинг",
    "таргетированная реклама",
    "Google Ads",
    "Facebook Ads",
    "TikTok Ads",
    "лидогенерация",
    "масштабирование бизнеса",
    "LedoLab",
  ],
  authors: [{ name: "Денис Ледовской", url: "https://ledolab.online" }],
  creator: "LedoLab Digital",
  metadataBase: new URL("https://ledolab.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LedoLab — Marketing & Digital Agency",
    description:
      "Получите первые 50+ лидов за 30 дней — без угадываний и пустых трат. Окупаемый маркетинг от команды с 10+ годами опыта.",
    url: "https://ledolab.online",
    siteName: "LedoLab",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LedoLab — Marketing & Digital Agency",
    description:
      "Системно выводим бизнесы от 0 до $100 000. Performance-маркетинг, таргет, Google Ads.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ledolab.online/#organization",
      name: "LedoLab Digital",
      alternateName: "LEDO LAB EOOD",
      url: "https://ledolab.online",
      logo: "https://ledolab.online/images/homepage/hero.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+380638619285",
        contactType: "sales",
        email: "support@ledolab.online",
        availableLanguage: ["Russian", "Ukrainian", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Burgas",
        addressCountry: "BG",
      },
      sameAs: [
        "https://t.me/ledolab",
        "https://instagram.com/ledolab",
        "https://youtube.com/@ledolab",
        "https://tiktok.com/@ledolab",
      ],
      founder: {
        "@type": "Person",
        name: "Денис Ледовской",
        jobTitle: "Founder & CEO",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ledolab.online/#website",
      url: "https://ledolab.online",
      name: "LedoLab",
      publisher: { "@id": "https://ledolab.online/#organization" },
      inLanguage: "ru",
    },
    {
      "@type": "WebPage",
      "@id": "https://ledolab.online/#webpage",
      url: "https://ledolab.online",
      name: "LedoLab — Marketing & Digital Agency",
      isPartOf: { "@id": "https://ledolab.online/#website" },
      about: { "@id": "https://ledolab.online/#organization" },
      description:
        "Системно выводим бизнесы на рынок под ключ — от первой продажи до $100 000.",
      inLanguage: "ru",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ledolab.online/#service",
      name: "LedoLab Digital Marketing",
      provider: { "@id": "https://ledolab.online/#organization" },
      serviceType: "Digital Marketing Agency",
      areaServed: ["Europe", "USA", "CIS"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Маркетинговые услуги",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth Starter System",
              description: "Facebook/Instagram Ads, 1 воронка продаж, базовый email-маркетинг, CRO",
            },
            price: "400",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "400",
              priceCurrency: "EUR",
              unitCode: "MON",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth System",
              description: "2 источника трафика, 2-3 воронки, email + follow-up, кросс-платформенная аналитика",
            },
            price: "800",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "800",
              priceCurrency: "EUR",
              unitCode: "MON",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Growth Full System Enterprise",
              description: "Все источники трафика, 5+ воронок, полные CRM/ERP/BI интеграции",
            },
            price: "1500",
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1500",
              priceCurrency: "EUR",
              unitCode: "MON",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Что входит в аудит?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "В аудит входит анализ сайта, рекламных кампаний, соцсетей, воронки продаж и конкурентной среды. В итоге вы получаете PDF-отчёт + персональный маркетинг-план с пошаговыми рекомендациями.",
          },
        },
        {
          "@type": "Question",
          name: "Можно ли начать работать только с одной услугой?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да, конечно. Вы можете выбрать любую услугу — SEO, таргет, Google Ads, SMM, создание сайта или подключение CRM. Но максимальный результат даёт комплексный подход.",
          },
        },
        {
          "@type": "Question",
          name: "Даете ли вы гарантии результата?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Мы работаем на основе прозрачных KPI: стоимость лида, количество заявок, рост трафика, конверсии. Формируем прогнозы, фиксируем цели и ежемесячно показываем реальные цифры.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sora.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t==null&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen grain antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
