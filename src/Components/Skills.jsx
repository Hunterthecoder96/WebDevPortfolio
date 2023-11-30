import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitSquare,} from 'react-icons/fa';
import{DiMongodb} from 'react-icons/di'
import {SiPostman, SiExpress, SiVite, SiJson, SiNodemon, SiJquery}from 'react-icons/si'
import "../Styles/Skills.css"

export default function Skills() {
  return (
    <div className="skills">
    <div className="skills-container">
      <h2 id='title'>Tech Skills</h2>
     
      <div className="skills-list">
        <div className="skill-item" id='html5'>
        <FaHtml5/>
        <p>HTML5</p>
        </div>
        <div className="skill-item" id='css3'>
        <FaCss3Alt/>
          <p>CSS3</p>
        </div>
        <div className="skill-item" id='javaScript'>
        <FaJsSquare/>
          <p>JavaScript</p>
        </div>
        <div className="skill-item" id='express'>
          <SiExpress/>
          <p>Express.js</p>
        </div>
        <div className="skill-item" id='json'>
          <SiJson/>
          <p>JSON</p>
        </div>
        <div className="skill-item" id='nodemon'>
       <SiNodemon/>
          <p>Nodemon</p>
        </div>
        <div className="skill-item" id='git'>
         <FaGitSquare />
          <p>Git</p>
        </div>
        <div className="skill-item" id='postman'>
          <SiPostman/>
          <p>Postman</p>
        </div>
        <div className="skill-item" id='react'>
        <FaReact />
          <p>React.js</p>
        </div>
        <div className="skill-item" id='vite'>
          <SiVite/>
          <p>Vite</p>
        </div>
        <div className="skill-item" id='mongo'>
        <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="skill-item" id='jquery'>
        <SiJquery />
          <p>JQuery</p>
        </div>
        </div>

      </div>
      
      <div className='skill-right'>
      <h1 >Soft Skills</h1>
      <p>- Problem Solving</p>
      <p>- Collaborative Problem Solving</p>
      <p>- Patience</p>
      <p>- Creative</p>
      <p>- High Level of Accuracy</p>
      <p>- Communication</p>
      <p>- Empathy</p>
      <p>- Open-Mindedness</p>
      <p>- Adaptability</p>
      <p>- Critical Thinking</p>
      <p>- Accountability</p>
      <p>- Humbleness</p>
      <p>- Self-Confidence</p>
      <p>- Time Management</p>
      <p>- People Management</p>
      <p>- Project Management</p>
      </div>
      </div>
  );
};