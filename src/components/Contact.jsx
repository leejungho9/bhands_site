import styles from "./Contact.module.css";
import Map from "./Map.jsx";

export default function Contact() {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactInner}>
            <h1>DEAR. B*HANDS...</h1>
            <div className={styles.contactArea}>
              <div className={styles.title}>
                <h2 className={styles.titleH2}> 제목</h2>
                <input
                  type="text"
                  className={styles.titleInput}
                  placeholder="SUBJECT"
                ></input>
              </div>
              <div className={styles.group}>
                <div className={styles.email}>
                  <h2 className={styles.emainH2}>이메일</h2>
                  <input
                    type="text"
                    className={styles.emailInput}
                    placeholder="EMAIL"
                  ></input>
                </div>
                <div className={styles.name}>
                  <h2 className={styles.nameH2}>담당자</h2>
                  <input
                    type="text"
                    className={styles.nameInput}
                    placeholder="NAME"
                  ></input>
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.cotentH2}>내용</h2>
                <textarea
                  className={styles.contentInput}
                  placeholder="INFOMATION"
                ></textarea>
              </div>
              <div className={styles.buttonArea}>
                <button className={styles.sendBtn}>SEND</button>
              </div>
            </div>
          </div>
          <div className={styles.Contactbar}></div>

          <div className={styles.mapArea}>
            <Map />
          </div>
        </div>
      </section>
    </>
  );
}
