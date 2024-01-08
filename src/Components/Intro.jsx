import React, { useState, useEffect } from "react";
import "animate.css"

import "../Styles/Intro.css";

export default function Intro() {

  document.documentElement.style.setProperty('--animate-duration', '2s');

  return (
    <div className="intro-container">
      <div className="typing-container">
      <span className="typing animate__animated animate__backInLeft">Hunter Skolnick</span>
      <h2>Full Stack Web Developer</h2>
      </div>
    
      <img className="intro-img" src="https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp" />
   
    </div>
  );
}
