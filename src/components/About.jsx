import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <img
            src="./images/about_image1.jpg"
            alt="about배너"
            className={styles.aboutImg}
          />
          <div className={styles.aboutbhands}>
            <h1 className={styles.aboutbhandsH1}>ART CREATION GROUP </h1>
            <p>아름다운 생활문화를 창조하는 기업</p>
            <p>
              (주)비핸즈는 1970년 4월1일 바른손카드라는 이름으로 창립 이래,
              50여년 간 Design과 Print에 있어 장인적 철학과 기술을 바탕으로
              수많은 '시작'과 '최고'를 만들어온 기업입니다. 비핸즈는
              B(바른,Beauti-ful,Best)와 Hand(손,창조성)가 하나된 이름으로 '바른
              생각으로 아름다운 제품을 만들겠다'는 기업정신을 담고 있습니다.
              바른손의 50년 경험과 인쇄 특허기술을 바탕으로 아트 관련 다양한
              사업을 하고 있으며, 캘린더,카드,다이어리,패키지 등 기업 홍보물의
              전략적 디자인과 제작까지 토탈 솔루션을 제공하고 있습니다.
            </p>
          </div>
          <div className={styles.historyArea}>
            <div className={styles.history}>
              <div className={styles.inner}>
                <h3>1970 - 1990</h3>
                <ol className={styles.section1}>
                  <li>
                    미국 Hallmark 외 <br />
                    일본,스위스업체 기술제휴
                  </li>
                </ol>
              </div>

              <div className={styles.inner}>
                <h3>1990 - 2000</h3>
                <ol className={styles.section2}>
                  <li>
                    E-card 사업 개시 (www.barunson.com)
                    <br />
                    전자상거래 사업시작
                  </li>
                </ol>
              </div>

              <div className={styles.inner}>
                <h3>2000 - 2010</h3>
                <ol className={styles.section3}>
                  <li>
                    R&amp;D 디자인연구소 설립
                    <br /> 파주출판도시내 신사옥 준공
                    <br /> 파주,상해 편화공방 설립
                    <br /> 판화 실크인쇄기술 특허
                    <br /> 판화, 고급캘린더 사업 시작
                    <br /> 업계 최초 실크 인쇄 기법 및 레이저 커팅 기법 도입
                  </li>
                </ol>
              </div>

              <div className={styles.inner}>
                <h3>2010 - 현재</h3>
                <ol className={styles.section4}>
                  <li>
                    대한민국 디자인대상 디자인 경영부문 최우수상
                    <br /> 법인분리 (주)비핸즈 설립
                    <br /> 예술,문화,사업참여 등 사업 다각화
                    <br /> 온라인 그림 쇼핑몰 그림닷컴 인수
                    <br /> 에디션아트 전문 브랜드 아트앤에디션 런칭 <br />
                    외4건
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.aboutButtom}>
            <img
              src="./images/logo.png"
              alt="로고"
              className={styles.logo}
            ></img>
            <h1>아름다운 생활문화를 창조하는 기업</h1>
            <img
              src="./images/about_image_2.png"
              alt="기업로고"
              className={styles.logo2}
            />
          </div>
        </div>
      </section>
    </>
  );
}
