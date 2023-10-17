import React from "react";
import "../Styles/Nav.css"
import resume from "../assets/Resume-2.pdf"

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
        <button onClick={handleClick}id="resume">Resume</button>
    </div>
    )
}