"use client";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import AnimatedSVG from "@/components/AnimatedGradient";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
  
      <Hero />
  
      <div className="w-3/4  justify-center items-center">
    

        <FeatureSection />

      </div>
  
    </main>
  );
}
