import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [image]);

  return (
    <div 
      className="service-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("w-16 h-16 rounded-lg flex items-center justify-center mb-6", gradientClass)}>
        <i className={cn('bx', icon, 'text-3xl text-white')}></i>
      </div>
      <h3 className="font-poppins font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      {image && (
        <div 
          ref={imageRef}
          className="relative w-full h-48 mb-6 overflow-hidden rounded-lg service-image-container"
        >
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}></div>
        </div>
      )}
      
      <ul className="space-y-2 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className="bx bx-check text-green-500 text-xl mr-2"></i>
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
