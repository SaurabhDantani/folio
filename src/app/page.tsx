import Hero from "./components/Hero";
import LocationGEOSection from "./components/LocationGEOSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import HowIWorkSection from "./components/HowIWorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationGEOSection />
      <ServicesSection />
      <SkillsSection />
      <Projects />
      <HowIWorkSection />
      <TestimonialsSection />
      <FAQSection />
      <section className="py-12 bg-white/[0.01]" aria-label="Contact Form">
        <div className="container max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
      <CTABanner />
    </>
  );
}