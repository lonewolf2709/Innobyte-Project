import React from "react";
import "./About.css"
function About(){
    return <div className="next-section" id="about">
        <div className="help">
        <div className="line1"></div>
        <h1 className="next-head">The Story</h1>
        <div className="line2"></div>
        </div>
        <div className="content-about">
        <div className="img-div"><img className="hotel-image" src="./out.jpg"></img></div>
        <div className="cont-text">
            <p className="con-heading">The Best Holidays Start Here!</p>
            <p className="con-txt1">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
            <p className="con-txt2">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p className="number">Contact us: +91 9007062180</p>
        </div>
        </div>
    </div>
}
export default About;