import React from "react";
import "./Services.css";
function Services(){
    return(
    <div className="outer-service">
    <img className="ser-img" src="https://wallpapercave.com/wp/wp9425831.jpg"></img>
    <div className="service-content">
        <div className="help3">
        <p className="first">SERVICES</p>
        <div className="line5"></div>
        </div>
        <div className="points">
        <p className="second">Strive Only For The Best</p>
        <p className="service-item"><div className="icon-div"><i class="ri-shield-star-line"></i></div>High Class Security</p>
        <p className="service-item"><div className="icon-div"><i class="ri-24-hours-line"></i></div>24 Hours Room Service</p>
        <p className="service-item"><div className="icon-div"><i class="ri-restaurant-2-fill"></i></div>Restaurant</p>
        <p className="service-item"><div className="icon-div"><i class="ri-map-2-line"></i></div>Tourist Guide Support</p>
        </div>
    </div>
    </div>)
}
export default Services;