import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimateSection } from "@/components/ui/motion";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@shared/schema";
import { db } from "@db";

export default function CaseStudiesDetail() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([
    {
      id: 1,
      title: "412% ROAS for Fashion Brand",
      tag: "E-commerce",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
      image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      metric: "+67%",
      metricLabel: "Conversion Rate",
      metricValue: "From website visitors to demos",
      description: "Our AI chatbot and CRM automation solutions helped this SaaS company streamline their lead qualification and nurturing process.",
      createdAt: new Date(),
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                <GradientText>Our Case Studies</GradientText>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Dive deep into our successful campaigns and discover how we've helped businesses like yours achieve outstanding growth.
              </p>
            </div>

            {caseStudies.map((study, index) => (
              <AnimateSection key={study.id} className="mb-20 reveal">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-72 md:h-full">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-center">
                        <div className="text-white p-6">
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
                            "A leading SaaS company was experiencing a high drop-off rate in their sales funnel. Despite generating significant website traffic, they were converting less than 10% of visitors into demo bookings."}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Solution</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {index === 0 ? 
                            "We developed a comprehensive multi-platform advertising strategy that included:\n\n1. In-depth audience research and segmentation based on buying behaviors and preferences.\n2. Creation of highly targeted ad creatives for each segment.\n3. Implementation of advanced retargeting sequences to capture abandoned carts.\n4. Continuous A/B testing to optimize ad performance." : 
                            "We implemented a comprehensive solution that included:\n\n1. Installing an AI-powered chatbot to qualify leads in real-time.\n2. Developing an automated CRM workflow that nurtures leads based on behavior.\n3. Creating personalized landing pages for different traffic sources.\n4. Implementing a streamlined demo booking process with fewer steps."}
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
                          ) : (
                            <>
                              <li>Increased demo booking conversion rate by 67%</li>
                              <li>Reduced sales cycle length by 12 days on average</li>
                              <li>Improved sales team efficiency by 43%</li>
                              <li>Achieved 28% higher close rate from qualified leads</li>
                            </>
                          )}
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <Button 
                          className="bg-[hsl(var(--royal-blue))] text-white hover:bg-[hsl(var(--royal-blue-light))]"
                          onClick={() => window.location.href = '#contact'}
                        >
                          Get Similar Results
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}