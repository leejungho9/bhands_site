import { useState } from "react";
import "./Diary.css";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Diary() {
  const [isActive, setisActive] = useState("0");
  return (
    <section className="dairy">
      <div className="diary_container">
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
          <div class="searchArea">
            <input type="text" placeholder="Search" className="search"></input>
            <button class="searchBtn">
              <img src="./images/search.png" alt="검색" class="searchImg"></img>
            </button>
          </div>
        </div>

        <div className="inner">
          <div className="box">
            <img
              alt="다이어리"
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
        </div>
        <div className="pageArea">
          <nav className="toolbox">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  7
                </a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-btn" href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
