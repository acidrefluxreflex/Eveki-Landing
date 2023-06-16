import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eveki：About",
  description: "Evekiの理念やコンセプトを紹介しています",
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
    title: "Eveki：About",
    description: "Evekiの理念やコンセプトを紹介しています",
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


const About = () =>  {
  const proseSetting: string =
  "prose  text-black prose-h1:text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12">
      <article className="px-5 py-8">
      <div className={proseSetting}>
        <h1 id="eveki%E3%81%AE%E6%AD%A9%E3%81%BF">Evekiの歩み</h1>
        <h2 id="%E7%9D%80%E6%83%B3%E3%81%A8%E7%99%BA%E8%B6%B3">着想と発足</h2>
        <p>
          Evekiは現在普及しているような高性能なモデルが発表される以前、GPT-2の普及より前から日本語に特化した自然言語モデルに注目してきました。人間のような文章、応答を可能にする自然言語モデルですが、機械学習という基盤を持つ以上どうしても無機質で「ありきたり」な結果を出してしまうという欠点があります。
        </p>
        <p>
          私たちは内容だけではなく文体そのものに個性や人格を表現することのできる日本語の特徴に注目し、それを活かした「個性的な」AIを作るという目的でEvekiプロジェクトを発足しました。
        </p>
        <h2 id="%E6%96%87%E4%BD%93%E3%81%B8%E3%81%AE%E6%B3%A8%E7%9B%AE">
          文体への注目
        </h2>
        <p>
          このEvekiを語る上で最大の特徴とも言えるのが文体への注目です。AIを使った応答を考える時、返答そのもので個性や違いを出すのは困難です。またそれによって回答の正確性が失われる恐れがあります。
        </p>
        <p>
          しかし文体は同じ内容であっても書き手の視点や人格をそれとなく表すことのできるものです。また少し踏み込んで口調や話し方にまで視野を広げればアニメやマンガのキャラクターのような独自性を付け加えることも可能です。
        </p>
        <p>
          文章を扱う自然言語モデルとしての正確性を保ちつつ、人間らしい個性も持たせるという目的において文体は重要なものになっています。
        </p>
        <h2 id="%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E6%80%A7">
          カスタマイズ性
        </h2>
        <p>
          私たちは一方的な開発を好みません。最終的にはユーザーが自分の手で理想を実現する形があるべき姿だと考えています。こうすることで結果的に全ての人に寄り添ったAIの提供が可能になるためです。
        </p>
        <p>
          そのためEvekiはカスタマイズ性や拡張性を意識して開発されています。また手軽に扱えるよう、アプリケーション内ではQRコードのみで共有可能にするなど次世代を見据えた構成を積極的に採用しています。
        </p>
        <h1 id="eveki%E3%81%AE%E7%B2%BE%E7%A5%9E">Evekiの精神</h1>
        <h2 id="%E5%93%B2%E5%AD%A6%E3%81%AE%E5%B0%8E%E5%85%A5">哲学の導入</h2>
        <p>
          「人間らしさ」を考える以上、ただコードを書いているだけでは限界があります。私たちはサービスとして物理的な向上だけではなく、哲学など思想的な探求も同時に行なっています。
        </p>
        <p>
          思考・意識・判断の違いや倫理への考え方など、人間そのものに関する研究はそれを再現しようとする人工知能には本来欠かせないものです。単純なデータのみに頼ることをせず、また軽々しく体系化することも避け、常に言葉を持って思考していきます。
          <sub></sub>
        </p>
        <h2 id="%E9%81%93%E5%BE%B3%E6%80%A7%E3%81%AE%E7%A2%BA%E4%BF%9D">
          道徳性の確保
        </h2>
        <p>
          言語を扱う上では道徳性も問題になります。初期の言語モデルではこの点が憂慮され、大企業が開発したものでも差別的発言から停止されたものも存在します。現在ではこの点はいくらか改良されていますが今後の発展によっては思わぬ場面で道徳的問題が発生する恐れがあります。
        </p>
        <p>
          私たちはこの課題を重く見ており、開発においては道徳を常に意識しています。それは過激な発言をしないといったことだけではなく、誤った使い方の防止など多岐に渡るべきだと考えています。
        </p>
      </div>
      </article>
    </main>
  );
}

export default About;