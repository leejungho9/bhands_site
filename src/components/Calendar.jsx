import { useState } from "react";
import "./Calendar.css";
import Slider from "./Slider";
export default function Calendar() {
  const [isActive, setisActive] = useState("0");

  return (
    <section className="calendar">
      <div className="container">
        <div className="topMenu">
          <div className="year">
            <span
              onClick={() => setisActive("1")}
              className={`year_menu ${
                isActive === "1" ? "year_menu active" : ""
              }`}
            >
              ALL
            </span>
            <span
              onClick={() => setisActive("2")}
              className={`year_menu ${
                isActive === "2" ? "year_menu active" : ""
              }`}
            >
              2021
            </span>
            <span
              onClick={() => setisActive("3")}
              className={`year_menu ${
                isActive === "3" ? " year_menu active" : ""
              }`}
            >
              2020
            </span>
            <span
              onClick={() => setisActive("4")}
              className={`year_menu ${
                isActive === "4" ? "year_menu active" : ""
              }`}
            >
              2019
            </span>
            <span
              onClick={() => setisActive("5")}
              className={`year_menu ${
                isActive === "5" ? "year_menu active" : ""
              }`}
            >
              2018
            </span>
            <span
              onClick={() => setisActive("6")}
              className={`year_menu ${
                isActive === "6" ? "year_menu active" : ""
              }`}
            >
              2017
            </span>
          </div>
          <input type="text" placeholder="Search" className="search"></input>
        </div>

        <div className="inner">
          <Slider />
        </div>
      </div>
    </section>
  );
}
