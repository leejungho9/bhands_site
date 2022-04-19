import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      variableWidth: true,
      infinite: true /*반복 */,
      speed: 500 /*속도*/,
      slidesToShow: 12 /*컨텐츠 개수*/,
      slidesToScroll: 12 /*넘어가는 콘텐츠 수*/,
    };
    return (
      <div className="no">
        <Slider {...settings}>
          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>

          <div className="box">
            <img
              alt="캘린더"
              className="calendarImage"
              src="../images/calendar_02.png"
            />
            <div className="info">
              <span>2022</span>
              <span>삼성생명 VIP</span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
