import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-400%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="text-container"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>SUMIT ANGURAL</motion.h2>
            <motion.h1 variants={textVariants}>
              Full stack Web Developer
            </motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt="mouse-image"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="image-container"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="container-img"
            >
              <img src="/sumit-img.png" alt="hero-image" />
              <motion.svg
                className="circleSvg"
                fill="transparent"
                viewBox=" 0 0 506 506"
                xmlns="https://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  // stroke="#00ff99"
                  stroke="#663399"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={slidingVariant}
          initial="initial"
          animate="animate"
          className="slidingTextContianer"
        >
          Web Developer
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
