import React from "react";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const HowToUseSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div>
    <section id="DESKTOP" className="hidden lg:flex items-center justify-center bg-[#dcccde25] lg:pt-20">
      <div className="text-center">
        <div className=" text-center">
          <h2 className="text-5xl font-bold">個性豊かな会話AIを気軽に作成</h2>
          <p className="my-8">
            AIの趣味や話し方を自由に設定し、理想の友人やパートナーを作ることができます。
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/chatImage.png"
            height={1366}
            width={768}
            alt="Eveki 会話AI"
          />
        </div>
      </div>
    </section>
    <section id="SMARTPHONE" className="lg:hidden flex items-center justify-center bg-[#dcccde25] lg:pt-20">
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-3xl px-5 font-bold">
            個性豊かな会話AIを
            <p>気軽に作成</p>
            </h2>
          <p className="my-8 px-5 ">
            AIの趣味や話し方を自由に設定し、理想の友人やパートナーを作ることができます。
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/chatImage.png"
            height={1366}
            width={768}
            alt="Eveki 会話AI"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default HowToUseSection;
