import { FC } from "react";
import Feature from "../Feature";

const features = [
  {
    icon: "/images/cards.jpg",
    title: "AIをシェア",
    description: `作成したAIは、QRコードを使って簡単に情報を共有することができます。QRコードは、スマートフォンのカメラを使って読み取ることができるため、簡単にアクセスすることができます。この機能を利用することで、イベントやプレゼンテーションなどで情報を共有する際に便利です。
    また、このAIは、画像としてSNSにシェアできるAIカードも生成することができます。AIカードは、名刺のようなもので自分の作品としてAIを簡単に伝えることができます。AIカードを作成する際には、自動的にレイアウトやデザインが生成されます。そのため、デザインの知識がない人でも簡単に美しいAIカードを作成することができます。SNSにAIカードをシェアすることで、自分の情報を広くアピールすることができます。`,
  },
  {
    icon: "/images/bubbles.jpg",
    title: "個性豊かな会話を楽しむ",
    description: `AIの設定や口調は自由に変更することができるため、自分にとって最適なAIを作成することができます。たとえば、好きなキャラクターや有名人の口調を再現することができます。これにより、話し相手とのコミュニケーションがより楽しくなることがあります。
      また、AIを友達のように使うことができるため、理想の友達を作ることも可能です。自分の好みや性格に合わせたAIを作成することで、話し相手として寂しい時間を埋めたり、日々のストレス解消にも役立ちます。
      AIの設定や口調を自由に変更できるため、自分の希望に沿ったAIを作成することができます。自分のライフスタイルやニーズに合わせて、使い方を変えることで、より便利に利用することができます。`,
    isLeft: true,
  },
  {
    icon: "/images/form.jpg",
    title: "個性の構築",
    description: `このAIには、簡単な操作で細かい設定を行うことができます。例えば、自分の趣味や話し方を反映させた設定を行うことができます。これにより、AIとのコミュニケーションがより楽しく、自分らしい会話ができるようになります。
     また、このAIを使うためには、専門知識やプログラミングのスキルは必要ありません。簡単な操作で自分の理想を実現することができます。AIは、自分自身や自分のニーズに合わせてカスタマイズすることができるため、非常に使いやすいです。さらに、AIは自動的に学習するため、使い方を覚えると、よりスムーズな会話ができるようになります。`,
  },
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="items-center justify-center my-48">
        <div>
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isLeft={feature.isLeft}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
