import React from "react";
import "../Styles/Contact.css"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";



export default function Contact() {

    return (
        <div className="container">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave">
                <div className="footer-text">
                    <h1>Thank you for viewing my Portfolio!</h1>
                    <div className="contact-info">
                        <p> <MdEmail className="icon" />jhskolnick100@gmail.com</p>
                        <p><FaPhone className="icon" /> (757)705-1644</p>
                    </div>

                </div>
            </div>
        </div>
    )
}