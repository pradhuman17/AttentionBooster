import { useCallback } from "react";
import { motion } from "framer-motion";

interface CaseStudyButtonProps {
  className?: string;
}

export function CaseStudyButton({ className }: CaseStudyButtonProps) {
  const handleDownload = useCallback((pdfName: string) => {
    // Create link to download the PDF
    const link = document.createElement("a");
    link.href = `/case-studies/${pdfName}`;
    link.setAttribute("download", pdfName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const openDownloadOptions = () => {
    // Show the download options
    const downloadOptions = document.getElementById("download-options");
    if (downloadOptions) {
      downloadOptions.classList.toggle("hidden");
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openDownloadOptions}
        className="bg-[hsl(var(--royal-blue))] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[hsl(var(--royal-blue-light))] transition-colors"
      >
        <i className="bx bx-download text-2xl"></i>
      </motion.button>
      
      {/* Download options dropdown */}
      <div 
        id="download-options" 
        className="hidden absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="font-poppins font-semibold text-lg mb-3">Download Case Studies</h3>
        <ul className="space-y-3">
          <li>
            <button 
              onClick={() => handleDownload("CASE STUDY 🪴.pdf")}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center text-sm transition-colors"
            >
              <i className="bx bxs-file-pdf text-red-500 mr-2 text-lg"></i>
              <span>Coaching Business 5X Revenue</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleDownload("_CASE STUDY🔥.pdf")}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md flex items-center text-sm transition-colors"
            >
              <i className="bx bxs-file-pdf text-red-500 mr-2 text-lg"></i>
              <span>CCO Menswear Results</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}