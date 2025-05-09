import { AnimateSection } from "@/components/ui/motion";
import { useState } from "react";
import { MarketingQuiz } from "@/components/ui/marketing-quiz";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const stats = [
    { value: "500+", label: "Leads Generated Monthly" },
    { value: "25+", label: "Websites Designed" },
    { value: "300%", label: "Average ROAS" },
    { value: "15+", label: "Industries Served" }
  ];

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    // Store in localStorage so user doesn't see the quiz prompt again
    localStorage.setItem('marketingQuizCompleted', 'true');
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <AnimateSection className="reveal">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">About Invincible Growth</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're a team of digital marketing specialists, designers, and automation experts dedicated to creating sustainable growth systems for ambitious brands.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to empower businesses with the tools, strategies, and expertise they need to achieve unstoppable growth in today's competitive landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <AnimateSection 
                  key={index} 
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  delay={index * 0.1}
                >
                  <h4 className="font-poppins font-bold text-3xl text-[hsl(var(--royal-blue))] mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </AnimateSection>
              ))}
            </div>
          </AnimateSection>
          
          <AnimateSection className="relative reveal">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Invincible Growth team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 bottom-4 -right-4 purple-gradient w-20 h-20 rounded-full blur-lg opacity-80"></div>
            <div className="absolute -z-10 top-8 -left-8 blue-gradient w-24 h-24 rounded-full blur-lg opacity-80"></div>
          </AnimateSection>
        </div>
        
        {/* Marketing Quiz Section */}
        <div className="mt-16">
          {!showQuiz ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[hsl(var(--royal-blue))]/5 dark:bg-[hsl(var(--royal-blue))]/10 rounded-xl p-8 border border-[hsl(var(--royal-blue))]/10 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-[hsl(var(--royal-blue))]/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-[hsl(var(--royal-blue))]" />
              </div>
              
              <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-3">Test Your Marketing Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                Challenge yourself with our quick marketing quiz to discover your level of expertise and gain valuable insights for your business strategy.
              </p>
              
              <Button 
                onClick={() => setShowQuiz(true)}
                className="bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] text-white hover:brightness-110 px-8"
              >
                Take the Quiz
              </Button>
            </motion.div>
          ) : (
            <MarketingQuiz onComplete={handleQuizComplete} />
          )}
        </div>
      </div>
    </section>
  );
}
