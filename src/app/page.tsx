import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SevenFacts from "@/components/SevenFacts";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Certificates from "@/components/Certificates";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import AboutOwner from "@/components/AboutOwner";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
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
