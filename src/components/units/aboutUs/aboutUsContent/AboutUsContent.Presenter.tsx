import FooterContainer from '../../../commons/layout/footer/Footer.Container'
import * as S from './AboutUsContent.Styles'

export default function AboutUsContentPresenter(props) {
  return (
    <>
      <S.AboutUsContentWrapper>
        <S.AboutUsContentTitle>
          아티풀을 신예 작가들에게 기회를
          <br />
          고객들에게는 새로운 작품을 소개하고자
          <br />
          노력하여 시작된 예술공간 입니다.
        </S.AboutUsContentTitle>
        <S.AboutUsContentContentBox>
          <S.AboutUsContentLeftContent>
            <S.AboutUsContentLeftTextBox
              id="1F"
              onClick={props.onClickFloor}
              floor={props.floor}
            >
              <S.AboutUsContentLeftTitleBox>
                <S.AboutUsContentLeftTitleFloor>
                  1F
                </S.AboutUsContentLeftTitleFloor>
                <S.AboutUsContentLeftTitle>
                  SUPPORT AUCTION
                </S.AboutUsContentLeftTitle>
              </S.AboutUsContentLeftTitleBox>
              <S.AboutUsContentLeftText>
                아티풀은 일반적인 구매시스템이 아닌 신예작가의 예술분야의
                <br />
                성장을 지지하고 유지할 수 있는 환경을 조성하고자 그 가치를
                <br />
                최대한 얻을수 있게끔 지원 목적의 경매시스템을 구성하였습니다.
              </S.AboutUsContentLeftText>
            </S.AboutUsContentLeftTextBox>
            <S.AboutUsContentLeftTextBox
              id="2F"
              onClick={props.onClickFloor}
              floor={props.floor}
            >
              <S.AboutUsContentLeftTitleBox>
                <S.AboutUsContentLeftTitleFloor>
                  2F
                </S.AboutUsContentLeftTitleFloor>
                <S.AboutUsContentLeftTitle>
                  FOR ARTISTS
                </S.AboutUsContentLeftTitle>
              </S.AboutUsContentLeftTitleBox>
              <S.AboutUsContentLeftText>
                경력과 학력 그리고 어떤 형태의 예술이든 아티풀에 참여하실 수
                <br />
                있으며, 작품의 가치 매김 또한 배정하지 않으며 작가와 고객이
                <br />
                결정하게 됩니다.
              </S.AboutUsContentLeftText>
            </S.AboutUsContentLeftTextBox>
            <S.AboutUsContentLeftTextBox
              id="3F"
              onClick={props.onClickFloor}
              floor={props.floor}
            >
              <S.AboutUsContentLeftTitleBox>
                <S.AboutUsContentLeftTitleFloor>
                  3F
                </S.AboutUsContentLeftTitleFloor>
                <S.AboutUsContentLeftTitle>ART PIECE</S.AboutUsContentLeftTitle>
              </S.AboutUsContentLeftTitleBox>
              <S.AboutUsContentLeftText>
                아티풀은 다양한 분야의 신예작가들의 습작 및 예작 등이 등록되어
                <br />
                어디서든 볼 수 없는 희소가치 있는 작품들이 있으며 외부적인
                <br />
                평가가 아닌 고객 분들이 직접 가치를 매길 수 있습니다.
              </S.AboutUsContentLeftText>
            </S.AboutUsContentLeftTextBox>
          </S.AboutUsContentLeftContent>
          <S.AboutUsContentRightContent floor={props.floor} />
        </S.AboutUsContentContentBox>
        <S.AboutUsContentBottomTitle>
          아티풀은 신예 작가들을
          <br />
          위한 전시공간을 제공합니다.
        </S.AboutUsContentBottomTitle>
        <S.AboutUsContentBottomCategory>
          <S.AboutUsContentBottomCategoryButton
            onClick={props.onClickMap}
            id="1"
            map={props.map}
          >
            아티풀 본사
          </S.AboutUsContentBottomCategoryButton>
          <div
            style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: '#aaa'
            }}
          ></div>
          <S.AboutUsContentBottomCategoryButton
            onClick={props.onClickMap}
            id="2"
            map={props.map}
          >
            전시공간
          </S.AboutUsContentBottomCategoryButton>
        </S.AboutUsContentBottomCategory>
        <S.AboutUsContentBottomImage map={props.map} />
        {props.is_artist && (
          <S.AboutUsContentAddArtBox>
            <S.AboutUsContentAddArtText>
              아티풀에서는 다양한 환경과 가치를 갖추고 있는 작가분들을 기다리고
              있습니다.
            </S.AboutUsContentAddArtText>
            <S.AboutUsContentAddArtButton onClick={props.onClickAddArt}>
              작품 등록하기
            </S.AboutUsContentAddArtButton>
          </S.AboutUsContentAddArtBox>
        )}
        <FooterContainer />
      </S.AboutUsContentWrapper>
    </>
  )
}
