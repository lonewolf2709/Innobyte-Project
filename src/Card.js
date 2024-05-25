import React from "react";
import "./Card.css";
function Card(props){
    return <div className="card">
        <img className="card-img" src={props.img}></img>
        <div className="card-content">
            <p className="card-head">{props.head}</p>
            <p className="card-con">{props.content}</p>
            <p className="card-price">{props.price}</p>
            <button type="button" className="btn btn-primary room-button">BOOK NOW</button>
        </div>
    </div>
}
export default Card;