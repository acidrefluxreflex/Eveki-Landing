"use client";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";

import HowToUseSection from "@/components/HowtoUse";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <div className="w-full  items-center justify-center">
        <FeatureSection />
        <HowToUseSection />
        <ContactForm />
      </div>
    </main>
  );
}
