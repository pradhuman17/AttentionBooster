import { GradientText } from "@/components/ui/gradient-text";
import { AnimateSection } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after component mount for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const statsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute w-96 h-96 bg-[hsl(var(--royal-blue))] rounded-full blur-[100px] -top-10 -left-10"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute w-96 h-96 bg-[hsl(var(--electric-purple))] rounded-full blur-[100px] bottom-10 right-10"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateSection className="reveal">
            <motion.h1 
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              We Build Systems That Make You <GradientText>Unstoppable</GradientText>
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate your brand with data-driven strategies that deliver measurable results through paid ads, AI automation, and stunning website design.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="https://calendly.com/pradhumanyadav017/30min?month=2025-05" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-3.5 bg-[hsl(var(--royal-blue))] text-white font-medium rounded-full hover:bg-[hsl(var(--royal-blue-light))] transition-colors shadow-lg hover:shadow-xl btn-hover-effect pulse">
                Book Appointment
                <i className="bx bx-right-arrow-alt ml-1 text-xl"></i>
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] dark:text-white dark:border-white font-medium rounded-full hover:bg-[hsl(var(--royal-blue))]/5 transition-colors">
                See Case Studies
              </a>
            </motion.div>
          </AnimateSection>
          
          <AnimateSection className="relative reveal">
            <motion.div 
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden p-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 left-0 h-2 blue-gradient"
              ></motion.div>
              
              <div className="service-image-container rounded-lg overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Marketing dashboard showing growth metrics" 
                  className={`w-full rounded-lg ${isLoaded ? 'image-loaded' : ''}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              
              <motion.div 
                className="flex items-center mt-4 gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400">+124% Growth</div>
              </motion.div>
              
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Conversion", value: "8.4%" },
                  { label: "Leads", value: "1,428" },
                  { label: "ROI", value: "321%" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"
                    custom={index}
                    variants={statsVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px rgba(26, 26, 255, 0.1)",
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="font-bold text-lg">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute bottom-4 -left-4 purple-gradient w-20 h-20 rounded-full z-0 blur-lg"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-8 -right-8 blue-gradient w-24 h-24 rounded-full z-0 blur-lg"
            ></motion.div>
          </AnimateSection>
        </div>
      </div>
    </section>
  );
}
