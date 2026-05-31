import Hero from "@/components/hero";
import Navbar from "@/components/layout/navbar";
import WhyNutriLoop from "@/components/why-nutriloop";
import HowItWorks from "@/components/work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyNutriLoop />
    </>
  );
}