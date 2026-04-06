export type Locale = "ru" | "en" | "bg" | "uk";

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    cases: string;
    reviews: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    promoPrice: string;
    promoOld: string;
    promoDesc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    popular: string;
    cta: string;
    perMonth: string;
  };
  stats: {
    tag: string;
    title: string;
    titleAccent: string;
    items: { value: string; label: string }[];
  };
  cases: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
  };
  about: {
    tag: string;
    title: string;
    titleAccent: string;
    bio: string;
    highlights: { title: string; desc: string }[];
  };
  process: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    tag: string;
    title: string;
    titleAccent: string;
  };
  faq: {
    tag: string;
    title: string;
    titleAccent: string;
    items: { question: string; answer: string }[];
    cta: string;
  };
  contact: {
    tag: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    name: string;
    email: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    serviceOptions: string[];
  };
  footer: {
    copyright: string;
  };
  casePage: {
    back: string;
    challenge: string;
    strategy: string;
    results: string;
    screenshots: string;
    ctaTitle: string;
    ctaSubtitle: string;
    cta: string;
    related: string;
    go: string;
    goals: string;
    situation: string;
    strategyFull: string;
    conclusion: string;
  };
  factPage: {
    back: string;
  };
  modal: {
    title: string;
    subtitle: string;
    send: string;
  };
}
