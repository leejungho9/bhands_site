import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Catarlogue.css";

export default function Catarlogue() {
  return (
    <section className="catarlogue">
      <div className="catarlogue_container">
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
