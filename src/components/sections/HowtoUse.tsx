import React from "react";
import {
  RiHomeGearLine,
  RiQuestionAnswerLine,
  RiHammerLine,
  RiEmotionHappyLine,
  RiContactsLine,
} from "react-icons/ri";
import SVGAnimation from "../SVGAnimation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TopImageCard from "../TopImageCard";
import { AiOutlineSwitcher } from "react-icons/ai";

const features = [
  {
    icon: AiOutlineSwitcher,
    title: "自分だけのAI",
    description: `momo`,
  },
  {
    icon: RiHammerLine,
    title: "カンタン作成",
    description: `momo`,
  },
  {
    icon: RiContactsLine,
    title: "個性を設定",
    description: `momo`,
  },
  {
    icon: RiQuestionAnswerLine,
    title: "何でも話せる",
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

  const pathData = [
    "M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z",
  ];

  return (
    <section
      className="hidden items-center justify-center bg-[#0c0c0c] py-20 text-white lg:flex"
      ref={ref}
    >
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
        <div className="mx-48 flex items-center justify-center ">
          <div className="flex">
            {features.map((feature) => (
              <motion.div
                id="CARD"
                className="mb-4 pr-4 lg:w-1/2"
                variants={contentVariants}
                key={feature.title}
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
