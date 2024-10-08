import React from 'react'
import "./skills.scss"

import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"

const Skills = () => {
  return (
    <div className='skills'>
        <div className="wrapper">
            <div className="icons">
                <div className="icon">
                    <FaHtml5/>
                </div>
                <div className="icon">
                    <FaCss3                                                                 />
                </div>
                <div className="icon">
                    <FaJs/>
                </div>
                <div className="icon">
                    <FaReact/>
                </div>
                <div className="icon">
                    <FaNodeJs/>
                </div>
                <div className="icon">
                    <SiTailwindcss/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills