import React from "react";
import SurfYurt from "../assets/Surfyurt.png";
import "../Styles/Projects.css";
import shredneckzweb from "../assets/shredneckzweb.png";
import Valocal from "../assets/Vatourist.png";

export default function Projects(){

    return(
        <div>
         <div className="my-work-container">
      <h2 id='title'>Projects</h2>
      <div className="my-work">
        <div className="card card1">
          <h2>Surf Yurt</h2>
          <p>Full Stack project allowing users to share the surfboards they own. Added Comment functionality and 5 star rating system.</p>
          <img  src={SurfYurt}/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='' target='' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://surfyurt.onrender.com/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>Virginia Beach Tourist Guide</h2>
          <p>Built for tourist to find the local resturaunts and attractions</p>
          <img src={Valocal} alt='VbLocal'/>
          <div className="card-btns">
          <button className='github-link'>
            <a  href="https://github.com/Hunterthecoder96/VaBeachLocalFinds" target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href="https://vabeachlocalfinds.netlify.app/" target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>Shrednecks</h2>
          <p>e-commerce, blog, and food recipe website showing my skills with frontend development and data passing using useState</p>
          <img src={shredneckzweb}/>
          <div className="card-btns">
          <button className='github-link'>
            <a  href="https://github.com/Hunterthecoder96/Shrednecks" target='https://github.com/Hunterthecoder96/SkullySauce' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href="https://shrednecks.netlify.app" target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
      </div>
    </div>
        </div>
    )
}