import React from "react";
import {BsLinkedin, BsGithub} from "react-icons/bs"
import "../Styles/Contact.css"
import FooterLeft from "./Footer-left";
import FooterRight from "./Footer-right";


export default function Contact(){

    return(
        <div className="contact-container">
            <FooterLeft />
            <FooterRight />
        </div>
    )
}