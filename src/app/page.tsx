"use client";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import SVGBack from "@/components/SVGBack";
import Navbar from "../components/NavVar";
import ZStack from "@/components/base/ZStack";
import ChangeBackColor from "@/components/ChangeBackColor";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <ChangeBackColor />
      <div className="flex flex-col mx-auto justify-between p-24">
    
         
        <FeatureSection />
 
      </div>
      <SVGBack />
    </main>
  );
}
