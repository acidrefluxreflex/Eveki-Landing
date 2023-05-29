import React from "react";
import Image from "next/image";

const SideElement: React.FC = () => {
  return (
    <div className="w-300px">
        <Image src="/images/appBanner.webp" height={300} width={300} alt="Eveki 会話AI" />
      {/* Your content here */}
    </div>
  );
};

export default SideElement;
