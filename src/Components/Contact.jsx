import React from "react";
import "../Styles/Contact.css"



export default function Contact(){

    return(
       <section id="contactPage">
        <h1 id="contactPageTitle">Contact</h1>
        <span>Please fill out the form below to discuss any work opportunities</span>
        <form className="contact-form"
        target="_blank"
        action="https://formsubmit.co/jhskolnick100@gmail.com"
        method="POST"
        >
            <input type="text" className="yourname" placeholder="Your Name"/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea className="msg" name="message"  rows="5" placeholder="Message"></textarea>
            <button type="submit" value="Send" className="SubmitBtn">Submit</button>
           
         
        </form>
        </section>
    )
}