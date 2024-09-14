import { a } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 50,
    opacity: 1,
  },
};

const Links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <>
      <motion.div className="links" variants={variants}>
        {items.map((item, index) => (
          <motion.a href={`#${item}`} key={index} variants={itemVariants}>
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Links;
