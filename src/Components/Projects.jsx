import React from "react";
import SkullySauce from "../assets/Skullyscreenshot.png"
import Craps from "../assets/craps.png"
import "../Styles/Projects.css"
import Valocal from "../assets/Valocalfindsdemo.png"

export default function Projects(){

    return(
        <div>
         <div className="my-work-container">
      <h2 id='title'>Projects</h2>
      <div className="my-work">
        <div className="card card1">
          <h2>Roll Dice</h2>
          <p>Fun game that allows you to roll two six sided dice, great for resolving debates.</p>
          <img  src={Craps}/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='' target='' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='' target='blank' id='card-btn'>DEMO</a>
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