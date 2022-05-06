import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const sliderActive = this.props.value;
    const settings = {
      dots: true,
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
              <img src="./images/slider-image.jpg" alt="slider-Img" />
            </div>
            <div>
              <img src="./images/slider-image.jpg" alt="slider-Img" />
            </div>
            <div>
              <img src="./images/slider-image.jpg" alt="slider-Img" />
            </div>
            <div>
              <img src="./images/slider-image.jpg" alt="slider-Img" />
            </div>
            <div>
              <img src="./images/slider-image.jpg" alt="slider-Img" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
