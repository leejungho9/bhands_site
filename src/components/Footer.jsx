import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.inner}>
        <div className={styles.menu1}>
          <div className={styles.info1}>
            <img
              className={styles.footerlogo}
              src="./images/footer logo.png"
              alt="로고"
            />
            <p>Bhands, All rights reserved. 대표자 : 박소연</p>
          </div>
          <div className={styles.info2}>
            <p>Business Code : 141-81-34625</p>
            <p>Address : 경기도 파주시 광인사길 9-7</p>
            <p>Contace Code : 02 2279 9211(P), 02 796 7671(F)</p>
          </div>
        </div>

        <div className={styles.menu2}>
          <a href="/" className={styles.menua}>
            회사소개
          </a>
          <a href="/" className={styles.menua}>
            개인정보취급방침
          </a>
          <a href="/" className={styles.menua}>
            제휴문의
          </a>
          <a href="/">
            <img
              className={styles.instalogo}
              src="./images/footer_insta.png"
              alt="로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
