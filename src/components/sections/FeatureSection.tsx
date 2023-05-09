import { FC } from "react";
import Feature from "../Feature";

const features = [
  {
    icon: "/images/cards.jpg",
    title: "AIをシェア",
    description:
    `作成したAIは、QRコードを使って簡単に情報を共有することができます。QRコードは、スマートフォンのカメラを使って読み取ることができるため、簡単にアクセスすることができます。この機能を利用することで、イベントやプレゼンテーションなどで情報を共有する際に便利です。
    
    また、\nこのAIは、画像としてSNSにシェアできるAIカードも生成することができます。AIカードは、名刺のようなもので自分の作品としてAIを簡単に伝えることができます。AIカードを作成する際には、自動的にレイアウトやデザインが生成されます。そのため、デザインの知識がない人でも簡単に美しいAIカードを作成することができます。SNSにAIカードをシェアすることで、自分の情報を広くアピールすることができます。`,
  },
  {
    icon: "/images/bubbles.jpg",
    title: "個性豊かな会話を楽しむ",
    description:
      "AIの設定や口調は自分で自由に決めることができます。\n好きなキャラクターや有名人を再現したり、理想の友達を作ることも可能です。",
    isLeft: true,
  },
  {
    icon: "/images/form.jpg",
    title: "個性の構築",
    description:
      "AIに対してカンタンな操作で細かい設定を行うことができます。理想を実現するのに専門知識やプログラミングは不要です。",
  },
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="container items-center justify-center">
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
