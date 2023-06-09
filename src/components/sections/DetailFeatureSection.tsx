import React from "react";
import Link from "next/link";
import Card from "../shared/VStackTexts";

const DetailFeatureSection: React.FC = () => {
  return (
    <div className="my-24  justify-center">
      <div className=" flex flex-col justify-center md:flex-row">
        <Card
          imageSrc="/images/Imaginary-friend-amico.svg"
          title="キャラクター"
          description="お嬢様言葉や関西弁など、話し方として様々なキャラを選択できます。"
          buttonText="ボタン"
          showButton={false}
          link="/"
        />
        <Card
          imageSrc="/images/Messaging-fun-amico.svg"
          title="グループチャット"
          description="複数のAIを交えて会話することのできるグループチャットが可能です。"
          buttonText="ボタン"
          showButton={false}
          link="/"
        />
        <Card
          imageSrc="/images/Critical-thinking-amico.svg"
          title="記憶の保持"
          description="会話した内容をAIに記憶させて、その前提で会話を再開できます。"
          buttonText="ボタン"
          showButton={false}
          link="/"
        />
      </div>
      <div className=" flex   justify-center">
        <Link
          href="/product"
          className="min-w-xs btn-outline btn-primary btn text-xl"
        >
          機能をもっと見る
        </Link>
      </div>
    </div>
  );
};

export default DetailFeatureSection;
