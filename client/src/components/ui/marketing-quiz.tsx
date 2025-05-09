import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { LightbulbIcon, BrainIcon, SparklesIcon } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface MarketingQuizProps {
  onComplete?: () => void;
  className?: string;
}

export function MarketingQuiz({ onComplete, className }: MarketingQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [insightLevel, setInsightLevel] = useState("Beginner");
  
  // Quiz questions
  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the most effective way to measure ROI for digital marketing campaigns?",
      options: [
        "Social media followers growth",
        "Website traffic increase",
        "Conversion tracking and attribution",
        "Number of likes and shares"
      ],
      correctAnswer: 2,
      explanation: "Conversion tracking and attribution directly tie marketing efforts to business results, making it the most effective ROI measurement method."
    },
    {
      id: 2,
      question: "Which of these is most crucial for effective AI automation in marketing?",
      options: [
        "Using the latest trending AI tools",
        "Quality data inputs and clear objectives",
        "Fully replacing human marketers",
        "Implementing as many AI tools as possible"
      ],
      correctAnswer: 1,
      explanation: "AI systems depend on quality data and clear objectives to deliver valuable results. Without these foundations, even advanced AI will produce poor outcomes."
    },
    {
      id: 3,
      question: "What typically provides the highest ROI in paid advertising?",
      options: [
        "Casting a wide net to reach as many people as possible",
        "Targeting competitors' audiences exclusively",
        "Retargeting campaigns to previous website visitors",
        "Running ads on all available platforms simultaneously"
      ],
      correctAnswer: 2,
      explanation: "Retargeting campaigns typically provide higher ROI because they target users who have already shown interest in your products or services."
    },
  ];
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setFeedback("Correct! " + currentQuestion.explanation);
    } else {
      setFeedback("Not quite. " + currentQuestion.explanation);
    }
    
    setHasAnswered(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setFeedback("");
    } else {
      // Determine insight level based on score
      const finalScore = score + (selectedOption === questions[currentQuestionIndex].correctAnswer ? 1 : 0);
      
      if (finalScore === questions.length) {
        setInsightLevel("Marketing Genius");
      } else if (finalScore >= questions.length / 2) {
        setInsightLevel("Marketing Pro");
      } else {
        setInsightLevel("Marketing Apprentice");
      }
      
      setShowResults(true);
      if (onComplete) onComplete();
    }
  };
  
  const progress = ((currentQuestionIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 ${className}`}
    >
      {!showResults ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-poppins font-semibold text-xl">Marketing IQ Quiz</h3>
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2 mb-1" />
            <div className="flex justify-end">
              <span className="text-xs text-gray-500">{Math.round(progress)}% complete</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-4">{questions[currentQuestionIndex].question}</h4>
            
            <RadioGroup 
              value={selectedOption?.toString()} 
              onValueChange={(value) => handleOptionSelect(parseInt(value))}
              className="space-y-3"
              disabled={hasAnswered}
            >
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={index.toString()} 
                    id={`option-${index}`} 
                    className={hasAnswered ? 
                      index === questions[currentQuestionIndex].correctAnswer ? 
                        "border-green-500 text-green-500" : 
                        selectedOption === index ? "border-red-500 text-red-500" : ""
                      : ""
                    }
                  />
                  <Label 
                    htmlFor={`option-${index}`}
                    className={hasAnswered ? 
                      index === questions[currentQuestionIndex].correctAnswer ? 
                        "text-green-700 dark:text-green-400 font-medium" : 
                        selectedOption === index ? "text-red-700 dark:text-red-400" : ""
                      : ""
                    }
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <AnimatePresence>
            {hasAnswered && feedback && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`mb-6 p-4 rounded-lg ${
                  selectedOption === questions[currentQuestionIndex].correctAnswer 
                    ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200" 
                    : "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200"
                }`}
              >
                <div className="flex gap-2">
                  <LightbulbIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{feedback}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex justify-end">
            {!hasAnswered ? (
              <Button 
                onClick={handleSubmitAnswer} 
                disabled={selectedOption === null}
                className="bg-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue-light))]"
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="bg-[hsl(var(--electric-purple))] hover:bg-[hsl(var(--electric-purple))/90]"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            )}
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="w-16 h-16 bg-[hsl(var(--royal-blue))]/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              {score === questions.length ? (
                <SparklesIcon className="h-8 w-8 text-[hsl(var(--royal-blue))]" />
              ) : score >= questions.length / 2 ? (
                <BrainIcon className="h-8 w-8 text-[hsl(var(--royal-blue))]" />
              ) : (
                <LightbulbIcon className="h-8 w-8 text-[hsl(var(--royal-blue))]" />
              )}
            </motion.div>
            
            <h3 className="font-poppins font-bold text-2xl mb-2">
              <GradientText>Quiz Completed!</GradientText>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You scored {score} out of {questions.length}
            </p>
            
            <div className="w-full max-w-xs mx-auto mb-4">
              <Progress value={(score / questions.length) * 100} className="h-3" />
            </div>
            
            <div className="p-4 bg-[hsl(var(--royal-blue))]/5 dark:bg-[hsl(var(--royal-blue))]/10 rounded-lg border border-[hsl(var(--royal-blue))]/10 mb-6">
              <p className="font-medium text-lg mb-1">Your Marketing Insight Level:</p>
              <p className="text-2xl font-bold text-[hsl(var(--royal-blue))]">{insightLevel}</p>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {score === questions.length 
                ? "Impressive! You've demonstrated expert knowledge in modern marketing strategies. Our team would love to hear your thoughts." 
                : score >= questions.length / 2 
                ? "Great job! You have a solid understanding of effective marketing principles. We can help you take your marketing to the next level."
                : "Thanks for taking the quiz! There's always more to learn about effective marketing. Our team can help fill in the knowledge gaps."}
            </p>
            
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] text-white hover:brightness-110"
            >
              Discuss Your Results With Us
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}