import { AnimateSection } from "@/components/ui/motion";

export function Testimonials() {
  const testimonials = [
    {
      content: "Invincible Growth transformed our marketing approach. Their paid ads strategy generated a 3x return in just 2 months, and the automation system they built has saved us countless hours.",
      author: "Sarah Johnson",
      position: "CEO, StyleFusion",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      content: "The website they designed for us not only looks amazing but converts like crazy. Our leads have increased by 85% and the AI chatbot has improved our customer service efficiency.",
      author: "Michael Roberts",
      position: "Marketing Director, TechSolutions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      content: "Working with Invincible Growth has been game-changing. Their strategic approach to our Facebook and Google campaigns has delivered consistent results month after month.",
      author: "Emily Chen",
      position: "Founder, Wellness Central",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const clientLogos = [
    "Acme Inc", "TechCorp", "Global Enterprises", "Digital Solutions", "Future Brands"
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateSection className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400">Hear directly from businesses that have experienced transformative results with our services.</p>
        </AnimateSection>
        
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {testimonials.map((testimonial, index) => (
            <AnimateSection key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md" delay={index * 0.1}>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star"></i>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
        
        <AnimateSection className="mt-16 text-center reveal">
          <div className="inline-flex items-center flex-wrap justify-center gap-6 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="h-8 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 text-gray-400"
              >
                {logo}
              </div>
            ))}
          </div>
        </AnimateSection>
      </div>
    </section>
  );
}
