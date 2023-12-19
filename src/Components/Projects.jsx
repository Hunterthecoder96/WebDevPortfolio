import React from "react";
import SkullySauce from "../assets/Skullyscreenshot.png"
import SurfYurt from "../assets/Surfyurt.png"
import "../Styles/Projects.css"
import Valocal from "../assets/Valocalfindsdemo.png"

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
          <h2>Virginia Beach Local Finds</h2>
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
          <h2>Skully Sauce</h2>
          <p>E-commerce Store </p>
          <img src={SkullySauce}/>
          <div className="card-btns">
          <button className='github-link'>
            <a  href="https://github.com/Hunterthecoder96/SkullySauce" target='https://github.com/Hunterthecoder96/SkullySauce' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
      </div>
    </div>
        </div>
    )
}