import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  gradientClass: string;
  image?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  gradientClass,
  image
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Animate features with staggered delay
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  useEffect(() => {
    // Handle image loading animation
    if (image && imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('image-loaded');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(imageRef.current);
      
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }

    // Handle card visibility for animations
    if (cardRef.current) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      cardObserver.observe(cardRef.current);
      
      return () => {
        if (cardRef.current) {
          cardObserver.unobserve(cardRef.current);
        }
      };
    }
  }, [image]);

  return (
    <motion.div 
      ref={cardRef}
      className="service-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: 30, opacity: 0 }}
      animate={isVisible ? 
        { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } : 
        { y: 30, opacity: 0 }
      }
      whileHover={{ 
        y: -5, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div 
        className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-6", gradientClass)}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isVisible ? 
          { scale: 1, opacity: 1, transition: { delay: 0.1, duration: 0.4 } } : 
          { scale: 0.8, opacity: 0 }
        }
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        <i className={cn('bx', icon, 'text-3xl text-white')}></i>
      </motion.div>
      
      <motion.h3 
        className="font-poppins font-bold text-xl mb-3"
        initial={{ y: 10, opacity: 0 }}
        animate={isVisible ? 
          { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } } : 
          { y: 10, opacity: 0 }
        }
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-6"
        initial={{ y: 10, opacity: 0 }}
        animate={isVisible ? 
          { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.4 } } : 
          { y: 10, opacity: 0 }
        }
      >
        {description}
      </motion.p>
      
      {image && (
        <div 
          ref={imageRef}
          className="relative w-full h-48 mb-6 overflow-hidden rounded-lg service-image-container"
        >
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out opacity-100 visible image-loaded",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}></div>
          
          {/* Overlay text on hover */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-white font-poppins font-semibold text-lg px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
              {title}
            </span>
          </div>
        </div>
      )}
      
      <motion.ul 
        className="space-y-2 flex-grow"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            variants={itemVariants}
            transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
          >
            <motion.i 
              className="bx bx-check text-green-500 text-xl mr-2"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
            ></motion.i>
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
