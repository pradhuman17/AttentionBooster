import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phoneNumberString;
}

// Function to reveal elements on scroll
export function setupScrollReveal() {
  // Clean up any existing scroll event listeners
  window.removeEventListener('scroll', reveal);
  
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      // Reduced threshold - elements will start appearing sooner
      const elementVisible = 100;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  };
  
  // Add event listener for scroll
  window.addEventListener('scroll', reveal);
  
  // Force all sections above the fold to be visible
  function revealInitialSections() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // If element is in the initial viewport or close to it
      if (rect.top < window.innerHeight + 50) {
        element.classList.add('active');
      }
    });
  }
  
  // Initialize on page load - run multiple times to ensure all elements are checked
  setTimeout(reveal, 100);
  setTimeout(revealInitialSections, 300);
  setTimeout(reveal, 600); // Run again after any potential layout shifts
  
  // Force reveal service section specifically (since you mentioned it wasn't visible)
  setTimeout(() => {
    const serviceSection = document.getElementById('services');
    if (serviceSection) {
      const serviceReveals = serviceSection.querySelectorAll('.reveal');
      serviceReveals.forEach(el => el.classList.add('active'));
    }
  }, 800);
}
