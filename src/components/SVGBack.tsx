import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SVGAnimation from "./SVGAnimation";

const SVGBack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const svgPath =
    "M25,20 C25,5 60,5 60,20 C60,35 25,35 25,50 C25,65 60,65 60,50";

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
        marginRight: "auto"
      }}
    >
        <div>
      <h1>Welcome to my website</h1>
      <SVGAnimation
        pathData={svgPath}
      />
    </div>
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
            d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
          />
        )}
      </motion.svg>
    </div>
  );
};

export default SVGBack;
