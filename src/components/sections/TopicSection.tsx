import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TopicSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div className="bg-from-gray-900 h-screen">
      <motion.div
        className="h-screen w-full bg-green-500"
        ref={ref}
        animate={controls}
        initial={{ x: "100%" }}
        style={{ x: 0 }}
      >
        momo
      </motion.div>
    </div>
  );
};

export default TopicSection;
