import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const HowToUseSection: React.FC<Props> = () => {
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
    <section className="py-20" ref={ref}>
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
        <div className="container mx-auto w-3/5 items-center justify-center">
          <div className="flex">
            <motion.div
              id="CARD"
              className="mb-4 pr-4 lg:w-1/2"
              variants={contentVariants}
            >
              <div className="card border-0 shadow-md">
                <figure>
                  <Image
                    src="/images/robots.jpg"
                    alt="Shoes"
                    width={925}
                    height={528}
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title">Feature 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec dolor eu libero hendrerit tempor.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="CARD"
              className="mb-4 w-full px-4 lg:w-1/2"
              variants={contentVariants}
            >
              <div className="card border-0 shadow-md">
                <figure>
                  <Image
                    src="/images/robots.jpg"
                    alt="Shoes"
                    width={925}
                    height={528}
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title">Feature 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec dolor eu libero hendrerit tempor.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              id="CARD"
              className="mb-4 w-full pl-4 lg:w-1/2"
              variants={contentVariants}
            >
              <div className="card border-0 shadow-md">
                <figure>
                  <Image
                    src="/images/robots.jpg"
                    alt="Shoes"
                    width={925}
                    height={528}
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title">Feature 1</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis nec dolor eu libero hendrerit tempor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 text-center">
            <div className="button">
              <Link href="" className="inline-flex items-center">
                button
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowToUseSection;
