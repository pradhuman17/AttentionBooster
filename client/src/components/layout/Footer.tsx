import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center gap-3">
            <img src="/images/final_logo-removebg.png" alt="Invincible Growth Logo" className="h-10 w-auto" />
            <Link href="/" className="inline-block">
              <span className="font-poppins font-bold text-2xl">
                <span className="text-[hsl(var(--royal-blue-light))]">Invincible</span>
                <span className="text-[hsl(var(--electric-purple))]">Growth</span>
              </span>
            </Link>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--royal-blue))] hover:border-[hsl(var(--royal-blue))] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--royal-blue))] hover:border-[hsl(var(--royal-blue))] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--royal-blue))] hover:border-[hsl(var(--royal-blue))] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[hsl(var(--royal-blue))] hover:border-[hsl(var(--royal-blue))] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
          </div>
          
          <hr className="w-full border-gray-800 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-poppins">
              © {new Date().getFullYear()} Invincible Growth. All rights reserved.
            </p>
            <div className="flex space-x-6 font-poppins">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
