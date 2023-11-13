import React from "react";
import "../Styles/Contact.css"
import FooterLeft from "./Footer-left";
import FooterRight from "./Footer-right";


export default function Contact(){

    return(
       <section id="contactPage">
        <h1 id="contactPageTitle">Contact</h1>
        <span>Please fill out the form below to discuss any work opportunities</span>
        <form className="contact-form">
            <input type="text" className="yourname" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea className="msg" name="message"  rows="5" placeholder="Message"></textarea>
            <button type="submit" value="Send" className="SubmitBtn">Submit</button>
         
        </form>
        </section>
    )
}