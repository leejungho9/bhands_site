import styles from "./Shop.module.css";

export default function Shop() {
  return (
    <>
      <div className={styles.mainMenu}>
        <div className={styles.container}>
          <section className={styles.menubox}>
            <div className={styles.box}>
              <h2 className={styles.title}>그림닷컴</h2>
              <p className={styles.subtitle}>
                미국, 영국 등 10여개의 국가에서 수입된 아트프린트뿐 아니라
                국내외 유명 아티스트의 판화, 한국 전통민화에 이르기까지
                3만여점의 그림을 감상하고 구입할 수 있는 온라인 그림
                쇼핑몰입니다.
              </p>
              <a
                href="https://gurim.com/"
                className={`${styles.btn} ${styles.moreBtn}`}
              >
                VIEW MORE
              </a>
            </div>
            <div className={styles.box2}>
              <div className={styles.image1}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="그림닷컴"
                />
              </div>
              <div className={styles.image2}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="그림닷컴"
                />
              </div>
            </div>
          </section>

          <section className={styles.menubox}>
            <div className={styles.box}>
              <h2 className={styles.title}>아트앤에디션</h2>
              <p className={styles.subtitle}>
                아트앤에디션은 국내외에서 활발하게 활동하고 있는 작가들의 그림을
                합리적인 가격에 구입 할 수 있는 에디션아트 전문 온라인
                갤러리입니다.
              </p>
              <a
                href="https://artnedition.com/"
                className={`${styles.btn} ${styles.moreBtn}`}
              >
                VIEW MORE
              </a>
            </div>
            <div className={styles.box2}>
              <div className={styles.image1}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="아트앤에디션"
                />
              </div>
              <div className={styles.image2}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="아트앤에디션"
                />
              </div>
            </div>
          </section>

          <section className={styles.menubox}>
            <div className={styles.box}>
              <h2 className={styles.title}>바른손그리팅스</h2>
              <p className={styles.subtitle}>
                미국, 영국 등 10여개의 국가에서 수입된 아트프린트뿐 아니라
                국내외 유명 아티스트의 판화, 한국 전통민화에 이르기까지
                3만여점의 그림을 감상하고 구입할 수 있는 온라인 그림
                쇼핑몰입니다.
              </p>
              <a href="/#" className={`${styles.btn} ${styles.moreBtn}`}>
                VIEW MORE
              </a>
            </div>
            <div className={styles.box2}>
              <div className={styles.image1}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="바른손그리팅스"
                />
              </div>
              <div className={styles.image2}>
                <img
                  className={styles.img1}
                  src="./images/shop_image.jpg"
                  alt="바른손그리팅스"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
