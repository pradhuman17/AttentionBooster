import { client, caseStudies, testimonials } from "./index.js";

async function seed() {
  try {
    await client.connect();
    console.log("Seeding database...");

    // Case Studies
    const existingCaseStudies = await caseStudies.countDocuments();
    if (existingCaseStudies === 0) {
      console.log("Seeding case studies...");
      const caseStudiesData = [
        {
          title: "412% ROAS for Fashion Brand",
          tag: "E-commerce",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          metric: "+412%",
          metricLabel: "Return on Ad Spend",
          metricValue: "4.12x initial investment",
          description: "We developed a multi-platform advertising strategy focusing on high-intent audiences, resulting in a significant boost in conversion rates and ROAS."
        },
        {
          title: "67% Increase in Demo Bookings",
          tag: "SaaS",
          image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          metric: "+67%",
          metricLabel: "Conversion Rate",
          metricValue: "From website visitors to demos",
          description: "Our AI chatbot and CRM automation solutions helped this SaaS company streamline their lead qualification and nurturing process."
        }
      ];
      await caseStudies.insertMany(caseStudiesData);
      console.log(`Added ${caseStudiesData.length} case studies`);
    } else {
      console.log(`${existingCaseStudies} case studies already exist, skipping...`);
    }

    // Testimonials
    const existingTestimonials = await testimonials.countDocuments();
    if (existingTestimonials === 0) {
      console.log("Seeding testimonials...");
      const testimonialsData = [
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
      await testimonials.insertMany(testimonialsData);
      console.log(`Added ${testimonialsData.length} testimonials`);
    } else {
      console.log(`${existingTestimonials} testimonials already exist, skipping...`);
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.close();
  }
}

seed();
