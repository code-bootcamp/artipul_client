import { useEffect } from 'react'
import AuthButtons from '../../../commons/buttons/authButtons'
import CreateUserSmallTitle from '../../../commons/div/createUser'
import CreateUser2 from '../../../commons/inputs/createUser2'
import * as PP from './PostPage.Styles'
import { IPostProps } from './PostPage.Types'

declare const window: typeof globalThis & {
  kakao: any
}

export default function PostPagePresenter(props: IPostProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?appkey=0dc28a93ac0c6aa27257bb955d9e8fdc&libraries=services&autoload=false'
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 2
        }

        const map = new window.kakao.maps.Map(container, options)
        const geocoder = new window.kakao.maps.services.Geocoder()
        geocoder.addressSearch(
          `${
            props.address
              ? props.address
              : props.data?.fetchProfile.address?.split('#$%')[1]
          }`,

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
                content: `<div style="width: 150px; text-align:center;padding:6px 0;"> ${
                  props.address
                    ? props.address
                    : props.data?.fetchProfile.address?.split('#$%')[1]
                }</div>`
              })
              infowindow.open(map, marker)
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
      <PP.Wrapper>
        <PP.Header>배송지 설정</PP.Header>
        <PP.SmallHeadWrapper>
          <PP.SmallHead>
            {props.data?.fetchProfile.user.nickname} 님의 기본배송지
          </PP.SmallHead>
        </PP.SmallHeadWrapper>
        <div>
          <CreateUserSmallTitle title="수령인" />
          <PP.InputButtonBox>
            <PP.InputBox>
              <CreateUser2
                defaultValue={props.data?.fetchProfile.user.name}
                readonly={true}
              />
            </PP.InputBox>
          </PP.InputButtonBox>
        </div>
        <div>
          <CreateUserSmallTitle title="배송지" />
          <PP.InputButtonBox>
            <PP.InputBox>
              <CreateUser2 readonly={true} defaultValue={props.zipcode} />
            </PP.InputBox>
            <AuthButtons
              onClick={props.onClickDaumPostCode}
              title="우편번호검색"
            />
          </PP.InputButtonBox>
        </div>
        <div>
          <PP.InputButtonBox2>
            <PP.InputBox>
              <CreateUser2 defaultValue={props.address} readonly={true} />
            </PP.InputBox>
          </PP.InputButtonBox2>
        </div>
        <div>
          <CreateUserSmallTitle title="상세주소" />
          <PP.InputButtonBox2>
            <PP.InputBox>
              <CreateUser2
                defaultValue={props.addressDetail}
                type="text"
                onChange={props.onChangeAddressDetail}
              />
            </PP.InputBox>
          </PP.InputButtonBox2>
        </div>

        <div
          id="map"
          style={{ width: '31rem', height: '28rem', marginTop: '32px' }}
        ></div>

        <PP.WrapperBottom>
          <PP.SaveButton onClick={props.onClickSubmitProfile1}>
            저장하기
          </PP.SaveButton>
        </PP.WrapperBottom>
      </PP.Wrapper>
    </>
  )
}
