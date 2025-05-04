import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-poppins font-bold text-2xl">
                <span className="text-[hsl(var(--royal-blue-light))]">Invincible</span>
                <span className="text-[hsl(var(--electric-purple))]">Growth</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              We build systems that drive unstoppable growth for ambitious brands.
            </p>
            <div className="flex space-x-4">
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
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Paid Advertising</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Growth Strategy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="bx bx-envelope text-gray-400 mr-2 mt-1"></i>
                <a href="mailto:hello@invinciblegrowth.com" className="text-gray-400 hover:text-white transition-colors">hello@invinciblegrowth.com</a>
              </li>
              <li className="flex items-start">
                <i className="bx bx-phone text-gray-400 mr-2 mt-1"></i>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start">
                <i className="bx bx-map text-gray-400 mr-2 mt-1"></i>
                <span className="text-gray-400">123 Growth Avenue,<br/>San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Invincible Growth. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
