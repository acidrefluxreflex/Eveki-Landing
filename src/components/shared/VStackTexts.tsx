import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  showButton?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  link,
  showButton = true, // ボタンの初期値をtrueに設定
}) => {
  const size = 260;

  return (
    <div className="flex max-w-xs flex-col items-center px-7">
      <Image src={imageSrc} width={size} height={size} alt={title} />
      <h3 className="pb-7 text-3xl font-bold">{title}</h3>
      <p className="pb-7">{description}</p>
      {showButton && ( // showButtonがtrueの場合にのみボタンを表示
        <Link
          href={link}
          className="min-w-xs btn-outline btn-primary btn text-xl"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Card;
