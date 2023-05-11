"use client";


import ContactForm from "@/components/sections/ContactForm";
import MarkdownContent from "@/components/TestMark";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <MarkdownContent mdPath="contents/test.md" />   
    </main>
  );
}
