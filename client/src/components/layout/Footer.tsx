import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  const socialLinks = [
    { name: "Instagram", icon: "bxl-instagram", url: "#" },
    { name: "Facebook", icon: "bxl-facebook", url: "#" }
  ];

  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] blur-3xl opacity-20"
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: ["-10%", "10%"], 
            y: ["-10%", "10%"]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "mirror",
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-gradient-to-tl from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] blur-3xl opacity-10"
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: ["10%", "-10%"], 
            y: ["10%", "-10%"]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div 
            className="mb-8 flex items-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img 
              src="/images/final_logo-removebg.png" 
              alt="Invincible Growth Logo" 
              className="h-12 w-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <Link href="/" className="inline-block">
              <motion.span 
                className="font-poppins font-bold text-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[hsl(var(--royal-blue-light))]">Invincible</span>
                <span className="text-[hsl(var(--electric-purple))]">Growth</span>
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex space-x-5 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {socialLinks.map((social, index) => (
              <motion.div 
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
                className="relative"
              >
                <motion.a 
                  href={social.url} 
                  className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--royal-blue))] hover:border-[hsl(var(--royal-blue))] hover:text-white transition-colors relative"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <i className={`bx ${social.icon} text-xl`}></i>
                  
                  {/* Tooltip on hover */}
                  {hoveredIcon === social.name && (
                    <motion.div
                      className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {social.name}
                    </motion.div>
                  )}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.hr 
            className="w-full border-gray-800 mb-8"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <motion.p 
              className="text-gray-500 text-sm mb-4 md:mb-0 font-poppins"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              © {new Date().getFullYear()} Invincible Growth. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex space-x-6 font-poppins"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors hover-underline">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors hover-underline">Terms of Service</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
