import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RocketIcon, CheckIcon, LightbulbIcon, TrophyIcon } from "lucide-react";

interface MilestoneProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface ProgressTrackerProps {
  className?: string;
}

export function ProgressTracker({ className }: ProgressTrackerProps) {
  // State to track completion of milestones
  const [milestones, setMilestones] = useState<MilestoneProps[]>([
    { id: "services", label: "Explore Services", icon: <LightbulbIcon className="h-5 w-5" />, completed: false },
    { id: "case-studies", label: "View Case Studies", icon: <RocketIcon className="h-5 w-5" />, completed: false },
    { id: "testimonials", label: "Read Testimonials", icon: <CheckIcon className="h-5 w-5" />, completed: false },
    { id: "contact", label: "Book Consultation", icon: <TrophyIcon className="h-5 w-5" />, completed: false },
  ]);
  
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasNewAchievement, setHasNewAchievement] = useState(false);
  
  // Calculate progress
  useEffect(() => {
    const completedCount = milestones.filter(milestone => milestone.completed).length;
    setProgress(Math.round((completedCount / milestones.length) * 100));
  }, [milestones]);
  
  // Listen for section visibility to update milestones
  useEffect(() => {
    const checkMilestones = () => {
      const updatedMilestones = [...milestones];
      let hasUpdated = false;
      
      // Check if user has viewed Services section
      const servicesSection = document.getElementById("services");
      if (servicesSection && isElementInViewport(servicesSection) && !updatedMilestones[0].completed) {
        updatedMilestones[0].completed = true;
        hasUpdated = true;
      }
      
      // Check if user has viewed Case Studies section
      const caseStudiesSection = document.getElementById("case-studies");
      if (caseStudiesSection && isElementInViewport(caseStudiesSection) && !updatedMilestones[1].completed) {
        updatedMilestones[1].completed = true;
        hasUpdated = true;
      }
      
      // Check if user has viewed Testimonials section
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection && isElementInViewport(testimonialsSection) && !updatedMilestones[2].completed) {
        updatedMilestones[2].completed = true;
        hasUpdated = true;
      }
      
      // Check if user has viewed Contact section
      const contactSection = document.getElementById("contact");
      if (contactSection && isElementInViewport(contactSection) && !updatedMilestones[3].completed) {
        updatedMilestones[3].completed = true;
        hasUpdated = true;
      }
      
      if (hasUpdated) {
        setMilestones(updatedMilestones);
        setHasNewAchievement(true);
        
        // Auto-open the tracker when a new achievement is unlocked
        if (!isOpen) {
          setIsOpen(true);
          setTimeout(() => {
            setHasNewAchievement(false);
          }, 5000);
        }
      }
    };
    
    // Check if element is in viewport
    function isElementInViewport(el: Element) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Check milestones on scroll
    window.addEventListener('scroll', checkMilestones);
    
    // Initial check
    checkMilestones();
    
    return () => {
      window.removeEventListener('scroll', checkMilestones);
    };
  }, [milestones, isOpen]);
  
  // Store progress in localStorage
  useEffect(() => {
    // Create a simplified version of milestones without React nodes
    const simplifiedMilestones = milestones.map(milestone => ({
      id: milestone.id,
      label: milestone.label,
      completed: milestone.completed
    }));
    
    // Save simplified milestones to localStorage
    localStorage.setItem('siteProgressMilestones', JSON.stringify(simplifiedMilestones));
  }, [milestones]);
  
  // Load progress from localStorage
  useEffect(() => {
    const savedMilestones = localStorage.getItem('siteProgressMilestones');
    if (savedMilestones) {
      try {
        const parsedMilestones = JSON.parse(savedMilestones);
        
        // Map saved data back to full milestone objects with icons
        const updatedMilestones = milestones.map(milestone => {
          const savedMilestone = parsedMilestones.find((m: any) => m.id === milestone.id);
          return savedMilestone ? { ...milestone, completed: savedMilestone.completed } : milestone;
        });
        
        setMilestones(updatedMilestones);
      } catch (e) {
        console.error('Error parsing saved milestones:', e);
      }
    }
  }, []);
  
  return (
    <div className={`fixed left-6 bottom-6 z-40 ${className}`}>
      <div className="relative">
        {/* Main button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative bg-[hsl(var(--royal-blue))] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[hsl(var(--royal-blue-light))] transition-colors`}
        >
          <TrophyIcon className="h-6 w-6" />
          
          {/* Progress indicator around button */}
          <svg 
            className="absolute inset-0 w-full h-full" 
            viewBox="0 0 56 56"
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle 
              cx="28" 
              cy="28" 
              r="26" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="4" 
            />
            <circle 
              cx="28" 
              cy="28" 
              r="26" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* Notification dot */}
          {hasNewAchievement && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-[hsl(var(--electric-purple))] rounded-full flex items-center justify-center"
            />
          )}
        </motion.button>
        
        {/* Progress panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-poppins font-semibold text-lg">Your Journey</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{progress}% Complete</span>
              </div>
              
              <Progress value={progress} className="mb-4 h-2" />
              
              <ul className="space-y-3">
                {milestones.map((milestone) => (
                  <li key={milestone.id} className="flex items-center gap-2">
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full ${
                      milestone.completed 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-gray-100 text-gray-400 dark:bg-gray-700'
                    }`}>
                      {milestone.icon}
                    </div>
                    <span className={`text-sm ${
                      milestone.completed 
                        ? 'text-gray-900 dark:text-gray-100 font-medium' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {milestone.label}
                    </span>
                    {milestone.completed && (
                      <CheckIcon className="h-4 w-4 text-green-500 ml-auto" />
                    )}
                  </li>
                ))}
              </ul>
              
              {progress === 100 ? (
                <div className="mt-4 text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      repeat: 3, 
                      repeatType: "reverse",
                      duration: 0.6 
                    }}
                    className="inline-block mb-2 text-[hsl(var(--electric-purple))]"
                  >
                    <TrophyIcon className="h-8 w-8" />
                  </motion.div>
                  <p className="text-sm font-medium text-[hsl(var(--royal-blue))]">
                    Congratulations! You've completed the journey!
                  </p>
                </div>
              ) : (
                <Button 
                  className="w-full mt-4 text-xs bg-[hsl(var(--royal-blue))] text-white"
                  onClick={() => {
                    const nextIncomplete = milestones.find(m => !m.completed);
                    if (nextIncomplete) {
                      document.getElementById(nextIncomplete.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Continue Your Journey
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}