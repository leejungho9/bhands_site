import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.mainMenu}>
        <div className={styles.container}>
          <section className={styles.about}>
            <div className={styles.box}>
              <h2 className={styles.title}>About</h2>
              <p className={styles.subtitle}>비핸즈 연혁, 시설, 소개</p>
              <a href="/about" className={`${styles.btn} ${styles.aboutBtn}`}>
                VIEW MORE
              </a>
            </div>
          </section>
          <section className={styles.portfolio}>
            <div className={styles.box}>
              <h2 className={styles.title}>Portfolio</h2>
              <p className={styles.subtitle}>비핸즈의 제작 제품 포트폴리오</p>
              <a
                href="/portfolio"
                className={`${styles.btn} ${styles.aboutBtn}`}
              >
                VIEW MORE
              </a>
            </div>
          </section>
          <section className={styles.contact}>
            <div className={styles.box}>
              <h2 className={styles.title}>Contact</h2>
              <p className={styles.subtitle}>비핸즈에 대한 문의 및 연락</p>
              <a href="/contact" className={`${styles.btn} ${styles.aboutBtn}`}>
                VIEW MORE
              </a>
            </div>
          </section>
          <section className={styles.artist}>
            <div className={styles.box}>
              <h2 className={styles.title}>Artist</h2>
              <p className={styles.subtitle}>비핸즈와 작업한 아티스트</p>
              <a href="/artist" className={`${styles.btn} ${styles.aboutBtn}`}>
                VIEW MORE
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
