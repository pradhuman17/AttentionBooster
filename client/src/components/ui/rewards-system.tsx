import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { GiftIcon, XIcon, CheckCircle2Icon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";

interface Reward {
  id: string;
  action: string;
  code: string;
  discount: string;
  description: string;
  claimed: boolean;
}

export function RewardsSystem() {
  const [rewards, setRewards] = useState<Reward[]>([
    { 
      id: 'quiz_completed', 
      action: 'Complete the Marketing Quiz', 
      code: 'QUIZ25OFF', 
      discount: '25% OFF', 
      description: 'Your first strategy call', 
      claimed: false 
    },
    { 
      id: 'all_milestones', 
      action: 'Complete all site milestones', 
      code: 'JOURNEY15OFF', 
      discount: '15% OFF', 
      description: 'Any service package', 
      claimed: false 
    },
    { 
      id: 'case_study', 
      action: 'Download a case study', 
      code: 'CASESTUDY10', 
      discount: '10% OFF', 
      description: 'First month of service', 
      claimed: false 
    }
  ]);
  
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<Reward | null>(null);
  
  // Check for rewards progress on page load and during key events
  useEffect(() => {
    // Load saved rewards state from localStorage
    const savedRewards = localStorage.getItem('siteRewards');
    if (savedRewards) {
      try {
        setRewards(JSON.parse(savedRewards));
      } catch (e) {
        console.error('Error parsing saved rewards:', e);
      }
    }
    
    // Add event listener for significant actions
    const checkForRewards = () => {
      const updatedRewards = [...rewards];
      let rewardToShow: Reward | null = null;
      
      // Check if quiz was completed
      const quizCompleted = localStorage.getItem('marketingQuizCompleted');
      if (quizCompleted === 'true') {
        const quizReward = updatedRewards.find(r => r.id === 'quiz_completed');
        if (quizReward && !quizReward.claimed) {
          quizReward.claimed = true;
          rewardToShow = quizReward;
        }
      }
      
      // Check if all site milestones are completed
      const siteProgressMilestones = localStorage.getItem('siteProgressMilestones');
      if (siteProgressMilestones) {
        try {
          const milestones = JSON.parse(siteProgressMilestones);
          const allCompleted = milestones.every((m: any) => m.completed);
          
          if (allCompleted) {
            const journeyReward = updatedRewards.find(r => r.id === 'all_milestones');
            if (journeyReward && !journeyReward.claimed && !rewardToShow) {
              journeyReward.claimed = true;
              rewardToShow = journeyReward;
            }
          }
        } catch (e) {
          console.error('Error parsing milestones:', e);
        }
      }
      
      // Check if case study was downloaded
      const caseStudyDownloaded = localStorage.getItem('caseStudyDownloaded');
      if (caseStudyDownloaded === 'true') {
        const caseStudyReward = updatedRewards.find(r => r.id === 'case_study');
        if (caseStudyReward && !caseStudyReward.claimed && !rewardToShow) {
          caseStudyReward.claimed = true;
          rewardToShow = caseStudyReward;
        }
      }
      
      // Save updated rewards to localStorage
      if (rewardToShow) {
        setRewards(updatedRewards);
        localStorage.setItem('siteRewards', JSON.stringify(updatedRewards));
        
        // Show the reward
        setCurrentReward(rewardToShow);
        setShowReward(true);
      }
    };
    
    // Run initial check
    checkForRewards();
    
    // Set interval to periodically check for rewards
    const interval = setInterval(checkForRewards, 30000);
    
    return () => {
      clearInterval(interval);
    };
  }, [rewards]);
  
  // Simulate a download event when a case study is downloaded
  useEffect(() => {
    // Add event listener for case study download in CaseStudyButton
    const simulateCaseStudyDownload = () => {
      // Set localStorage flag for case study download
      localStorage.setItem('caseStudyDownloaded', 'true');
    };
    
    // For demo purposes, we're listening to clicks on specific elements
    const downloadButtons = document.querySelectorAll('a[download], button[data-action="download-case-study"]');
    downloadButtons.forEach(button => {
      button.addEventListener('click', simulateCaseStudyDownload);
    });
    
    return () => {
      downloadButtons.forEach(button => {
        button.removeEventListener('click', simulateCaseStudyDownload);
      });
    };
  }, []);
  
  // Handle copy to clipboard
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Code copied!",
        description: "Discount code copied to clipboard",
      });
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };
  
  if (!showReward || !currentReward) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
      >
        <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 overflow-hidden">
          {/* Close button */}
          <button 
            onClick={() => setShowReward(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close"
          >
            <XIcon className="h-5 w-5" />
          </button>
          
          {/* Reward icon */}
          <div className="text-center mb-4">
            <motion.div 
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="inline-block"
            >
              <div className="w-16 h-16 bg-[hsl(var(--electric-purple))]/10 rounded-full flex items-center justify-center mx-auto">
                <GiftIcon className="h-8 w-8 text-[hsl(var(--electric-purple))]" />
              </div>
            </motion.div>
          </div>
          
          {/* Reward content */}
          <div className="text-center mb-6">
            <h3 className="font-poppins font-bold text-xl mb-2">
              <GradientText>Congratulations!</GradientText>
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                You've unlocked a special reward for:
              </p>
              <p className="font-medium mb-4">
                {currentReward.action}
              </p>
              
              <div className="relative p-3 bg-[hsl(var(--royal-blue))]/5 dark:bg-[hsl(var(--royal-blue))]/10 border border-dashed border-[hsl(var(--royal-blue))]/30 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">YOUR DISCOUNT CODE</p>
                    <p className="font-mono text-xl font-bold text-[hsl(var(--royal-blue))]">{currentReward.code}</p>
                  </div>
                  <Button
                    variant="outline" 
                    size="sm"
                    onClick={() => copyToClipboard(currentReward.code)}
                    className="h-8 border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))]"
                  >
                    <CopyIcon className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-3xl font-bold text-[hsl(var(--electric-purple))]">
                  {currentReward.discount}
                </div>
                <div className="text-left">
                  <p className="text-gray-700 dark:text-gray-300">{currentReward.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col gap-2">
            <Button 
              onClick={() => {
                setShowReward(false);
                // Scroll to contact section
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] text-white hover:brightness-110"
            >
              <CheckCircle2Icon className="h-4 w-4 mr-2" />
              Redeem Now
            </Button>
            <Button 
              variant="outline"
              onClick={() => setShowReward(false)}
              className="w-full"
            >
              Save for Later
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={() => setShowReward(false)}
      />
    </AnimatePresence>
  );
}