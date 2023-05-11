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
    <div className="justify-items-center border-0">
      <div className="box-border">
      <Icon icon={icon} size="96px" color="white" />
      </div>
      <h2 className="">{title}</h2>
    </div>
  );
};

export default TopImageCard;
