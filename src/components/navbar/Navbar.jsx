import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sumit */}
            <a href="/">
              <img src="/sumitLogo.png" alt="logo" />
            </a>
          </motion.span>

          <div className="navlinks">
            <li>
              <a href="#HomePage">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact Me</a>
            </li>
          </div>

          <div className="social">
            {/* <a title="GitHub" href="https://github.com/Sumit0925" target="_blank">
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
