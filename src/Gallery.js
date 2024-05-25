import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
function Gallery(){
    const [activeIndexes, setActiveIndexes] = useState([]);
  const toggleAccordion = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    appendDots: dots => (
        <div
          style={{
            color: "#DDEFE0",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
  };
    return (<div className="g-outer">
    <div className="help">
        <div className="line8"></div>
        <p className="Gallery-head">Gallery</p>
        <div className="line9"></div>
    </div>
    <div className="cara">
      <Slider {...settings}>
      <div className="img-div">
        <img className="g-img" src="./1 (1).jpg"></img>
      </div>
      <div className="img-div">
        <img className="g-img" src="./baranti.webp"></img>
      </div>
      <div className="img-div">
        <img className="g-img" src="./palash.webp"></img>
      </div>
      <div className="img-div">
        <img className="g-img" src="./shutterstock_1511120453_20200113124807.jpg"></img>
      </div>
      <div className="img-div">
        <img className="g-img" src="./indian-forest-landscape-5.jpg"></img>
      </div>
      <div className="img-div">
        <img className="g-img" src="./0.74143600_1567749152_forest_of_jharkhand.jpg"></img>
      </div>
      </Slider>
    </div>
    </div>)
}
export default Gallery;