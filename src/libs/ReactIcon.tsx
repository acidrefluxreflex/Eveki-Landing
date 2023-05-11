import React, { FC } from "react";
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size?: string;
  color?: string;
}

const Icon: FC<IconProps> = ({
  icon: IconComponent,
  size = "24px",
  color = "black",
}) => {
  return <IconComponent className="icon" size={size} color={color} />;
};

export default Icon;
