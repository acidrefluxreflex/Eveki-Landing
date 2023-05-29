import React from "react";
import Image from "next/image";

const SideElement: React.FC = () => {
  return (
    <div className="w-300px gap-y-8">
        <Image className="rounded-lg   my-8" src="/images/appBanner.webp" height={300} width={300} alt="Eveki 会話AI" />
        <Image className="rounded-lg my-8" src="/images/noteBanner.webp" height={90} width={300} alt="Eveki 会話AI" />
        <a href="https://www.instagram.com/eveki.ai/">
        <Image className="rounded-lg my-8" src="/images/instaBanner.webp" height={90} width={300} alt="Eveki 会話AI" />
        </a>
      {/* Your content here */}
    </div>
  );
};

export default SideElement;
