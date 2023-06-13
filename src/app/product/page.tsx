import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eveki：Product",
  description: "Evekiの概要と特徴についてご紹介します",
  twitter: {
    images: [
      "https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.webp&w=12000&q=75",
    ],
  },
  verification: {
    other: {
      "p:domain_verify": ["d57df8e16029fbe795edacf49fb3a629"],
    },
  },
  openGraph: {
    title: "Eveki：Product",
    description: "Evekiの概要と特徴についてご紹介します",
    url: 'https://eveki.net',
    siteName: 'eveki.net',
    images: [
      {
        url: 'https://eveki.net/_next/image?url=%2Fimages%2FforTwitter.webp',
        width: 1200,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },

};

const About = () => {
  const proseSetting: string =
    "prose  text-black prose-h1:text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <div className={proseSetting}>
        <h1 id="eveki%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">Evekiについて</h1>
        <h2 id="%E6%A6%82%E8%A6%81%E3%81%A8%E7%89%B9%E5%BE%B4">概要と特徴</h2>
        <Image
          src="/contents/assets/productTop.webp"
          loading = 'eager'
          alt="Eveki product"
          width="1280"
          height="600"
        />
        <p>
          Evekiは特有の人格形成に特化したAIアプリケーションです。プログラミングなどの専門的な知識を必要とせず、簡単な設定のみで個性豊かな人工知能を作ることが可能です。現在はiOS向けにリリースを行なっています。
        </p>
        <p>
          応答の文体や個性に着目し、自分の理想とする人格を形成することを主眼に置いています。これによって従来の無機質な話し方だけではなく「自分だけ」のパーソナルなAIを簡単に作成することができます。また、個性などのデータはQRコードとして出力することができるため、Evekiを介してAIの移行や共有を行うことも可能です。
        </p>
        <h2 id="%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC">
          キャラクター
        </h2>
        <Image
          src="/contents/assets/product5.jpg"
          alt="Eveki product"
          width="1280"
          height="600"
        />
        <p>
          人工知能の個性を形成する要素のひとつが「キャラクター性」です。これは話し方やメッセージの文体にあたる部分であり、応答や感情の印象を左右するものになっています。
        </p>
        <p>
          また趣味や肩書きといった設定を行うことでその内容も返答に反映させることができます。これらに会話の文脈などを合わせることで唯一無二のキャラクター性を生み出すことを可能にしています。
        </p>
        <h2 id="ai%E3%82%B7%E3%82%A7%E3%82%A2%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0">
          AIシェアシステム
        </h2>
        <Image
          src="/contents/assets/product4.jpg"
          alt="Eveki product"
          width="1280"
          height="600"
        />
        <p>
          作成したAIは公開、共有することが可能です。従来のようにデータサイズの大きいモデルを扱う必要はなく、個性を抽出したコードを用いることで簡単にシェアすることが可能です。コードはQRコードやそれを掲載したAIカードによって共有することができます。
        </p>
        <p>
          これによって特定の目的、例えば製品のPRや広報のためのAIを簡単に対象のユーザーのもとに届けることが可能です。また個人であれば自分の制作した作品として公開するといった使い方もできます。
        </p>
        <h1 id="%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9">サービス</h1>
        <h2 id="eveki%E3%81%AE%E6%A7%8B%E6%88%90">Evekiの構成</h2>
        <Image
          src="/contents/assets/Eveki-4.webp"
          alt="Eveki product"
          width="1280"
          height="600"
        />
        <p>
          Evekiは人工知能の応答を対応するEveki
          Coreとそれに対応するフロントシステムという構成で成立しています。Coreに対してAI固有のコードを用いることで任意の人格を呼び出す形になります。CoreにはAPIからアクセスすることができ、例えばEveki
          iOSではこのCoreと通信することで会話を行なっています。こうすることによって他サービスなど外部との連携をスムーズに行うことが可能にしています。
        </p>
        <h2 id="%E5%BF%9C%E7%AD%94%E3%81%AE%E5%AE%89%E5%85%A8%E6%80%A7">
          応答の安全性
        </h2>
        <p>
          差別的な内容や性的な内容を含む返答を防ぐこtに加え、ユーザー側からの攻撃的なメッセージからデータを守ることも可能です。人工知能導入のリスクを減らした上で使用、導入することができます。
        </p>
      </div>
    </main>
  );
};

export default About;
