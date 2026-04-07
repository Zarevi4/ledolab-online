"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const SevenFacts = dynamic(() => import("@/components/SevenFacts"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: false });
const CaseStudies = dynamic(() => import("@/components/CaseStudies"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const AboutOwner = dynamic(() => import("@/components/AboutOwner"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function HomeContent() {
  return (
    <>
      <main>
        <Hero />
        <SevenFacts />
        <Services />
        <Stats />
        <Certificates />
        <CaseStudies />
        <AboutOwner />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
