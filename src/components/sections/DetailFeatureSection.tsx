import React from "react";
import Card from "../shared/VStackTexts";

const DetailFeatureSection: React.FC = () => {
  return (
    <div className="my-24 flex flex-col md:flex-row justify-center">
      <Card
        imageSrc="/images/Imaginary-friend-amico.svg"
        title="キャラクター"
        description="お嬢様言葉や関西弁など、話し方として様々なキャラを選択できます。"
        buttonText="ボタン"
        link="/"
      />
      <Card
        imageSrc="/images/Messaging-fun-amico.svg"
        title="グループチャット"
        description="複数のAIを交えて会話することのできるグループチャットが可能です。"
        buttonText="ボタン"
        link="/"
      />
      <Card
        imageSrc="/images/Critical-thinking-amico.svg"
        title="記憶の保持"
        description="会話した内容をAIに記憶させて、その前提で会話を再開できます。"
        buttonText="ボタン"
        link="/"
      />
    </div>
  );
};

export default DetailFeatureSection;
