import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [workMenu, setworkMenu] = useState(false);
  const showworkMenu = () => setworkMenu(!workMenu);
  return (
    <>
      <div className="bar"></div>
      <header>
        <div className="inner">
          <a href="/" className="logo">
            <img src="/images/logo.png" alt="로고" />
          </a>
          <div className="ham">
            <img
              onClick={showSidebar}
              src="/images/ham.png"
              className="hamBtn"
              alt="햄버거버튼"
            ></img>
          </div>

          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="bg" onClick={showSidebar}></div>
            <div className="close" onClick={showSidebar}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
            <div className="categoryList">
              <h2>
                <a href="/"> HOME</a>
              </h2>
              <h2>
                <a href="/about"> ABOUT</a>
              </h2>
              <h2
                className={workMenu ? "work-menu active" : "work-menu"}
                onClick={showworkMenu}
              >
                WORKS
              </h2>
              <ul className={workMenu ? "work-menu active" : "work-menu"}>
                <li>
                  <a href="/artgoods">ART GOODS</a>
                </li>
                <li>
                  <a href="calendar">CALENDAR</a>
                </li>
                <li>
                  <a href="diary">DIARY</a>
                </li>
                <li>
                  <a href="package">PACKAGE</a>
                </li>
                <li>
                  <a href="card">CARD</a>
                </li>
                <li>
                  <a href="carlogue">CARLOGUE</a>
                </li>
              </ul>
              <h2>
                <a href="contact"> CONTACT</a>
              </h2>
            </div>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
}
