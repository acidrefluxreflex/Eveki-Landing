import { FC } from "react";
import Feature from "../Feature";

const features = [

  {
    icon: "/images/cards.jpg",
    title: "AIをシェア",
    description: `作成したAIは、QRコードを使って簡単に情報を共有することができます。Qカメラを使って簡単にアクセスすることができます。
    また、このAIは、画像としてSNSにシェアできるAIカードも生成することができます。AIカードを作成する際には、自動的にレイアウトやデザインが生成されます。そのため、デザインの知識がない人でも簡単に美しいAIカードを作成することができます。`,
  },


  {
    icon: "/images/bubbles.jpg",
    title: "会話を楽しむ",
    description: `AIの設定や口調は自由に変更することができるため、自分にとって最適なAIを作成することができます。たとえば、好きなキャラクターや有名人の口調を再現することができます。
      また、AIを友達のように使うことができるため、理想の友達を作ることも可能です。自分の好みや性格に合わせたAIを作成することで、話し相手として寂しい時間を埋めたり、日々のストレス解消にも役立ちます。
      `,
    isLeft: true,
  },
  

];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="items-center justify-center  bg-[#dcccde25]">
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
