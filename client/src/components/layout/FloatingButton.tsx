import { motion } from "framer-motion";

export function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
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
        <i className="bx bx-trending-up text-lg mr-2 group-hover:animate-pulse"></i>
        <span className="font-medium">Case Studies</span>
      </motion.a>
    </div>
  );
}
