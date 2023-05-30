"use client";

import Hero from "@/components/sections/NewHero";
import FeatureSection from "@/components/sections/FeatureSection";
import SupportUseSection from "@/components/sections/SupportSection";
import ContactForm from "@/components/sections/GFContactForm";
import DetailFeatureSection from "@/components/sections/DetailFeatureSection";
import UsagePlaneSection from "@/components/sections/UsagePlanSection";
import SecondDownloadSection from "@/components/sections/SecondDownloadSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="w-full items-center justify-center">
        <SupportUseSection />
        <UsagePlaneSection />
        <FeatureSection />
        <DetailFeatureSection />
        <SecondDownloadSection />
        <ContactForm />
      </div>
    </main>
  );
}
