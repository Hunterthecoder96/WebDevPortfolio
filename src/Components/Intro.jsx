import React, { useState, useEffect } from "react";
import "animate.css"
import Headshot from "../assets/headshot.png"
import "../Styles/Intro.css";

export default function Intro() {

  document.documentElement.style.setProperty('--animate-duration', '2s');

  return (
    <div className="intro-container">
      <div className="typing-container">
      <span className="typing animate__animated animate__backInLeft">Hunter Skolnick</span>
      <h2>Full Stack Web Developer</h2>
      </div>
      <img className="intro-img" src={Headshot} />
    </div>
  );
}
