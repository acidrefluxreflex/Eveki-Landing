import Image from "next/image";

const Hero: React.FC = () => {
  const size = 550;

  return (
    <>
    <div
    id="DESKTOP" 
      className="hero hidden lg:flex flex-row justify-start min-h-screen text-left  text-neutral-content"
      style={{
        backgroundImage: "url(/images/back99.png)",
        width: "100%",
      }}
    >
      <div className="hero-content ml-64 pr-[500px] ">
        <div className="container max-w-md ">
        <p className="p-2 text-2xl">AIキャラクター制作アプリ</p>
          <div style={{ fontFamily: "Sifonn" }}>
          
            <h1 className="text-9xl font-bold text-white ">Eveki</h1>
          </div>
          <div className="mb-8 px-2 text-lg font-medium ">
            <p>誰でも自分だけのAIを気軽に</p>
            <p>カスタマイズする世界へ</p>
            <button className="btn btn-outline my-5">ダウンロード</button>
          </div>
        </div>
      </div>
    </div>

    <div
      className=" sm:hidden hero min-h-screen mb-6"
      style={{
        backgroundImage: "url(/images/backSmart.webp)",
        width: "100%",
      }}
    >
      <div id="DESKTOP" className="hero-content flexflex-row justify-start text-left text-neutral-content">
        <div className="container max-w-md pb-56">
          <div style={{ fontFamily: "Sifonn" }}>
            <p className="p-2">AIキャラクター制作アプリ</p>
            <h1 className="text-8xl font-bold text-white ">Eveki</h1>
          </div>
          <div className="mb-8 px-2 text-lg font-medium ">
            <p>誰でも自分だけのAIを気軽に</p>
            <p>カスタマイズする世界へ</p>
            <button className="btn btn-outline my-5">ダウンロード</button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Hero;
