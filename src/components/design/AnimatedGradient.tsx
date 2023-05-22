import { motion } from "framer-motion";

const AnimatedSVG = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        width="700"
        height="700"
        variants={item}
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ffflux-gradient"
          >
            <stop stop-color="#e03c8a" stop-opacity="1" offset="0%"></stop>
            <stop stop-color="#33a6b8" stop-opacity="1" offset="100%"></stop>
          </linearGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.003"
              numOctaves="2"
              seed="252"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feGaussianBlur
              stdDeviation="20 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            ></feGaussianBlur>
            <feBlend
              mode="color-dodge"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            ></feBlend>
          </filter>
        </defs>
        <motion.rect
          width="700"
          height="700"
          fill="url(#ffflux-gradient)"
          filter="url(#ffflux-filter)"
          animate={{
            opacity: [1, 0.5, 1, 0.5, 1],
            transition: { duration: 2, repeat: 0 },
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedSVG;
