// app/page.tsx
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* ✅ Navigation Bar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <HeroSection />

    </main>
  );
}
