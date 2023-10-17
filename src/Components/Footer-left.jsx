import React from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs"
import "../Styles/Contact.css"

export default function FooterLeft(){

    return(
        <div className="social-container">
            <div className="linked">
                <p>linkedin</p>
                <BsLinkedin/>
            </div>
            <div className="github">
                <p>Github</p>
                <BsGithub/>
            </div>
        </div>
    )
}