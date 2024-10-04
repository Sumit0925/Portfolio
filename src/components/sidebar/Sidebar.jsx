import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const sidebarVariant = {
  hidden: {
    clipPath: "circle(25px at 35px 35px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  visible: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="sidebar" animate={open ? "visible" : "hidden"}>
        <motion.div className="bg" variants={sidebarVariant}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
