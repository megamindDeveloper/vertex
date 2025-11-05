// app/page.tsx
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PrivateOfficeFeatures from "@/components/sections/PrivateOfficeFeatures";
import WhyChooseVertex from "@/components/sections/WhyChooseVertex";
import TestimonialSection from "@/components/sections/TestimonialSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* ✅ Navigation Bar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <HeroSection />

      <PrivateOfficeFeatures/>

      <WhyChooseVertex/>
      <TestimonialSection/>

    </main>
  );
}
