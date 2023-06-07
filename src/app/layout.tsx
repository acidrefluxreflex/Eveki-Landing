import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/NavVar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIキャラ作成アプリ　Eveki",
  description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",

  verification: {
    other: {
      "p:domain_verify": ["d57df8e16029fbe795edacf49fb3a629"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_KEY}`}
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
