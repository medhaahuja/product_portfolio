import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PhilosophySection from "@/components/philosophy-section";
import ImpactBanner from "@/components/impact-banner";
import BuilderStrip from "@/components/builder-strip";
import CaseStudiesSection from "@/components/case-studies-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="bg-deep-black text-white font-inter overflow-x-hidden">
      <div id="scroll-progress" className="scroll-progress" style={{ width: '0%' }}></div>
      <Header />
      <HeroSection />
      <PhilosophySection />
      <ImpactBanner />
      <BuilderStrip />
      <CaseStudiesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
