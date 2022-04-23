import "./Contact.css";
import Map from "./Map.jsx";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contactInner">
            <h1>DEAR. B*HANDS...</h1>
            <div className="contactArea">
              <div className="title">
                <h2 className="titleH2">제목</h2>
                <input
                  type="text"
                  className="titleInput"
                  placeholder="SUBJECT"
                ></input>
              </div>
              <div className="group">
                <div className="email">
                  <h2 className="emainH2">이메일</h2>
                  <input
                    type="text"
                    className="emailInput"
                    placeholder="EMAIL"
                  ></input>
                </div>
                <div className="name">
                  <h2 className="nameH2">담당자</h2>
                  <input
                    type="text"
                    className="nameInput"
                    placeholder="NAME"
                  ></input>
                </div>
              </div>
              <div className="content">
                <h2 className="cotentH2">내용</h2>
                <textarea
                  className="contentInput"
                  placeholder="INFOMATION"
                ></textarea>
              </div>
              <div className="buttonArea">
                <button className="sendBtn">SEND</button>
              </div>
            </div>
          </div>
          <div className="Contactbar"></div>
          <Map />
        </div>
      </section>
    </>
  );
}
