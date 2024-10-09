import React from "react";
import "./skills.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="wrapper">
          <div className="icons">
            <div data-tooltip-id="html" className="icon">
              <FaHtml5 />
            </div>
            <div data-tooltip-id="css" className="icon">
              <FaCss3 />
            </div>
            <div data-tooltip-id="js" className="icon">
              <FaJs />
            </div>
            <div data-tooltip-id="react" className="icon">
              <FaReact />
            </div>
            <div data-tooltip-id="node" className="icon">
              <FaNodeJs />
            </div>
            <div data-tooltip-id="tailwind" className="icon">
              <SiTailwindcss />
            </div>
            <div className="icon-text">
              C++
            </div>
            <div className="icon-text2">
              DSA
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip
        id="html"
        place="bottom"
        content="Html5"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
      <ReactTooltip
        id="css"
        place="bottom"
        content="Css"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
      <ReactTooltip
        id="js"
        place="bottom"
        content="JavaScript"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
      <ReactTooltip
        id="react"
        place="bottom"
        content="ReactJs"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
      <ReactTooltip
        id="node"
        place="bottom"
        content="NodeJs"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
      <ReactTooltip
        id="tailwind"
        place="bottom"
        content="Tailwind Css"
        className="tooltip"
        style={{ color: "orange", fontSize: "2rem", fontWeight: "500" }}
      />
    </>
  );
};

export default Skills;
