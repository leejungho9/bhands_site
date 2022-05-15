import { useEffect, useState } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [workMenu, setworkMenu] = useState(false);
  const showworkMenu = () => setworkMenu(!workMenu);

  const pathName = useLocation().pathname;

  useEffect(() => {
    if (!sidebar) {
      setworkMenu(false);
    }
    if (
      pathName !== "/" &&
      pathName !== "/about" &&
      pathName !== "/contact" &&
      pathName !== "/artist"
    ) {
      setworkMenu(true);
    }
  }, [sidebar, pathName]);

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
            <div onClick={showSidebar}>
              <img src="/images/x.png" alt="close" className="menuCloseBtn" />
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
                  <a
                    href="/artgoods"
                    className={
                      pathName === "/artgoods" ? "detailMenu active" : ""
                    }
                  >
                    ART GOODS
                  </a>
                </li>
                <li>
                  <a
                    href="/calendar"
                    className={
                      pathName === "/calendar" ? "detailMenu active" : ""
                    }
                  >
                    CALENDAR
                  </a>
                </li>
                <li>
                  <a
                    href="/diary"
                    className={pathName === "/diary" ? "detailMenu active" : ""}
                  >
                    DIARY
                  </a>
                </li>
                <li>
                  <a
                    href="/package"
                    className={
                      pathName === "/package" ? "detailMenu active" : ""
                    }
                  >
                    PACKAGE
                  </a>
                </li>
                <li>
                  <a
                    href="/card"
                    className={pathName === "/card" ? "detailMenu active" : ""}
                  >
                    CARD
                  </a>
                </li>
                <li>
                  <a
                    href="/catalogue"
                    className={
                      pathName === "/catalogue" ? "detailMenu active" : ""
                    }
                  >
                    CATALOGUE
                  </a>
                </li>
              </ul>
              <h2>
                <a href="/contact"> CONTACT</a>
              </h2>
              <h2>
                <a href="/artist"> ARTIST</a>
              </h2>
            </div>
          </div>
        </div>
        <hr />
      </header>
    </>
  );
}
