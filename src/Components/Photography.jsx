import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bucks from "../assets/lovebuck.png"
import BowSeason from "../assets/pat bow season.png"
import Avon from "../assets/kinakeet gold.png"
import"../Styles/Photography.css"
import Cam from "../assets/wired-outline-61-camera.gif"
import Empty from"../assets/Empty perfection.png"
export default function Photography(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:3000,
    };


    return(
        <div className="photo-container">
            <div className="photo-head">
                <h1>What I enjoy in my freetime</h1>
            <img className="camera" src={Cam} alt="Camera"/>
            </div>
            
            <Slider {...settings}>
            
            <img className="images" src={Bucks}/>
            <img className="images" src={Empty}/>
            <img className="images" src={BowSeason}/>
            <img className="images" src={Avon}/>
            </Slider>
    
        </div>
    )
}
