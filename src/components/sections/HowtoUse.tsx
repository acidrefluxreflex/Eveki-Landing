import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TopImageCard from "../TopImageCard";

const features = [
  {
    icon: "/images/robots.jpg",
    title: "AIをシェア",
    description: `momo`,
  },
  {
    icon: "/images/robots.jpg",
    title: "個性豊かな会話を楽しむ",
    description: `momo`,
  },
  {
    icon: "/images/robots.jpg",
    title: "個性の構築",
    description: `momo`,
  },
];

const HowToUseSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="hidden py-20 lg:flex items-center justify-center bg-[#0c0c0c] text-white" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="flex mx-48 items-center justify-center ">
          <div className="flex">
            {features.map((feature) => (
              <motion.div
                id="CARD"

                className="mb-4 pr-4 lg:w-1/2"
                variants={contentVariants}
              >
                <TopImageCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </div>
       
        </div>
      </motion.div>
    </section>
  );
};

export default HowToUseSection;
