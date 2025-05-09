import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      
      // After the exit animation completes, update the location
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 500); // Match this with the exit animation duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);
  
  // Animation variants for main content
  const pageVariants = {
    fadeIn: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth motion
        staggerChildren: 0.05
      }
    },
    fadeOut: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Animation variants for the transition overlay
  const overlayVariants = {
    initial: { 
      scaleY: 0,
      originY: 0 
    },
    animate: { 
      scaleY: 1,
      transition: { 
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000] // Cubic-bezier for the slide effect
      }
    },
    exit: { 
      scaleY: 0,
      originY: 1,
      transition: { 
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.000],
        delay: 0.2
      }
    }
  };
  
  // Define gradient colors based on the path
  const getGradientColor = () => {
    if (location.includes('case-studies')) {
      return "from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))]";
    } else if (location === '/') {
      return "from-[hsl(var(--teal))] to-[hsl(var(--royal-blue))]";
    } else {
      return "from-[hsl(var(--electric-purple))] to-[hsl(var(--royal-blue))]";
    }
  };
  
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Page content with fade effect */}
        <motion.div
          key={displayLocation}
          initial="fadeOut"
          animate={transitionStage}
          variants={pageVariants}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      {/* Transition overlay - appears when switching pages */}
      {location !== displayLocation && (
        <AnimatePresence>
          <motion.div
            key="page-transition-overlay"
            className={`fixed inset-0 z-50 bg-gradient-to-b ${getGradientColor()} pointer-events-none`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayVariants}
          >
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white text-2xl font-bold"
              >
                <div className="relative flex items-center gap-2">
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.1,
                    }}
                  />
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.1,
                      delay: 0.2
                    }}
                  />
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatDelay: 0.1,
                      delay: 0.4
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}