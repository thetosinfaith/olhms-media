
import { Portfolio } from "../components/Portfolio";
import { About } from "@/components/About";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Booking } from "../components/Booking";
import { SocialProof } from "../components/SocialProof";
import Navbar from "@/components/Navbar";
import { Footer } from "../components/Footer";
import VideoThatSells from "@/components/VideoThatSells";
import { RecentWorkSection } from "@/components/RecentWorkSection";
import { InstagramSection } from "@/components/InstagramWork";
import { FaqSection } from "@/components/FaqSection";
import Hero from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero/>
      <VideoThatSells/>
      <InstagramSection/>
      <About/>
      <Portfolio />
      <ServicesSection/>
      <TestimonialsSection/>
      <Booking />
      <Footer />
    </div>
  );
};

export default Index;
