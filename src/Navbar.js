import React from "react";
import "./Navbar.css"
function Navbar(){
    var x=window.innerWidth;
    console.log(x);
    return<div className="navbar">
    <div className="nav-brand"><p className="p-corr">KingSukh Guest House</p></div>
    {x>768 &&
    <div className="nav-items">
        <a href="#home" className="link"><div className="nav-item"><p className="p-corr">Home</p></div></a>
        <a href="#about" className="link"><div className="nav-item"><p className="p-corr">About</p></div></a>
        <a href="#services" className="link"><div className="nav-item"><p className="p-corr"> Services</p></div></a>
        <a href="#room" className="link"><div className="nav-item"><p className="p-corr">Room</p></div></a>
        <a href="#gallery" className="link"><div className="nav-item"><p className="p-corr">Gallery</p></div></a>
        <a href="#contact" className="link"><div className="nav-item"><p className="p-corr">Contact</p></div></a>
    </div>}
    {x>768 &&
    <div className="nav-button">
        <button type="button" className="btn btn-secondary btn-lg small">Book Now</button>
    </div>}
    {x<=768 &&
        <button type="button" className="btn btn-secondary">Book Now</button>
    }
</div>
}
export default Navbar;