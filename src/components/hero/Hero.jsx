import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

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

// const handleDownload = () => {
//   const resumeUrl = "Resume.pdf"; // Update with the correct path
//   const link = document.createElement("a");
//   link.href = resumeUrl;
//   link.setAttribute("download", "Your_Resume.pdf");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

const handleView = () => {
  const resumeUrl = "/Resume_Sumit_Upload.pdf"; // Update with the correct path
  window.open(resumeUrl, "_blank");
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
              <motion.p variants={textVariants}>
                With expertise in both front-end and back-end development.
                Passionate about building scalable, user-focused applications
                with problem-solving ability and adaptability.
              </motion.p>
            </motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button
                className="resume_button"
                variants={textVariants}
                onClick={handleView}
              >
                Resume
                {/* <span> */}
                <IoDocumentText className="icon" />
                {/* </span> */}
              </motion.button>
              <motion.div variants={textVariants} className="hero_social">
                <a
                  title="GitHub"
                  href="https://github.com/Sumit0925"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </motion.div>
              <motion.div variants={textVariants} className="hero_social">
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/sumit-angural-249a79275/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </motion.div>
              <motion.div variants={textVariants} className="hero_social">
                <a
                  title="Mail"
                  href="mailto:smtangural9@gmail.com"
                  target="_blank"
                >
                  <GoMail />
                </a>
              </motion.div>
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
              <img src="/sumit-photo.png" alt="hero-image" />
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
