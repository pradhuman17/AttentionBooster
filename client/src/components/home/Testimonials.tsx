import { AnimateSection } from "@/components/ui/motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      content: "The Invincible Growth team didn't just run ads — they engineered a system that works while I sleep. From lead generation to client onboarding, it's all automated. I have more calls, more clients, and more freedom.",
      author: "Maria Gonzalez",
      position: "Executive Coach, USA",
      company: "Elite Coaching Enterprises",
      rating: 5,
      logo: <i className="bx bxs-briefcase text-2xl text-blue-500"></i>
    },
    {
      content: "Using AI Workflow Automation, we increased our website conversion rate from 1.6% to 4.7% and saw a 219% increase in social ad revenue with only a 50% increase in spending! The return on investment has been phenomenal.",
      author: "John Anderson",
      position: "Marketing Director",
      company: "CCO Menswear",
      rating: 5,
      logo: <i className="bx bxs-clothing text-2xl text-red-600"></i>
    },
    {
      content: "In just 90 days, we saw our revenue grow 5X through their strategic Facebook Ads and AI automation system. The brilliant automation workflows saved us 60+ hours per month of manual work while improving our customer conversion.",
      author: "David Chen",
      position: "Founder & CEO",
      company: "TechInnovate Solutions",
      rating: 5,
      logo: <i className="bx bxs-chip text-2xl text-orange-500"></i>
    },
    {
      content: "Our ad campaigns went from barely breaking even to generating a consistent 5.2X ROAS. Their automation system improved our lead response rate by 40% and increased our booking show-up rate to 81%. Truly exceptional work.",
      author: "Sophia Williams",
      position: "Head of Digital Marketing",
      company: "Global Fitness Brands",
      rating: 5,
      logo: <i className="bx bx-dumbbell text-2xl text-green-500"></i>
    },
    {
      content: "Invincible Growth revolutionized our sales funnel. With their AI automation and strategic paid advertising, we achieved a 33% increase in total site revenue year-over-year while reducing our manual follow-up time by 65%.",
      author: "Robert Johnson",
      position: "Sales Director",
      company: "Enterprise Solutions Inc.",
      rating: 5,
      logo: <i className="bx bxs-building-house text-2xl text-blue-600"></i>
    }
  ];

  const clientLogos = [
    { name: "Company 1", icon: <i className="bx bxs-briefcase text-3xl"></i> },
    { name: "Company 2", icon: <i className="bx bxs-building text-3xl"></i> },
    { name: "Company 3", icon: <i className="bx bxs-store text-3xl"></i> },
    { name: "Company 4", icon: <i className="bx bxs-factory text-3xl"></i> },
    { name: "Company 5", icon: <i className="bx bxs-bank text-3xl"></i> },
    { name: "Company 6", icon: <i className="bx bxs-institution text-3xl"></i> }
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, activeIndex]);

  useEffect(() => {
    // Auto-advance the carousel
    intervalRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  // Reset the interval when user interacts with the carousel
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  const handlePrev = () => {
    prevSlide();
    resetInterval();
  };

  const handleNext = () => {
    nextSlide();
    resetInterval();
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
    resetInterval();
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400">See how leading companies have achieved exceptional results with our services</p>
        </motion.div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12 px-4">
          <div className="testimonial-carousel relative overflow-hidden rounded-2xl h-auto bg-white dark:bg-gray-800 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-12"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {testimonials[activeIndex].logo}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white">{testimonials[activeIndex].company}</h3>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <i key={i} className="bx bxs-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <blockquote className="relative">
                  <div className="text-3xl text-[hsl(var(--royal-blue))] absolute -top-2 -left-2">"</div>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 ml-6">
                    {testimonials[activeIndex].content}
                  </p>
                  <div className="text-3xl text-[hsl(var(--royal-blue))] absolute -bottom-4 right-0">"</div>
                </blockquote>
                
                <div className="flex items-center mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[activeIndex].author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <i className="bx bx-chevron-left text-2xl"></i>
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <i className="bx bx-chevron-right text-2xl"></i>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[hsl(var(--royal-blue))] w-6" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Client Logos */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-8">Trusted by Leading Companies</h3>
          <div className="inline-flex items-center flex-wrap justify-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <motion.div 
                key={index}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {logo.icon}
                <span className="sr-only">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
