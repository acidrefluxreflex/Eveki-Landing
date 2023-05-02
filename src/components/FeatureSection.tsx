import { FC } from "react";
import Feature from "./Feature";
import image from  "../images/icon.png"

const features = [
  {
    icon: "/images/icon.png",
    title: "個性の構築",
    description: "This is feature 1",
  },
  {
    icon: "/images/bubbles.jpg",
    title: "個性豊かな会話を楽しむ",
    description: "AIの設定や口調は自分で自由に決めることができます。\n好きなキャラクターや有名人を再現したり、理想の友達を作ることも可能です。",
    isLeft: true,
  },
  {
    icon: "/images/icon.png",
    title: "AIをシェア",
    description: "自分が作成したAIはQRコードで簡単に共有することができます。",
  },
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="container">
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
