import PageHeadImage from "@/components/shared/PageHeadImage";

export default async function Page() {
  const proseSetting: string =
    "prose  text-black prose-h1:text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";

  return (
    <>
      <PageHeadImage imageSrc="/images/HeadImage.webp" title="Features" />
      <div className="flex min-h-screen flex-col items-center justify-between py-12">
        <article className="px-5 py-8">
          <div id="content" className={proseSetting}>
            <p>
              Evekiは、特有の人格形成に特化したAIアプリケーションで、iOS向けにリリースされています。このアプリはプログラミングなどの専門的な知識を必要とせず、簡単な設定のみで個性豊かな人工知能を作成できる画期的なツールです。
            </p>
            <h2 id="キャラクター性の形成">キャラクター性の形成</h2>
            <p>
              キャラクター性は、話し方やメッセージの文体に影響を与え、応答や感情の印象を左右する要素の一部です。Evekiでは、趣味や肩書きなどの設定を通じてこれらの要素を調整できます。これにより、会話の文脈と組み合わせて唯一無二のキャラクター性を生み出すことが可能です。
            </p>
            <h2 id="aiの共有と公開">AIの共有と公開</h2>
            <p>
              Evekiで作成したAIは、データサイズの心配なく公開や共有が可能です。従来の大規模なモデルを扱う必要はありません。抽出された個性を用いたコードを利用し、QRコードやAIカードを介して簡単にシェアできます。これにより、他のユーザーやプロジェクトとの連携がスムーズに行えます。
            </p>
            <h2 id="ユーザーシナリオ">ユーザーシナリオ</h2>
            <p>
              Evekiは多岐にわたる目的に利用可能です。例えば、製品のPRや広報のためのAIを簡単に対象のユーザーに届けることができます。また、個人であれば、自分が制作した作品を公開し、他のユーザーと共有することも可能です。
            </p>
            <h2 id="パーソナルなaiの形成">パーソナルなAIの形成</h2>
            <p>
              Evekiは、無機質な話し方を超え、「自分だけ」のパーソナルなAIを作成できるようにします。応答の文体や個性に焦点を当て、理想とする人格を形成することが主眼です。個性などのデータはQRコードとして出力でき、Evekiを介してAIの移行や共有も簡単に行えます。
            </p>
            <p>
              Evekiを通じて、あなたの世界に唯一無二のAIを生み出しましょう。新しいコミュニケーションの形がここにあります。始めてみましょう。
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
