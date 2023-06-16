import Image from "next/image";

const Hero: React.FC = () => {
  const size = 550;

  return (
    <>
      <div
        id="DESKTOP"
        className="hero hidden min-h-screen flex-row justify-start text-left text-neutral-content  lg:flex"
        style={{
          backgroundImage: "url(/images/back898.webp)",
          width: "100%",
        }}
      >
        <div className="hero-content ml-64 pr-[430px] ">
          <div className="container max-w-md ">
            <p className="p-2 text-2xl">AIキャラクター制作アプリ</p>
            <div style={{ fontFamily: "Sifonn" }}>
              <h1 className="text-9xl font-bold text-white ">Eveki</h1>
            </div>
            <div className="mb-8 px-2 text-lg font-medium ">
              <p>誰でも自分だけのAIを気軽に</p>
              <p>カスタマイズする世界へ</p>
              <button className="btn btn-accent text-white my-5">
              <a href="https://textcheckai.page.link/toapp">ダウンロード</a>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" hero mb-6 min-h-screen sm:hidden"
        style={{
          backgroundImage: "url(/images/backSmart.webp)",
          width: "100%",
        }}
      >
        <div
          id="DESKTOP"
          className="flexflex-row hero-content justify-start text-left text-neutral-content"
        >
          <div className="container max-w-md pb-56">
            <div style={{ fontFamily: "Sifonn" }}>
              <p className="p-2">AIキャラクター制作アプリ</p>
              <h1 className="text-8xl font-bold text-white ">Eveki</h1>
            </div>
            <div className="mb-8 px-2 text-lg font-medium ">
              <p>誰でも自分だけのAIを気軽に</p>
              <p>カスタマイズする世界へ</p>
              <button className="btn-outline btn my-5">ダウンロード</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
