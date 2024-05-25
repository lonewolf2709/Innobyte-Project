import { useRef,useEffect,useState } from "react";
import React from "react";
import "./Home.css"
import Navbar from "./Navbar";
import About from "./About";
import Room from "./Rooms";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function Home(){
    var x=window.innerWidth;
    return(
        <div>
    <div  className="home">
    <Navbar />
    <div className="content">
        <p className="con-upper">SIMPLE-UNIQUE-FREINDLY</p>
        <p className="con-lower">Make yourself at Home at our Guest House</p>
    </div>
    </div>
    <About />
    <Room />
    {x>768 && 
    <Services />}
    <Gallery />
    <Contact />
    <div className="map-container">
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225665!2d86.85721547515836!3d23.586332378782654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1716501079838!5m2!1sen!2sin" width="5940" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
    </div>
    <Footer />
    </div>)
}
export default Home;