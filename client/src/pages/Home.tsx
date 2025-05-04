import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { setupScrollReveal } from "@/lib/utils";

export default function Home() {
  const mountedRef = useRef(false);

  useEffect(() => {
    // Set up scroll reveal
    setupScrollReveal();
    
    // Force all reveal elements to be active initially
    const revealAll = () => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('active');
      });
    };
    
    // Ensure services are visible
    const activateServicesSection = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('active');
        });
      }
    };
    
    // Run multiple times to ensure visibility
    setTimeout(revealAll, 100);
    setTimeout(activateServicesSection, 200);
    setTimeout(setupScrollReveal, 500);
    
    // Re-run after a longer delay to catch any slow-loading elements
    if (!mountedRef.current) {
      mountedRef.current = true;
      setTimeout(revealAll, 1000);
      setTimeout(setupScrollReveal, 1500);
    }
    
    return () => {
      // Clean up any potential event listeners
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        {/* Add explicit z-index and position to ensure Services is visible */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Services />
        </div>
        <CaseStudies />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
