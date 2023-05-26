import React from "react";
import Link from "next/link";
import Image from "next/image";


interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  link: string
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  link

}) => {

 const size = 260;


  return (
    <div className="flex flex-col items-center max-w-xs px-7">
      <Image src={imageSrc}  width={size} height={size} alt={title} />
      <h3 className="text-3xl font-bold pb-7">{title}</h3>
      <p className="pb-7">{description}</p>
     <Link href={link} className="btn btn-outline btn-primary text-xl min-w-xs">{buttonText}</Link>
    </div>
  );



};

export default Card;
