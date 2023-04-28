import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  pathData: string;
};

const SVGAnimation = ({ pathData }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 300) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        style={{ width: "80%", height: "80%" }}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isVisible && (
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            stroke="#bf4d00"
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            strokeWidth={4}
            strokeDasharray="0 1"
            fill="none"
            d={pathData}
          />
        )}
      </motion.svg>
    </div>
  );
};

export default SVGAnimation;
