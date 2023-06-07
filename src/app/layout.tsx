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
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": "AIキャラクター制作アプリ Eveki",
        "image": "https://eveki.net/_next/image?url=%2Fimages%2FroundedIcon.png&w=640&q=75",
        "url": "https://eveki.net/",
        "applicationCategory": "EntertainmentApplication",
        "downloadUrl": "https://textcheckai.page.link/toapp",
        "operatingSystem": "iOS",
        "screenshot": "https://eveki.net/_next/image?url=%2Fimages%2FchatImage.png&w=1920&q=75"
      }
  `,
    };
  }

  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_KEY}`}
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
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
