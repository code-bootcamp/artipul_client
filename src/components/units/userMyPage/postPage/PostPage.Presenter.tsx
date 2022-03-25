import { useEffect } from 'react'
import * as PP from './PostPage.Styles'

declare const window: typeof globalThis & {
  kakao: any
}

export default function PostPagePresenter(props) {
  useEffect(() => {
    // 여기서 카카오맵 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기
    const script = document.createElement('script') // <script></script>태그 생성
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=0dc28a93ac0c6aa27257bb955d9e8fdc&libraries=services&autoload=false'
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            33.450701,
            126.570667
            // 33.450701, 126.570667
          ), // 지도의 중심좌표.
          level: 2 // 지도의 레벨(확대, 축소 정도)
        }

        const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.addressSearch(
          `${
            props.address
              ? props.address
              : props.data?.fetchProfile.address.split('#$%')[1]
          }`,
          // "제주특별자치도 제주시 첨단로 242",
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              )

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords
              })

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                // content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
                content: `<div style="width: 150px; text-align:center;padding:6px 0;"> ${
                  props.address
                    ? props.address
                    : props.data?.fetchProfile.address.split('#$%')[1]
                }</div>`
              })
              infowindow.open(map, marker)
              // console.log(coords);
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords)
            }
          }
        )
      })
    }
  }, [props.address, props.data])

  return (
    <>
      {props.view && (
        <PP.DaumDiv>
          <PP.DaumPostCode onComplete={props.onCompleteDaumPostcode} />
        </PP.DaumDiv>
      )}
      <h1>우편번호 설정</h1>

      <div>
        <div>
          <button onClick={props.onClickDaumPostCode}>우편번호 검색</button>
        </div>
        <div>
          우편번호:
          <input
            readOnly
            defaultValue={
              props.zipcode ||
              props.data?.fetchProfile.address.split('#$%')[0] ||
              ''
            }
          />
        </div>
        <div>
          주소:
          <input
            type="text"
            readOnly
            defaultValue={
              props.address ||
              props.data?.fetchProfile.address.split('#$%')[1] ||
              ''
            }
          />
        </div>
        상세주소:
        <input
          type="text"
          onChange={props.onChangeAddressDetail}
          defaultValue={props.data?.fetchProfile.address.split('#$%')[2]}
        />
        <div>
          <button onClick={props.onClickSubmitProfile1}>배송장소 저장</button>
        </div>
      </div>
      <div id="map" style={{ width: 500, height: 450 }}></div>
    </>
  )
}
