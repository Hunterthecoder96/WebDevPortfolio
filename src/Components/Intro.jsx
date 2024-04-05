import React, { useState, useEffect } from "react";
import "animate.css"
import Headshot from "../assets/headshot.png"
import "../Styles/Intro.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {
  useEffect(() => {
    AOS.init();
  }, []);

  document.documentElement.style.setProperty('--animate-duration', '2s');

  return (
    <div className="intro-container">
      <div className="typing-container">
      <span className="typing " data-aos="fade-left">Hunter Skolnick</span>
      <h2 data-aos="fade-right">Full Stack Web Developer</h2>
      </div>
      <img className="intro-img" src={Headshot} />
    </div>
  );
}
