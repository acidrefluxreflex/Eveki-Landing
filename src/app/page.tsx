"use client";

import Hero from "@/components/sections/Hero";
import FeatureSection from "@/components/sections/FeatureSection";

import HowToUseSection from "@/components/sections/HowtoUse";
import SupportUseSection from "@/components/sections/SupportSection";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <div className="w-full items-center justify-center">
      <SupportUseSection />
     
        <FeatureSection />
        <HowToUseSection />
        <ContactForm />
      </div>
    </main>
  );
}
