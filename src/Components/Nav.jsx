import React from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs"
import "../Styles/Nav.css"
import resume from "../assets/VSchool resume 2.pdf"

export default function Nav(){

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }; 

    return(
    <div className="nav-container"> 
        <a href='#about' className="link" >
          About
        </a>
        <a href="#skills" className="link" >
            Skills
        </a>
        <a href='#projects'className="link" >
        Projects
        </a>
        <a href="#contact"> Contact</a>
        <button onClick={handleClick} className="resume">Resume</button>
        <a href="https://www.linkedin.com/in/hunter-skolnick-62530b138/">
        <BsLinkedin className="linkedin"/>
        </a>
        <a href="https://github.com/Hunterthecoder96">
        <BsGithub className="github" />
        </a>
    </div>
    )
}