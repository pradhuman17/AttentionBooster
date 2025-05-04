import { AnimateSection } from "@/components/ui/motion";
import { ServiceCard } from "@/components/ui/service-card";

export function Services() {
  const services = [
    {
      icon: "bx-trending-up",
      title: "Paid Advertising",
      description: "Data-driven campaigns across Meta, Google, and YouTube that maximize ROI and predictably scale your business.",
      features: [
        "Advanced audience targeting",
        "Cross-platform optimization",
        "A/B testing and iteration"
      ],
      gradientClass: "blue-gradient",
      image: "/images/ads.jpg"
    },
    {
      icon: "bx-bot",
      title: "AI Automation",
      description: "Intelligent automation systems that nurture leads, manage customer relationships, and handle repetitive tasks.",
      features: [
        "CRM intelligent workflows",
        "Automated lead nurturing",
        "AI-powered chatbots"
      ],
      gradientClass: "purple-gradient",
      image: "/images/Hero_AI_Workflow_Automation.jpg"
    },
    {
      icon: "bx-code-block",
      title: "Website Design",
      description: "High-converting, responsive websites that turn visitors into customers with strategic UX and beautiful UI design.",
      features: [
        "Conversion-focused layouts",
        "Responsive across all devices",
        "SEO-optimized structure"
      ],
      gradientClass: "bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))]",
      image: "/images/code.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateSection className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Our Growth-Focused Services</h2>
          <p className="text-gray-600 dark:text-gray-400">We combine cutting-edge technology with strategic expertise to drive measurable results for your business.</p>
        </AnimateSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateSection key={index} className="reveal" delay={index * 0.1}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                gradientClass={service.gradientClass}
                image={service.image}
              />
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  );
}
