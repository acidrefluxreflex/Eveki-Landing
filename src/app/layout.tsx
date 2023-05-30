import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/NavVar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIキャラ作成アプリ　Eveki",
  description: "自分だけの人工知能が作れるアプリEvekiの公式サイトです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtmInit(w,d,s,l,i) {
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            }
            gtmInit(window,document,'script','dataLayer','${!process.env
              .GTM_KEY}');
          `,
        }}
      />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRTX3GF"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
