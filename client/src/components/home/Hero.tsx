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
              className="relative bg-transparent overflow-hidden z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="service-image-container rounded-lg overflow-hidden">
                <motion.img 
                  src="/images/workflow-animation.png" 
                  alt="AI Workflow Automation" 
                  className={`w-full h-full object-contain ${isLoaded ? 'image-loaded' : ''}`}
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                />
                
                {/* Animated elements overlaying the workflow image */}
                <motion.div 
                  className="absolute top-1/2 left-1/3 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute top-1/4 right-1/3 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
                
                {/* Animated connection lines */}
                <motion.div 
                  className="absolute top-1/3 left-1/2 h-[1px] bg-gradient-to-r from-blue-400 to-green-400"
                  style={{ width: '25%' }}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute top-2/3 right-1/3 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400"
                  style={{ width: '20%' }}
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                />
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
