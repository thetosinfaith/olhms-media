
import Hero from "@/components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { Booking } from "../components/Booking";
import { SocialProof } from "../components/SocialProof";
import Navbar from "@/components/Navbar";
import { Footer } from "../components/Footer";
import VideoThatSells from "@/components/VideoThatSells";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <VideoThatSells/>
      <About />
      <Portfolio />
      <Testimonials />
      <Booking />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
