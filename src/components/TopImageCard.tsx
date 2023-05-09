import Image from "next/image";
import { FC } from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const TopImageCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="card border-0 shadow-md">
      <figure>
        <Image src={icon} alt="Shoes" width={925} height={528} />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopImageCard;