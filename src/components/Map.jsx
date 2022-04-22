import React, { useEffect } from "react";

const { kakao } = window;
const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    var map = new kakao.maps.Map(container, options);
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다.
    geocoder.addressSearch("경기 파주시 회동길 219", function (result, status) {
      // 정상적으로 검색이 완료됐으면 실행
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다.
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다.
        map.setCenter(coords, marker);
      }
    });
  });

  return (
    <div>
      <div id="map" style={{ height: "400px" }}></div>
    </div>
  );
};

export default Location;
