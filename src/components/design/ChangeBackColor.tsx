import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ColorSlide = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0,
      transition: { duration: 1 },
    });
  }, []);

  return (
    <div className="h-screen bg-gray-900">
      <motion.div
        className="h-screen w-full bg-green-500"
        animate={controls}
        initial={{ x: "100%" }}
        style={{ x: 0 }}
      >
        momo
      </motion.div>
    </div>
  );
};

export default ColorSlide;
