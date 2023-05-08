import Image from "next/image";
import { FC } from "react";

type FeatureProps = {
  title: string;
  text: string;
  imageSrc: string;
  altText: string;
  reverse?: boolean;
};

const FeatureCell: FC<FeatureProps> = ({
  title,
  text,
  imageSrc,
  altText,
  reverse = false,
}) => {
  const size = 520;

  return (
    <div className="flex">
      <div className="p-6 ">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="mt-4 w-64">{text}</p>
      </div>
      <div className="h-98 w-1/2">
        <Image
          src={imageSrc}
          alt={altText}
          height={size}
          width={size}
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default FeatureCell;
