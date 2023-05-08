import { FC } from "react";
import Feature from "./Feature";


const features = [
  {
    icon: "/images/cards.jpg",
    title: "AIをシェア",
    description: "作成したAIはQRコードで簡単に共有することが可能。\n画像としてSNSにシェアできるAIカードも生成することができます。",
  },
  {
    icon: "/images/bubbles.jpg",
    title: "個性豊かな会話を楽しむ",
    description: "AIの設定や口調は自分で自由に決めることができます。\n好きなキャラクターや有名人を再現したり、理想の友達を作ることも可能です。",
    isLeft: true,
  },
  {
    icon: "/images/form.jpg",
    title: "個性の構築",
    description: "This is feature 1",
  },
  
 
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="container justify-center items-center">
        
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
