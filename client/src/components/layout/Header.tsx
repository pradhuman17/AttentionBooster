import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 header-blur border-b transition-all duration-300",
        isScrolled 
        ? "bg-white/80 dark:bg-black/80 border-gray-100 dark:border-gray-800" 
        : "bg-white/60 dark:bg-black/60 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/final_logo-removebg.png" alt="Invincible Growth Logo" className="h-10 w-auto" />
            <span className="font-poppins font-bold text-2xl">
              <span className="text-[hsl(var(--royal-blue))]">Invincible</span>
              <span className="text-[hsl(var(--electric-purple))]">Growth</span>
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <nav className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-medium hover:text-[hsl(var(--royal-blue))] transition-colors hover-underline"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <ModeToggle />
              <a href="https://calendly.com/pradhumanyadav017/30min?month=2025-05" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 bg-[hsl(var(--royal-blue))] text-white font-medium text-sm rounded-full hover:bg-[hsl(var(--royal-blue-light))] transition-colors shadow-md hover:shadow-lg">
                Book Appointment
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="bx bx-menu text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-black absolute w-full border-b border-gray-100 dark:border-gray-800"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-5 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  className="block text-sm font-medium hover:text-[hsl(var(--royal-blue))] hover-underline"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a 
                href="https://calendly.com/pradhumanyadav017/30min?month=2025-05" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-[hsl(var(--royal-blue))] text-white font-medium text-sm rounded-full hover:bg-[hsl(var(--royal-blue-light))] transition-colors"
                onClick={closeMenu}
              >
                Book Appointment
              </a>
              <div className="flex justify-center pt-2">
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
