import { FC } from "react";

import { RiHomeGearLine } from "react-icons/ri";

import Icon from "@/libs/ReactIcon";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

const TopImageCard: FC<Props> = ({ icon, title, description }) => {



    
  return (
    <div className="border-0 shadow-md justify-center">
      <figure className="">
        <Icon icon={icon} size="96px" color="white" />
      </figure>
      <div className="">
        <h2 className="">{title}</h2>
      </div>
    </div>
  );
};

export default TopImageCard;
