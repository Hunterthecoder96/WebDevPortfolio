import React from "react";
import "../Styles/Contact.css"


export default function FooterRight(){
    return(
        <div>
        <div className="email-container">
            <form className="email-form">
                <p>subject</p>
                <input type="text" placeholder="subject"/>
                <p>message</p>
                <textarea placeholder="write your message..."/>
                <button className="email-button">Submit</button>
            </form>
        </div>    
        </div>
    )
}