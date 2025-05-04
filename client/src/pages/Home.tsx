import { useEffect, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";

// Define service data directly in Home component
const services = [
  {
    icon: "bx-trending-up",
    title: "Paid Advertising",
    description: "Data-driven campaigns across Meta, Google, and YouTube that maximize ROI and predictably scale your business.",
    features: [
      "Advanced audience targeting",
      "Cross-platform optimization",
      "A/B testing and iteration"
    ],
    gradientClass: "blue-gradient",
    image: "/images/ads.jpg"
  },
  {
    icon: "bx-bot",
    title: "AI Automation",
    description: "Intelligent automation systems that nurture leads, manage customer relationships, and handle repetitive tasks.",
    features: [
      "CRM intelligent workflows",
      "Automated lead nurturing",
      "AI-powered chatbots"
    ],
    gradientClass: "purple-gradient",
    image: "/images/Hero_AI_Workflow_Automation.jpg"
  },
  {
    icon: "bx-code-block",
    title: "Website Design",
    description: "High-converting, responsive websites that turn visitors into customers with strategic UX and beautiful UI design.",
    features: [
      "Conversion-focused layouts",
      "Responsive across all devices",
      "SEO-optimized structure"
    ],
    gradientClass: "bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))]",
    image: "/images/code.jpg"
  }
];

export default function Home() {
  // Show all content immediately without animations or delays
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        
        {/* Services section - implemented directly in Home component for visibility */}
        <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Growth-Focused Services</h2>
              <p className="text-gray-600 dark:text-gray-400">We combine cutting-edge technology with strategic expertise to drive measurable results for your business.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full flex flex-col overflow-hidden service-card">
                  {/* Service icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${service.gradientClass}`}>
                    <i className={`bx ${service.icon} text-3xl text-white`}></i>
                  </div>
                  
                  {/* Service title */}
                  <h3 className="font-poppins font-bold text-xl mb-3">{service.title}</h3>
                  
                  {/* Service description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  {/* Service image */}
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg service-image-container">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Overlay text on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white font-poppins font-semibold text-lg px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service features */}
                  <ul className="space-y-2 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <i className="bx bx-check text-green-500 text-xl mr-2"></i>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CaseStudies />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
