import { useState } from "react";
import "./about.scss";
import Education from "./Education";
import Skills from "./Skills";


const content = [
  [
    <Education/>
  ],
  [
    <Skills/>
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

const About = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div className="about">
      <div className="about-wrapper">
        {/* <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
        <h1>React.js</h1>
        <p>i.e., using the React library for rendering the UI</p>
        </div>
        </header> */}

          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Education
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Skills
            </button>
            {/* <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resources
            </button> */}
          </menu>
        <div id="tabs">
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item,index) => (
                <div key={index}>{item}</div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
