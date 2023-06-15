import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  isLeft?: boolean;
}

const Feature: FC<FeatureProps> = ({
  icon,
  title,
  description,
  isLeft = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const size = 420;
  const splitText = description.split("\n");

  const leftText = "w-2/5 mr-7 pr-10 ";
  const rightText = "w-2/5 ml-7 pl-10";

  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="BASE" className="py-9">
      <div className="hidden justify-center py-5 lg:flex ">
        <motion.div
          className="max-w-full items-center justify-center p-0"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          style={{
            //width: "100%", // 親要素の幅いっぱいに伸ばす
            display: "flex",
            flexDirection: isLeft ? "row-reverse" : "row", // isLeft が true の場合は逆向きに並べる
            //alignItems: "center", // 子要素を中央揃えにする
          }}
        >
          <div className={isLeft ? rightText : leftText}>
            <div style={{ fontFamily: "Sifonn" }}>
              <h2 className="mb-9 text-8xl font-medium text-[#76428C]">{title}</h2>
            </div>
            {splitText.map((line, index) => (
              <p key={index} className="mt-4 text-md">
                {line}
                {index !== splitText.length - 1 && <br />}
              </p>
            ))}
          </div>
          <div className="h-98 relative items-center justify-center ">
            <Image
              src={icon}
              alt=""
              height={size}
              width={size}
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
      <div className="items-center justify-center py-5 lg:hidden">
        <div className="min-h-screen p-4">
          <div className="m-7 p-6">
            <div style={{ fontFamily: "Sifonn" }}>
              <h2 className="mb-9 text-3xl font-medium">{title}</h2>
            </div>
            {splitText.map((line, index) => (
              <p key={index} className="mt-4 text-lg">
                {line}
                {index !== splitText.length - 1 && <br />}
              </p>
            ))}
          </div>
          <div className="h-98  items-center justify-center px-5 ">
            <Image
              src={icon}
              alt={title}
              height={size * 0.8}
              width={size * 0.8}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
