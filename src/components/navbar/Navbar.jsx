import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <Sidebar /> */}

        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Sumit
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
            <a href="">
              <img src="/facebook.png" alt="" />
            </a>
            {/* <a href="">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/youtube.png" alt="" />
            </a>
            <a href="">
              <img src="/dribbble.png" alt="" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
