import React from "react";
import Card from "../shared/VStackTexts";

const UsagePlaneSection: React.FC = () => {
  return (
    <div className="flex  flex-col md:flex-row justify-center  py-8">
      <Card
        imageSrc="/images/bubbleIcon.png"
        title="日々の話し相手に"
        description="EvekiのAIならいつでもあなたの話を聞いてくれます"
        buttonText="ボタン"
        link="/"
        showButton={false}
      />
      <Card
        imageSrc="/images/heartIcon.png"
        title="悩みの相談相手に"
        description="他人に打ち明けにくいこともこっそり話すことができます"
        buttonText="ボタン"
        link="/"
        showButton={false}
      />
      <Card
        imageSrc="/images/academicIcon.png"
        title="創作・勉強の助けに"
        description="基礎的な知識を持っているので目的に応じた使い方が可能です"
        buttonText="ボタン"
        link="/"
        showButton={false}
      />
    </div>
  );
};

export default UsagePlaneSection;
