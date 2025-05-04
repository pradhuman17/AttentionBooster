import { AnimateSection } from "@/components/ui/motion";

export function About() {
  const stats = [
    { value: "500+", label: "Leads Generated Monthly" },
    { value: "25+", label: "Websites Designed" },
    { value: "300%", label: "Average ROAS" },
    { value: "15+", label: "Industries Served" }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
      </div>
    </section>
  );
}
