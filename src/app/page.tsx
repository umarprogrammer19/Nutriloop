import FAQ from "@/components/faqs";
import Hero from "@/components/hero";
import ImpactAndTestimonials from "@/components/impact-and-testimonials";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import WhyNutriLoop from "@/components/why-nutriloop";
import HowItWorks from "@/components/work";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyNutriLoop />
      <ImpactAndTestimonials />
      <FAQ />
      <Footer />
      <Chatbot />
    </>
  );
}