import React from "react";
import Card from "../shared/VStackTexts";

const DetailFeatureSection: React.FC = () => {
  return (
    <div className="my-8 flex justify-center">
      <Card
        imageSrc="/path/to/image.jpg"
        title="キャラクター"
        description="お嬢様言葉や関西弁など、話し方として様々なキャラを選択できます。"
        buttonText="ボタン"
        link="/"
      />
      <Card
        imageSrc="/path/to/image.jpg"
        title="グループチャット"
        description="複数のAIを交えて会話することのできるグループチャットが可能です。"
        buttonText="ボタン"
        link="/"
      />
      <Card
        imageSrc="/path/to/top.jpg"
        title="記憶の保持"
        description="会話した内容をAIに記憶させて、その前提で会話を再開できます。"
        buttonText="ボタン"
        link="/"
      />
    </div>
  );
};

export default DetailFeatureSection;
