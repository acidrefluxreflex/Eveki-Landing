import React from "react";
import Card from "../shared/VStackTexts";

const UsagePlaneSection: React.FC = () => {
  return (
    <div className="flex justify-center bg-[#dcccde25] py-8">
      <Card
        imageSrc="/path/to/image.jpg"
        title="キャラクター"
        description="お嬢様言葉や関西弁など、AIの話し方として選べるキャラクターを豊富に用意しています。"
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

export default UsagePlaneSection;
