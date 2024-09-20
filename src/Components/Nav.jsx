import React from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs"
import "../Styles/Nav.css"
import resume from "../assets/APPROVED RESUME.pdf"
import Cam from "../assets/wired-outline-61-camera.gif"

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
    <h1 className="logo">HS</h1>
    <div className="link-container">
      
        <a href='#about' className="link" >
          About
        </a> 
      
        <a href='#projects'className="link" >
        Projects
        </a>
        <a href="#contact" className="link"> Contact</a>
        </div>
        <div className="resources">
        <button onClick={handleClick} className="resume resource">Resume</button>
        <a href="https://www.linkedin.com/in/hunter-skolnick-62530b138/">
        <BsLinkedin className="linkedin resource"/>
        </a>
        <a href="https://github.com/Hunterthecoder96">
        <BsGithub className="github resource" />
        </a>
        </div>
    </div>
    )
}