import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  isLeft?: Boolean; // 追加
}

const Feature: FC<FeatureProps> = ({ icon, title, description, isLeft = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? "-30%" : "30%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="w-full md:w-1/3 p-4"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 mr-4">
          <Image src={icon} alt={title} width={64} height={64} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default Feature;
