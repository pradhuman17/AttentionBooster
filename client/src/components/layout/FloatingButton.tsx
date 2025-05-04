import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    // Show the button after scrolling down a bit
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Periodically show the pulse effect to draw attention
    const pulseTiming = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 3000);
    }, 15000);
    
    // Show initial pulse after delay
    const initialTimeout = setTimeout(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 3000);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(pulseTiming);
      clearTimeout(initialTimeout);
    };
  }, []);

  // Different buttons for different actions
  const buttons = [
    {
      id: "whatsapp",
      href: "https://wa.me/message/IIDWXY6YU5YLH1",
      icon: "bxl-whatsapp",
      label: "Chat with us",
      color: "bg-green-600 hover:bg-green-700",
      position: "-left-3"
    },
    {
      id: "calendar",
      href: "https://calendly.com/pradhumanyadav017/30min?month=2025-05",
      icon: "bx-calendar",
      label: "Book a Call",
      color: "bg-blue-600 hover:bg-blue-700",
      position: "-left-2"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="flex flex-col items-end space-y-3"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {buttons.map((button, index) => (
              <motion.div
                key={button.id}
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (index * 0.1) }}
              >
                <motion.a
                  href={button.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center w-12 h-12 ${button.color} text-white rounded-full shadow-lg transition-all duration-300 group-hover:w-auto group-hover:px-4`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`bx ${button.icon} text-xl`}></i>
                  <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out font-poppins text-sm font-medium">
                    {button.label}
                  </span>
                </motion.a>
                
                {/* Label tooltip on hover */}
                <motion.div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${button.position} pointer-events-none bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  {button.label}
                  <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </motion.div>
                
                {/* Attention pulse */}
                {showPulse && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-white opacity-75"></span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main floating case studies button */}
      <motion.a 
        href="#case-studies" 
        className="flex items-center justify-center px-4 py-3 bg-black dark:bg-white dark:text-black text-white rounded-full shadow-lg hover:bg-[hsl(var(--royal-blue))] dark:hover:bg-[hsl(var(--royal-blue))] dark:hover:text-white transition-colors group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          delay: 1
        }}
      >
        <motion.i 
          className="bx bx-trending-up text-lg mr-2"
          animate={{ 
            scale: showPulse ? [1, 1.2, 1] : 1
          }}
          transition={{ 
            duration: 0.5, 
            repeat: showPulse ? 3 : 0, 
            repeatType: "reverse"
          }}
        ></motion.i>
        <span className="font-medium font-poppins">Case Studies</span>
      </motion.a>
    </div>
  );
}
