import { GradientText } from "@/components/ui/gradient-text";
import { AnimateSection } from "@/components/ui/motion";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--royal-blue))] to-[hsl(var(--electric-purple))] opacity-30"></div>
        <div className="absolute w-96 h-96 bg-[hsl(var(--royal-blue))] rounded-full blur-[100px] -top-10 -left-10 opacity-20"></div>
        <div className="absolute w-96 h-96 bg-[hsl(var(--electric-purple))] rounded-full blur-[100px] bottom-10 right-10 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateSection className="reveal">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              We Build Systems That Make You <GradientText>Unstoppable</GradientText>
            </h1>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-lg">
              Elevate your brand with data-driven strategies that deliver measurable results through paid ads, AI automation, and stunning website design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center px-8 py-3.5 bg-[hsl(var(--royal-blue))] text-white font-medium rounded-full hover:bg-[hsl(var(--royal-blue-light))] transition-colors shadow-lg hover:shadow-xl">
                Book Appointment
                <i className="bx bx-right-arrow-alt ml-1 text-xl"></i>
              </a>
              <a href="#case-studies" className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[hsl(var(--royal-blue))] text-[hsl(var(--royal-blue))] dark:text-white dark:border-white font-medium rounded-full hover:bg-[hsl(var(--royal-blue))]/5 transition-colors">
                See Case Studies
              </a>
            </div>
          </AnimateSection>
          
          <AnimateSection className="relative reveal">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden p-6 z-10 animate-float">
              <div className="absolute top-0 left-0 w-full h-2 blue-gradient"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Marketing dashboard showing growth metrics" 
                className="w-full rounded-lg"
              />
              <div className="flex items-center mt-4 gap-4">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400">+124% Growth</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Conversion</p>
                  <p className="font-bold text-lg">8.4%</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Leads</p>
                  <p className="font-bold text-lg">1,428</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400">ROI</p>
                  <p className="font-bold text-lg">321%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 -left-4 purple-gradient w-20 h-20 rounded-full z-0 blur-lg opacity-80"></div>
            <div className="absolute top-8 -right-8 blue-gradient w-24 h-24 rounded-full z-0 blur-lg opacity-80"></div>
          </AnimateSection>
        </div>
      </div>
    </section>
  );
}
