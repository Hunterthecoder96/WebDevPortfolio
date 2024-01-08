import React from "react";
import Bucks from "../assets/lovebuck.png"
import BowSeason from "../assets/pat bow season.png"
import Avon from "../assets/kinakeet gold.png"
import"../Styles/Photography.css"
import Cam from "../assets/wired-outline-61-camera.gif"
export default function Photography(){

    return(
        <div className="photo-container">
            <div className="photo-head">
                <h1>What I enjoy in my freetime</h1>
            <img className="camera" src={Cam}/>
            </div>
            
            <div className="images">
            <img src={Bucks}/>
            <img src={BowSeason}/>
            <img src={Avon}/>
            </div>
        </div>
    )
}
