import Hero from "./components/Hero";
import LocationGEOSection from "./components/LocationGEOSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import FAQSection from "./components/FAQSection";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationGEOSection />
      <ServicesSection />
      <SkillsSection />
      <Projects />
      <FAQSection />
      <section className="py-12 bg-white/[0.01]">
        <div className="container max-w-6xl mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </>
  );
}