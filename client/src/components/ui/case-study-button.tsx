import { useCallback, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CaseStudyButtonProps {
  className?: string;
}

export function CaseStudyButton({ className }: CaseStudyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback((pdfName: string) => {
    // Create link to download the PDF
    const link = document.createElement("a");
    link.href = `/attached_assets/${pdfName}`;
    link.setAttribute("download", pdfName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  }, []);

  const toggleDownloadOptions = () => {
    setIsOpen(prevState => !prevState);
  };
  
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`} ref={buttonRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDownloadOptions}
        className="bg-[hsl(var(--royal-blue))] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[hsl(var(--royal-blue-light))] transition-colors"
      >
        <i className="bx bx-download text-2xl"></i>
      </motion.button>
      
      {/* Download options dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="font-poppins font-semibold text-lg mb-3">Download Case Studies</h3>
          <ul className="space-y-3">
            <li>
              <motion.button 
                whileHover={{ x: 3 }}
                onClick={() => handleDownload("CASE STUDY 🪴.pdf")}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center text-sm transition-colors"
              >
                <i className="bx bxs-file-pdf text-red-500 mr-2 text-lg"></i>
                <span>Coaching Business 5X Revenue</span>
              </motion.button>
            </li>
            <li>
              <motion.button 
                whileHover={{ x: 3 }}
                onClick={() => handleDownload("_CASE STUDY🔥.pdf")}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center text-sm transition-colors"
              >
                <i className="bx bxs-file-pdf text-red-500 mr-2 text-lg"></i>
                <span>CCO Menswear Results</span>
              </motion.button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}