import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimateSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateSection({ children, className, delay = 0 }: AnimateSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
