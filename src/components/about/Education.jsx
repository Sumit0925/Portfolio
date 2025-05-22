import React from "react";
import "./education.scss";

const Education = () => {
  return (
    <div className="Education">
      <div className="wrapper">
        <a target="_blank" href="https://gcetjammu.org.in/index.php">
          <img src="/gcet.jpg" alt="" />
        </a>
        <div className="eduaction-content">
          <div className="time">
            <span>Sep 2020</span>
            <span> - </span>
            <span>Oct 2024</span>
          </div>
          <div className="heading">
            Government College of Engineering and Technology Jammu
          </div>
          <h4>Bachelor of Technology in Computer Science</h4>
          <li>Graduated with CGPA 8.4/10</li>
        </div>
        
      </div>
      <div className="wrapper">
        <a target="_blank" href="https://shikshaniketanjk.in/">
          <img src="/school.jpg" alt="" />
        </a>
        <div className="eduaction-content padding-bottom">
          <div className="time">
            <span>Apr 2018</span>
            <span> - </span>
            <span>May 2020</span>
          </div>
          <div className="heading">
          Shiksha Niketan Higher Secondary School Jammu
          </div>
          <h4>Higher Secondary Education</h4>
        </div>
        
      </div>
    </div>
  );
};

export default Education;
