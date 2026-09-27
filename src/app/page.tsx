import Hero from "./components/Hero";
import LocationGEOSection from "./components/LocationGEOSection";
import AboutBentoSection from "./components/AboutBentoSection";
import ServicesSection from "./components/ServicesSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <LocationGEOSection />
      <AboutBentoSection />
      <ServicesSection />
      <JourneySection />
      <SkillsSection />
      <Projects />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <ScrollToTop />
    </>
  );
}