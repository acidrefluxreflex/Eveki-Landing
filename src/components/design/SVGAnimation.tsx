import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  pathData: string[];
  isRounded?: boolean;
};

const SVGAnimation = ({ pathData, isRounded = false }: Props) => {
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

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 4.5, bounce: 0 },
          opacity: { delay, duration: 0.09 }
        }
      };
    }
  };

  return (
    <div className="example" style={{ margin: "0 auto", padding: 0, width: "100%", height: "100%", maxWidth: 400 }}>
      <motion.svg viewBox="0 0 48 48" style={{ width: "100%", height: "100%" }}>
        {isVisible &&
          pathData.map((d, index) => (
            <motion.path
              key={index}
              d={d}
              fill="#bf4d00"
              fillRule="evenodd"
              strokeLinecap={isRounded ? "round" : "butt"}
              strokeLinejoin={isRounded ? "round" : "miter"}
              stroke="#bf4d00"
              strokeWidth={1}
              variants={draw}
              custom={index}
            />
          ))}
      </motion.svg>
    </div>
  );
};

export default SVGAnimation;
