import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  pathData: string[];
  isRounded: boolean | undefined;
};

const SVGAnimation = ({ pathData, isRounded = false }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="example"
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <motion.svg
        style={{ width: "100%", height: "100%" }}
        viewBox="0 0 50 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isVisible &&
          pathData.map((d, index) => (
            <motion.path
              key={index}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              stroke="#bf4d00"
              stroke-linecap={isRounded ? "round" : "none"}
              stroke-linejoin={isRounded ? "round" : "none"}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              strokeWidth={1}
              strokeDasharray="0 1"
              fill="#bf4d00"
              fill-rule="evenodd"
              d={d}
            />
          ))}
      </motion.svg>
    </div>
  );
};

export default SVGAnimation;
