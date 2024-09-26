import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
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
    transition: {
      when: "beforeChildren",
    },
  },
  visible: {
    y: 50,
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

const Links = () => {
  const items = ["HomePage", "Services", "Portfolio", "Contact"];

  return (
    <>
      <motion.div className="links" variants={variants}>
        {items.map((item, index) => (
          <motion.a
            href={`#${item}`}
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default Links;
