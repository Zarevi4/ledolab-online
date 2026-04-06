export interface Fact {
  id: string;
  num: string;
  titles: Record<string, string>;
  texts: Record<string, string>;
  image: string;
}

export const facts: Fact[] = [
  {
    id: "7-years-experience",
    num: "1",
    titles: {
      en: "7+ years of experience",
      ru: "7+ лет опыта",
      uk: "7+ років досвіду",
      bg: "7+ години опит",
    },
    texts: {
      en: "We've grown from working with local projects to supporting startups and companies across Europe, the USA, and the CIS. We understand the market, trends, and real business challenges - no theory, no fluff.",
      ru: "Мы выросли от работы с локальными проектами до поддержки стартапов и компаний по всей Европе, США и СНГ. Мы понимаем рынок, тренды и реальные бизнес-вызовы - никакой теории, только практика.",
      uk: "Ми виросли від роботи з локальними проєктами до підтримки стартапів та компаній по всій Європі, США та СНД. Ми розуміємо ринок, тренди та реальні бізнес-виклики.",
      bg: "Израснахме от работа с локални проекти до подкрепа на стартъпи и компании в Европа, САЩ и ОНД. Разбираме пазара, тенденциите и реалните бизнес предизвикателства.",
    },
    image: "/images/cases/card-fb1.png",
  },
  {
    id: "100-projects",
    num: "2",
    titles: {
      en: "100+ completed projects",
      ru: "100+ завершённых проектов",
      uk: "100+ завершених проєктів",
      bg: "100+ завършени проекта",
    },
    texts: {
      en: "Startups, eCommerce, services, B2B - we grow sales systematically. Each case is a complete sales system: strategy, advertising, website, analytics.",
      ru: "Стартапы, eCommerce, услуги, B2B - мы системно растим продажи. Каждый кейс - это полная система продаж: стратегия, реклама, сайт, аналитика.",
      uk: "Стартапи, eCommerce, послуги, B2B - ми системно ростимо продажі. Кожний кейс - це повна система продажів: стратегія, реклама, сайт, аналітика.",
      bg: "Стартъпи, eCommerce, услуги, B2B - системно увеличаваме продажбите. Всеки кейс е пълна система за продажби: стратегия, реклама, сайт, аналитика.",
    },
    image: "/images/cases/card-google1.jpg",
  },
  {
    id: "1m-under-management",
    num: "3",
    titles: {
      en: "$1,000,000+ under management",
      ru: "$1 000 000+ под управлением",
      uk: "$1 000 000+ під управлінням",
      bg: "$1 000 000+ под управление",
    },
    texts: {
      en: "We handle both small and large budgets and know how to make every dollar generate profit. Transparency, reporting, and KPI-driven work are essential parts of every project.",
      ru: "Мы работаем как с малыми, так и с крупными бюджетами и знаем, как заставить каждый доллар приносить прибыль. Прозрачность, отчётность и KPI - обязательная часть каждого проекта.",
      uk: "Ми працюємо як з малими, так і з великими бюджетами і знаємо, як змусити кожен долар приносити прибуток. Прозорість, звітність та KPI - обов'язкова частина кожного проєкту.",
      bg: "Работим както с малки, така и с големи бюджети и знаем как да направим всеки долар печеливш. Прозрачност, отчетност и KPI са задължителна част от всеки проект.",
    },
    image: "/images/cases/card-fb3.png",
  },
  {
    id: "300-sales-growth",
    num: "4",
    titles: {
      en: "Up to 300% sales growth",
      ru: "До 300% роста продаж",
      uk: "До 300% зростання продажів",
      bg: "До 300% ръст на продажбите",
    },
    texts: {
      en: "We achieve this through a systematic approach: from analytics and strategy to campaign optimization. We work with proven methods that deliver real results.",
      ru: "Мы достигаем этого через системный подход: от аналитики и стратегии до оптимизации кампаний. Работаем проверенными методами, дающими реальные результаты.",
      uk: "Ми досягаємо цього через системний підхід: від аналітики і стратегії до оптимізації кампаній. Працюємо перевіреними методами, що дають реальні результати.",
      bg: "Постигаме това чрез системен подход: от аналитика и стратегия до оптимизация на кампании. Работим с доказани методи, които дават реални резултати.",
    },
    image: "/images/cases/card-shopify1.jpg",
  },
  {
    id: "92-referrals",
    num: "5",
    titles: {
      en: "92% of clients come via referral",
      ru: "92% клиентов приходят по рекомендации",
      uk: "92% клієнтів приходять за рекомендацією",
      bg: "92% от клиентите идват по препоръка",
    },
    texts: {
      en: "Clients recommend us because we work honestly, don't inflate metrics, and always keep our word. We invest in every project as if it were our own business.",
      ru: "Клиенты рекомендуют нас, потому что мы работаем честно, не раздуваем метрики и всегда держим слово. Мы вкладываемся в каждый проект, как в свой собственный бизнес.",
      uk: "Клієнти рекомендують нас, бо ми працюємо чесно, не роздуваємо метрики і завжди тримаємо слово. Ми вкладаємось у кожен проєкт, як у свій власний бізнес.",
      bg: "Клиентите ни препоръчват, защото работим честно, не надуваме метрики и винаги държим на думата си. Инвестираме във всеки проект, сякаш е наш собствен бизнес.",
    },
    image: "/images/cases/card-tt1.jpg",
  },
  {
    id: "24-72-hours",
    num: "6",
    titles: {
      en: "24-72 hours to first launches",
      ru: "24-72 часа до первых запусков",
      uk: "24-72 години до перших запусків",
      bg: "24-72 часа до първите стартирания",
    },
    texts: {
      en: "We don't spend weeks on preparation - we act quickly and precisely according to plan. You get your first leads and results immediately after the strategy is approved.",
      ru: "Мы не тратим недели на подготовку - действуем быстро и точно по плану. Первые лиды и результаты вы получаете сразу после утверждения стратегии.",
      uk: "Ми не витрачаємо тижні на підготовку - діємо швидко і точно за планом. Перші ліди та результати ви отримуєте одразу після затвердження стратегії.",
      bg: "Не прекарваме седмици в подготовка - действаме бързо и точно по план. Получавате първите лидове и резултати веднага след одобряване на стратегията.",
    },
    image: "/images/cases/card-fb6.png",
  },
  {
    id: "3-geo-presences",
    num: "7",
    titles: {
      en: "3 geo-presences",
      ru: "3 гео-присутствия",
      uk: "3 гео-присутності",
      bg: "3 гео-присъствия",
    },
    texts: {
      en: "We work with clients from Europe, the USA, and the CIS, understanding the specifics of different markets. All processes are online, transparent, and fully under your control.",
      ru: "Мы работаем с клиентами из Европы, США и СНГ, понимая специфику разных рынков. Все процессы онлайн, прозрачны и полностью под вашим контролем.",
      uk: "Ми працюємо з клієнтами з Європи, США та СНД, розуміючи специфіку різних ринків. Всі процеси онлайн, прозорі і повністю під вашим контролем.",
      bg: "Работим с клиенти от Европа, САЩ и ОНД, разбирайки спецификата на различните пазари. Всички процеси са онлайн, прозрачни и изцяло под ваш контрол.",
    },
    image: "/images/cases/card-fb2.png",
  },
];
