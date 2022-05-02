import styles from "./Portfolio.module.css";
export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>ART GOODS</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <a class={styles.btn} href="/shop">
                VIEW MORE
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>CALENDAR</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <div className={styles.bottombox}>
                <a class={styles.btn} href="/calendar">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>DIARY</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <div className={styles.bottombox}>
                <a class={styles.btn} href="/diary">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>PACKAGE</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <div className={styles.bottombox}>
                <a class={styles.btn} href="/package">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>CARD</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <div className={styles.bottombox}>
                <a class={styles.btn} href="/">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.topbox}>
              <div className={styles.text}>
                <h2 className={styles.title}>CATALOGUE</h2>
                <p className={styles.subTitle}>
                  기업, 금융, 갤러리, 아티스트와 협업을 통해 고객에게 일상의
                  소중한 기록을 아름답게 표현합니다.
                </p>
              </div>
            </div>
            <div className={styles.midlebox}></div>
            <div className={styles.bottombox}>
              <div className={styles.bottombox}>
                <a class={styles.btn} href="/">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.text2}>
          <span>ART CREATION GROUP</span>
        </div>
      </div>
    </section>
  );
}
