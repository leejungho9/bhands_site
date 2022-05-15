import "./grid.css";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="about_container">
          <div>
            <div className="aboutImg"></div>
          </div>
          <div className="aboutbhands">
            <h1 className="aboutbhandsTitle">ART CREATION GROUP </h1>
            <p className="aboutSubTitle">아름다운 생활문화를 창조하는 기업</p>
            <p className="content">
              (주)비핸즈는 1970년 4월1일 바른손카드라는 이름으로 창립 이래,
              50여년 간 Design과 Print에 있어 장인적 철학과 기술을 바탕으로
              수많은 '시작'과 '최고'를 만들어 온 기업입니다.
              <br /> 비핸즈는 B(바른,Beauti-ful,Best)와 Hand(손,창조성)가 하나된
              이름으로 '바른 생각으로 아름다운 제품을 만들겠다'는 기업정신을
              담고 있습니다.
              <br /> 바른손의 50년 경험과 인쇄 특허기술을 바탕으로 아트 관련
              다양한 사업을 하고 있으며
              <br /> 캘린더,카드,다이어리,패키지 등 기업 홍보물의 전략적
              디자인과 제작까지 토탈 솔루션을 제공하고 있습니다.
            </p>
          </div>
          <div className="historyArea">
            <div className="historyTitle">
              <h1>HISTORY</h1>
            </div>
            <div class="timeline">
              <div class="boot_container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="timeline-container">
                      <div class="timeline-continue">
                        <div class="row timeline-right">
                          <div class="col-md-6">
                            <p class="timeline-date">1970 - 1990</p>
                          </div>
                          <div class="col-md-6">
                            <p class="timeline-text timeline-text1">
                              미국 Hallmark외 일본,스위스 업체 기술제휴
                            </p>
                          </div>
                        </div>

                        <div class="row timeline-left">
                          <div class="col-md-6 d-md-none d-block">
                            <p class="timeline-date">1990 - 2000</p>
                          </div>
                          <div class="col-md-6">
                            <div class="timeline-text timeline-text2">
                              <p>E-card 사업 개시(www.barunson.com)</p>
                              <p>전자상거래사업시작</p>
                            </div>
                          </div>
                          <div class="col-md-6 d-md-block d-none">
                            <p class="timeline-date">1990 - 2000</p>
                          </div>
                        </div>

                        <div class="row timeline-right">
                          <div class="col-md-6">
                            <p class="timeline-date">2000 - 2010</p>
                          </div>
                          <div class="col-md-6">
                            <div class=" timeline-text timeline-text3">
                              <p>R&D 디자인연구소 설립</p>
                              <p>파주풀판도시 내 신사옥 준공</p>
                              <p>파주,상해 판화공방 설립,</p>
                              <p>판화 실크인쇄기술 특허</p>
                              <p>판화, 고급캘린더 사업 시작,</p>
                              <p>
                                업계 최초 실크 인쇄 기법 및 레이저 커팅 기법
                                도입
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="row timeline-left">
                          <div class="col-md-6">
                            <div class=" timeline-text timeline-text4">
                              <p>
                                대한민국 디자인대상 디자인 경영부문 최우수상
                              </p>
                              <p>법인분리 (주)비핸즈 설립</p>
                              <p>예술,문화,사회참여 등 사업 다각화</p>
                              <p>온라인 그림 쇼핑몰 그림닷컴(gurim.com)인수</p>
                              <p>
                                에디션아트 전문 브랜드 아트에디션
                                (artnedition.com)런칭
                              </p>
                              <p>Astrid Awards 캘린더 부문동상 수상</p>
                              <p>일본 전국 캘린더전 62-64회 연속 특별상 수상</p>
                              <p>
                                제 12회 대한민국디자인대상 디자인경영 부문
                                최우수상 수상
                              </p>
                              <p>Astrid Award 캘린더부문 은상</p>
                            </div>
                          </div>
                          <div class="col-md-6 d-md-block d-none">
                            <p class="timeline-date">2010 - 현재</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutButtom">
            <div className="licenseTitle">
              <h1>LICENSE</h1>
            </div>
            <p>아름다운 생활문화를 창조하는 기업</p>
            <img
              src="./images/about_image_2.png"
              alt="기업로고"
              className="licenseLogo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
