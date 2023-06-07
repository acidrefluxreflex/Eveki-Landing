import React from "react";
import Image from "next/image";

const EvekiDownloadSection: React.FC = () => {
  // Define icon path and size
  const iconPath = "M129.49 114.51C..."; // shortened for brevity
  const iconSize = 250;

  return (
    <div className="items-center justify-center text-center">
    <div className="flex justify-center ">
      {/* Render icon */}
      <div>
      <Image src="/images/roundedIcon.png" alt="Eveki" width={iconSize} height={iconSize} />
      </div>
      <div className="animate-fade-in items-center sm:block lg:flex ">
        {/* Render text section */}
        <div id="Text Section" className="block justify-start px-5 text-left">
          <div className="container" style={{ fontFamily: "Sifonn" }}>
            {/* Render heading */}
            <p className="p-2">AIキャラクター制作アプリ</p>
            <h1 className="text-9xl font-bold text-black ">Eveki</h1>
          </div>

          {/* Render description */}
          <div className="mb-8  px-2 text-lg font-medium text-black">
            <p>誰でも自分だけのAIを気軽に</p>
            <p>カスタマイズする世界へ</p>
            
          </div>
        </div>
      </div>
    </div>
    <button className="btn my-5">
              <a href="https://textcheckai.page.link/toapp">ダウンロード</a>
            </button>
    </div>
  );
};

export default EvekiDownloadSection;
