import React from "react";
import "../Styles/Projects.css"

export default function Projects(){

    return(
        <div>
         <div className="my-work-container">
      <h2 id='title'>Projects</h2>
      <div className="my-work">
        <div className="card card1">
          <h2>Roll Dice</h2>
          <p>Fun game that allows you to roll two six sided dice, great for resolving debates.</p>
          <img  alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a href='https://github.com/Mattrob10/CMA-REACT' target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a href='https://magical-malabi-9c3700.netlify.app/' target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>Surf Yurt</h2>
          <p>MERN Stack Blog</p>
          <img alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a  target='blank' id='card-btn'>GitHub</a>
          </button>
          <button className='live-project'>
            <a target='blank' id='card-btn'>DEMO</a>
          </button>
        </div>
        </div>
        <div className="card card1">
          <h2>Skully Sauce</h2>
          <p>E-commerce Store </p>
          <img alt=''/>
          <div className="card-btns">
          <button className='github-link'>
            <a  target='blank' id='card-btn'>GitHub</a>
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