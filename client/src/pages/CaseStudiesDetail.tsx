import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimateSection } from "@/components/ui/motion";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@shared/schema";
import { motion } from "framer-motion";

export default function CaseStudiesDetail() {
  const [, setLocation] = useLocation();
  
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([
    {
      id: 1,
      title: "412% ROAS for Fashion Brand",
      tag: "E-commerce",
      image: "/images/ads.jpg",
      metric: "+412%",
      metricLabel: "Return on Ad Spend",
      metricValue: "4.12x initial investment",
      description: "We developed a multi-platform advertising strategy focusing on high-intent audiences, resulting in a significant boost in conversion rates and ROAS.",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "67% Increase in Demo Bookings",
      tag: "SaaS",
      image: "/images/Hero_AI_Workflow_Automation.jpg",
      metric: "+67%",
      metricLabel: "Conversion Rate",
      metricValue: "From website visitors to demos",
      description: "Our AI chatbot and CRM automation solutions helped this SaaS company streamline their lead qualification and nurturing process.",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "5X Revenue Growth for Coaching Business",
      tag: "Coaching",
      image: "/images/code.jpg",
      metric: "5X",
      metricLabel: "Revenue Growth",
      metricValue: "In just 90 days",
      description: "Our integrated approach combining Facebook Ads, AI automation and website redesign helped a coaching business achieve remarkable growth.",
      createdAt: new Date(),
    },
  ]);

  const handleDownloadPDF = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/attached_assets/${fileName}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <GradientText>Our Success Stories</GradientText>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover how we've helped businesses like yours achieve exceptional growth with our data-driven marketing strategies.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button 
                  variant="outline"
                  className="rounded-full border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))]/10"
                  onClick={() => scrollToSection('ecommerce')}
                >
                  E-commerce
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))]/10"
                  onClick={() => scrollToSection('saas')}
                >
                  SaaS
                </Button>
                <Button 
                  variant="outline"
                  className="rounded-full border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))]/10"
                  onClick={() => scrollToSection('coaching')}
                >
                  Coaching
                </Button>
              </motion.div>

              <motion.div 
                className="flex justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  className="bg-[hsl(var(--royal-blue))] text-white hover:bg-[hsl(var(--royal-blue-light))] rounded-full"
                  onClick={() => handleDownloadPDF("CASE STUDY 🪴.pdf")}
                >
                  <i className="bx bxs-download mr-2"></i>
                  Download Coaching Case Study
                </Button>
                <Button 
                  className="bg-[hsl(var(--royal-blue))] text-white hover:bg-[hsl(var(--royal-blue-light))] rounded-full"
                  onClick={() => handleDownloadPDF("_CASE STUDY🔥.pdf")}
                >
                  <i className="bx bxs-download mr-2"></i>
                  Download E-commerce Case Study
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="space-y-24"
            >
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={study.id} 
                  id={index === 0 ? 'ecommerce' : index === 1 ? 'saas' : 'coaching'}
                  variants={itemAnimation}
                  className="scroll-mt-24"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-auto">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center">
                          <div className="text-white p-8">
                            <span className="bg-[hsl(var(--royal-blue))]/80 text-white text-xs uppercase font-medium px-3 py-1 rounded-full">{study.tag}</span>
                            <h2 className="text-3xl font-bold mt-4">{study.title}</h2>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <div className="mb-8">
                          <p className="text-4xl font-bold text-[hsl(var(--royal-blue))]">{study.metric}</p>
                          <p className="text-xl font-medium text-gray-900 dark:text-white">{study.metricLabel}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{study.metricValue}</p>
                        </div>
                        
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Challenge</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {index === 0 ? 
                              "A fast-growing fashion brand was struggling with low ROAS from their Facebook and Google ad campaigns. Their previous marketing efforts weren't effectively targeting their ideal customers, resulting in high ad spend but minimal conversions." : 
                              index === 1 ?
                              "A leading SaaS company was experiencing a high drop-off rate in their sales funnel. Despite generating significant website traffic, they were converting less than 10% of visitors into demo bookings." :
                              "A coaching business was heavily reliant on referrals and organic leads but had reached a plateau in growth. They needed a systematic approach to attract and convert more clients while automating their lead handling process."}
                          </p>
                        </div>
                        
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-4">Solution</h3>
                          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {index === 0 ? 
                              "We developed a comprehensive multi-platform advertising strategy that included:\n\n1. In-depth audience research and segmentation based on buying behaviors and preferences.\n2. Creation of highly targeted ad creatives for each segment.\n3. Implementation of advanced retargeting sequences to capture abandoned carts.\n4. Continuous A/B testing to optimize ad performance." : 
                              index === 1 ?
                              "We implemented a comprehensive solution that included:\n\n1. Installing an AI-powered chatbot to qualify leads in real-time.\n2. Developing an automated CRM workflow that nurtures leads based on behavior.\n3. Creating personalized landing pages for different traffic sources.\n4. Implementing a streamlined demo booking process with fewer steps." :
                              "We implemented a 3-phase growth system focused on:\n\n1. Scaling visibility through Facebook Ads with detailed buyer personas targeting professionals aged 30–55.\n2. Maximizing conversions through AI-enhanced follow-ups with automated CRM integration.\n3. Redesigning their website with embedded booking calendars and dynamic testimonials."}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold mb-4">Results</h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                            {index === 0 ? (
                              <>
                                <li>Achieved a 412% Return on Ad Spend (4.12x investment)</li>
                                <li>Reduced cost per acquisition by 37%</li>
                                <li>Increased average order value by 24%</li>
                                <li>Expanded customer base in 3 new geographical regions</li>
                              </>
                            ) : index === 1 ? (
                              <>
                                <li>Increased demo booking conversion rate by 67%</li>
                                <li>Reduced sales cycle length by 12 days on average</li>
                                <li>Improved sales team efficiency by 43%</li>
                                <li>Achieved 28% higher close rate from qualified leads</li>
                              </>
                            ) : (
                              <>
                                <li>Revenue increased 5X in just 90 days</li>
                                <li>1,205 qualified leads generated from $4,500 ad spend</li>
                                <li>Manual follow-up time reduced by 65%</li>
                                <li>Website conversion rate increased from 1.6% to 4.7%</li>
                              </>
                            )}
                          </ul>
                        </div>
                        
                        <div className="mt-8 flex gap-4">
                          <Button 
                            className="bg-[hsl(var(--electric-purple))] text-white hover:bg-[hsl(var(--electric-purple))/90] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            onClick={() => {
                              localStorage.setItem('referredFromCaseStudy', study.title);
                              setLocation("/#book");
                            }}
                          >
                            Get Similar Results
                          </Button>
                          <Button 
                            variant="outline"
                            className="border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))]"
                            onClick={() => handleDownloadPDF(index === 0 ? "_CASE STUDY🔥.pdf" : "CASE STUDY 🪴.pdf")}
                          >
                            <i className="bx bx-download mr-2"></i>
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-16">
              <Button 
                className="bg-[hsl(var(--royal-blue))] text-white hover:bg-[hsl(var(--royal-blue-light))]"
                onClick={() => setLocation("/")}
              >
                <i className="bx bx-arrow-back mr-2"></i>
                Back to Home
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}