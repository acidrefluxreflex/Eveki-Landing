import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Metadata } from "next";
import { SoftwareApplication, WithContext } from "schema-dts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIキャラ作成アプリ　Eveki",
  description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",
  twitter: {
    images: [
      "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.jpg&w=12000&q=75",
    ],
  },
  verification: {
    other: {
      "p:domain_verify": ["d57df8e16029fbe795edacf49fb3a629"],
      "yandex-verification": ["0099049ad683c27e"],
      "apple-itunes-app": [
        "app-id=6444040191, app-clip-bundle-id=com.wakaba.Eveki.Clip",
      ],
    },
  },

  openGraph: {
    title: "Eveki：AIキャラ作成アプリ",
    description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",
    url: "https://eveki.net",
    siteName: "eveki.net",
    images: [
      {
        url: "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.jpg&w=12000&q=75",
        width: 1200,
        height: 600,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareApplication: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AIキャラクター制作アプリ Eveki",
    image:
      "https://eveki.net/_next/image?url=%2Fimages%2FroundedIcon.png&w=640&q=75",
    url: "https://eveki.net/",
    applicationCategory: "EntertainmentApplication",
    downloadUrl: "https://textcheckai.page.link/toapp",
    operatingSystem: "iOS",
    screenshot:
      "https://eveki.net/_next/image?url=%2Fimages%2FchatImage.png&w=1920&q=75",
    offers: {
      "@type": "Offer",
      price: "0",
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplication),
          }}
          key="product-jsonld"
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_KEY}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.GTM_KEY}');
  `,
          }}
        ></Script>

        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
