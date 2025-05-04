import { AnimateSection } from "@/components/ui/motion";

export function CaseStudies() {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tag: "E-commerce",
      title: "412% ROAS for Fashion Brand",
      metric: "+412%",
      metricLabel: "Return on Ad Spend",
      metricValue: "4.12x initial investment",
      description: "We developed a multi-platform advertising strategy focusing on high-intent audiences, resulting in a significant boost in conversion rates and ROAS."
    },
    {
      image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      tag: "SaaS",
      title: "67% Increase in Demo Bookings",
      metric: "+67%",
      metricLabel: "Conversion Rate",
      metricValue: "From website visitors to demos",
      description: "Our AI chatbot and CRM automation solutions helped this SaaS company streamline their lead qualification and nurturing process."
    }
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateSection className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400">See how we've helped businesses like yours achieve extraordinary growth.</p>
        </AnimateSection>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((caseStudy, index) => (
            <AnimateSection key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg reveal" delay={index * 0.1}>
              <div className="relative h-64">
                <img 
                  src={caseStudy.image}
                  alt={`${caseStudy.title} case study`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="px-3 py-1 bg-white text-[hsl(var(--royal-blue))] text-xs font-semibold rounded-full">
                      {caseStudy.tag}
                    </span>
                    <h3 className="font-poppins font-bold text-xl text-white mt-2">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full">
                    <span className="text-green-600 dark:text-green-400 font-bold">{caseStudy.metric}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{caseStudy.metricLabel}</p>
                    <p className="font-semibold">{caseStudy.metricValue}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{caseStudy.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-2.5 border border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] dark:text-white dark:border-white font-medium rounded-lg hover:bg-[hsl(var(--royal-blue))]/5 transition-colors"
                >
                  View Full Case Study
                </a>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}
