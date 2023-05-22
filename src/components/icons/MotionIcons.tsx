import React, { FC } from "react";
import { motion } from "framer-motion";


interface IconProps {
  size?: number;
  color?: string;
  pathData: string[];
}

const SVGIcon: FC<IconProps> = ({ size = 24, color = 'currentColor', pathData }) => {

    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <div
      className="flex items-center justify-center w-[{size}px] h-[{size}px] rounded-md bg-transparent"
      style={{ minWidth: size }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 48 48" >
        {pathData.map((path, i) => (
          <motion.path 
          key={i} 
          d={path} 
          fill={color}
          strokeWidth="0.5"
          stroke={color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={transition}
          />
        ))}
      </svg>
    </div>
  );
};

export default SVGIcon;





