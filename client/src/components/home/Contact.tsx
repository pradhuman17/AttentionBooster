import { AnimateSection } from "@/components/ui/motion";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <AnimateSection className="reveal">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">Start Your Growth Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help your business achieve unstoppable growth. Schedule a consultation or reach out directly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4 mt-1">
                  <i className="bx bx-envelope text-[hsl(var(--royal-blue))]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email Us</h4>
                  <a href="mailto:hello@invinciblegrowth.com" className="text-[hsl(var(--royal-blue))] dark:text-blue-300 hover:underline">hello@invinciblegrowth.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4 mt-1">
                  <i className="bx bx-phone text-[hsl(var(--royal-blue))]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Call Us</h4>
                  <a href="tel:+15551234567" className="text-[hsl(var(--royal-blue))] dark:text-blue-300 hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4 mt-1">
                  <i className="bx bx-map text-[hsl(var(--royal-blue))]"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">123 Growth Avenue, Suite 200<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[hsl(var(--royal-blue))]/10 flex items-center justify-center text-[hsl(var(--royal-blue))] hover:bg-[hsl(var(--royal-blue))] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
          </AnimateSection>
          
          <div id="book">
            <AnimateSection className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg reveal">
            <h3 className="font-poppins font-bold text-2xl mb-6">Book a Free Consultation</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[hsl(var(--royal-blue))] focus:border-[hsl(var(--royal-blue))] transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[hsl(var(--royal-blue))] focus:border-[hsl(var(--royal-blue))] transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 (555) 123-4567" 
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[hsl(var(--royal-blue))] focus:border-[hsl(var(--royal-blue))] transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Service You're Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[hsl(var(--royal-blue))] focus:border-[hsl(var(--royal-blue))] transition-colors">
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="paid-ads">Paid Advertising</SelectItem>
                          <SelectItem value="ai-automation">AI Automation</SelectItem>
                          <SelectItem value="website-design">Website Design</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Tell Us About Your Project</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your goals and challenges..." 
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[hsl(var(--royal-blue))] focus:border-[hsl(var(--royal-blue))] transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[hsl(var(--royal-blue))] text-white font-medium rounded-lg hover:bg-[hsl(var(--royal-blue-light))] transition-colors shadow-md hover:shadow-xl"
                >
                  {isSubmitting ? "Sending..." : "Schedule Consultation"}
                  <i className="bx bx-calendar-check ml-2"></i>
                </Button>
              </form>
            </Form>
            
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
              Or schedule directly via 
              <a href="https://calendly.com/pradhumanyadav017/30min?month=2025-05" target="_blank" rel="noreferrer" className="text-[hsl(var(--royal-blue))] dark:text-blue-300 hover:underline ml-1">
                Calendly
              </a>
            </p>
            </AnimateSection>
          </div>
        </div>
      </div>
    </section>
  );
}
