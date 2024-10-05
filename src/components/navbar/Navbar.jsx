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
            <img src="/sumitLogo.png" alt="logo" />
          </motion.span>

          <div className="navlinks">
            
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            
          </div>

          <div className="social">
            <a title="GitHub" href="https://github.com/Sumit0925">
              <FaGithub/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
