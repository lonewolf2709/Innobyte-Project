import React from "react";
import "./Rooms.css";
import Card from "./Card";
function Room(){
    return <div className="room-main">
        <div className="help2">
           <div className="line3"></div>
           <h1 className="next-room-head">Rooms</h1>
           <div className="line4"></div>
        </div>
        <div className="room-card">
        <Card  img="./small.jpg" head="Cozy Haven Room" content="Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation." price="Starting from Rs. 1000/night" />
        <Card img="./large.jpg" head="Spacious Serenity Suite" content="Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance." price="Starting from Rs. 1500/night" />
        </div>
    </div>
}
export default Room;