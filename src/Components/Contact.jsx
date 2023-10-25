import React from "react";
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