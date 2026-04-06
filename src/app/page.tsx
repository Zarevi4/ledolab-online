import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const SevenFacts = dynamic(() => import("@/components/SevenFacts"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const Certificates = dynamic(() => import("@/components/Certificates"), { ssr: true });
const CaseStudies = dynamic(() => import("@/components/CaseStudies"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const AboutOwner = dynamic(() => import("@/components/AboutOwner"), { ssr: true });
const Process = dynamic(() => import("@/components/Process"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
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
