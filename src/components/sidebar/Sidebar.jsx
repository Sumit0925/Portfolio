import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";
import { delay, motion } from "framer-motion";
import { clipPath } from "framer-motion/client";

const sidebarVariant = {
  hidden: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visible: {
    clipPath: "circle(12000px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 2,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <motion.div
        className="sidebar"
        variants={sidebarVariant}
        animate={open ? "visible" : "hidden"}
      >
        <motion.div className="bg" variants={sidebarVariant}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
