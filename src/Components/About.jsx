import React, { useState, useEffect } from "react";
import "../Styles/About.css";
import Skills from "./Skills";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealSection = () => {
      const backingElement = document.querySelector('.backing');
      const revealSectionPosition = backingElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (revealSectionPosition < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', revealSection);

    return () => {
      window.removeEventListener('scroll', revealSection);
    };
  }, []);

  return (
    <div className="about-container"> 
    <Skills />
      <div className={`backing ${isVisible ? 'is-visible' : ''}`}>
      <h2>About</h2>
    <p>As a Full Stack Web Developer, I bring a unique blend of technical expertise and a creative edge from my background in marketing. 
    I specialize in crafting visually stunning and fully functional web applications, ensuring both the customer's and user's needs are met.</p>
         <br/>
    <p>My journey into the tech industry has been a transformative one, and I haven't looked back. 
     I pride myself on creating applications that not only possess real-world applications but also emulate the user experience of established applications. 
    My dedication to excellence led me to successfully complete V-School's rigorous Mastery full-stack web development program, where I had the privilege of collaborating with industry professionals who emphasized the mastery of each programming language.</p>                 <br/>
 <p>My comprehensive skill set allows me to seamlessly blend the worlds of web development and marketing, resulting in web applications that are not only technically sound but also aesthetically pleasing and user-friendly.
                      This holistic approach enables me to create digital solutions that not only meet technical requirements but also resonate with end users on a deeper level.</p>
        <br/>
    <p>I'm passionate about staying at the forefront of industry trends and emerging technologies, ensuring that I continue to deliver outstanding results in the ever-evolving tech landscape. I'm excited to contribute my expertise to the dynamic tech field, and I look forward to new opportunities for innovation and growth.</p>           
      </div>
   
    </div>
  );
}
          
