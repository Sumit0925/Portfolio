import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
        <div className="text-container">
            <h2>SUMIT ANGURAL</h2>
            <h1>Full stack Web Developer</h1>
            <div className="buttons">
                <button>See the Latest Works</button>
                <button>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="mouse-image" />
        </div>
        <div className="slidingTextContianer">
          Web Developer
        </div>
        </div>
        <div className="image-container">
          <img src="/hero.png" alt="hero-image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
