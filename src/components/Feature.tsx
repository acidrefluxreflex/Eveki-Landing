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

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? 100 : -100,
    },
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="BASE">
    <div className="justify-center py-5 hidden lg:flex">
      <motion.div
        className="p-4 "
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}

        style={{
          //width: "100%", // 親要素の幅いっぱいに伸ばす
          display: "flex",
          flexDirection: isLeft ? "row-reverse" : "row", // isLeft が true の場合は逆向きに並べる
          alignItems: "center", // 子要素を中央揃えにする
        }}
      >
        <div className="w-96 p-6 m-7">
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="mt-4">{description}</p>
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
    <div className="justify-center py-5 items-center lg:hidden">
      <div
        className="p-4 min-h-screen"
      >
        <div className="w-96 p-6 m-7">
          <h2 className="text-3xl font-medium">{title}</h2>
          <p className="">{description}</p>
        </div>
        <div className="h-98 relative items-center justify-center ">
          <Image
            src={icon}
            alt=""
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
