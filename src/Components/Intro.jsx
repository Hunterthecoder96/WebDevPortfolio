import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import "../Styles/Intro.css";

export default function Intro() {

  return (
    <div className="intro-container">
      <div className="typing-container">
      <span className="typing">Hunter Skolnick</span>
      <h2>Full Stack Web Developer</h2>
      </div>
      <img className="intro-img" src="https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp" />
     
    </div>
  );
}
