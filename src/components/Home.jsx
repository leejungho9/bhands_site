import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.sidebar}></div>
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
          <section className={styles.portfolio1}>
            <div className={styles.box}>
              <h2 className={styles.title}>Portfolio</h2>
              <p className={styles.subtitle}>비핸즈의 제작 제품 포토폴리오</p>
              <a
                href="/portfolio"
                className={`${styles.btn} ${styles.aboutBtn}`}
              >
                VIEW MORE
              </a>
            </div>
          </section>
          <section className={styles.portfolio2}>
            <div className={styles.box}>
              <h2 className={styles.title}>Portfolio</h2>
              <p className={styles.subtitle}>비핸즈의 제작 제품 포토폴리오</p>
              <a
                href="/portfolio"
                className={`${styles.btn} ${styles.aboutBtn}`}
              >
                VIEW MORE
              </a>
            </div>
          </section>
          <section className={styles.shop}>
            <div className={styles.box}>
              <h2 className={styles.title}>Shop</h2>
              <p className={styles.subtitle}>비핸즈의 브랜드 샵</p>
              <a href="/shop" className={`${styles.btn} ${styles.aboutBtn}`}>
                VIEW MORE
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}