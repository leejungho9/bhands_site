import React, { Component, useCallback } from "react";
import Slider from "react-slick";
import { useState } from "react";

import "./slick.css";
import "./slick-theme.css";
export default function SimpleSlider(props) {
  const sliderActive = props.value;
  const [isSlider, setiseSlider] = useState("0");

  console.log("sliderActive  " + sliderActive);
  console.log("isSlider  " + isSlider);
  const settings = {
    slide: "img",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={sliderActive ? "sliderArea-hidden" : "sliderArea"}>
      <div className="imagecontainer">
        <Slider {...settings}>
          <div className="imageArea">
            <img
              src="./images/slider-image.jpg"
              alt="slider-Img"
              className="slideImg"
            />
          </div>
          <div className="imageArea">
            <img
              src="./images/calendar_03.png"
              alt="slider-Img"
              className="slideImg"
            />
          </div>
          <div className="imageArea">
            <img
              src="./images/calendar_04.png"
              alt="slider-Img"
              className="slideImg"
            />
          </div>
          <div className="imageArea">
            <img
              src="./images/slider-image.jpg"
              alt="slider-Img"
              className="slideImg"
            />
          </div>
          <div className="imageArea">
            <img
              src="./images/slider-image.jpg"
              alt="slider-Img"
              className="slideImg"
            />
          </div>
        </Slider>
      </div>
      <p className="imageYear">2022</p>
      <p className="imageName">삼성화재</p>
    </div>
  );
}
