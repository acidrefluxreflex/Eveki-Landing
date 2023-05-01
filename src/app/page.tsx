"use client";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Navbar from "../components/NavVar";
import TopicSection from "@/components/TopicSection";


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
