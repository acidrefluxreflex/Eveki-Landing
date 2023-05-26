import Image from "next/image";


const Hero: React.FC = () => {

    const size = 550;

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <Image src="/images/top.png" alt="" height={size} width={size} />
        <div>
          <div style={{ fontFamily: "Sifonn" }}>
            <p className="p-2">AIキャラクター制作アプリ</p>
            <h1 className="text-9xl font-bold text-black ">Eveki</h1>
          </div>
          <div className="mb-8 px-2 text-lg font-medium text-black">
            <p>誰でも自分だけのAIを気軽に</p>
            <p>カスタマイズする世界へ</p>
            <button className="btn my-5">ダウンロード</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
