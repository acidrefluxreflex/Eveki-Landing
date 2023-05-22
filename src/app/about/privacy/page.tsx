"use client";

import "../style.css";
import Home from "@/components/TestMark";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <Home mdPath="/contents/privacy.md" />
    </main>
  );
}
