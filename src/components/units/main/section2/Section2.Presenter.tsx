import * as S from './Section2.Styles'
import useSrr from '../../../../commons/libraries/useSrr'
export default function Section2Presenter() {
  return (
    <>
      <S.Section2Wrapper>
        <S.Section2TopBox {...useSrr('up', 3, 0.5)}>
          <S.Section2TitleBox>
            <S.Section2Title>미래의 작가를 꿈꾸며</S.Section2Title> <br />
            <S.Section2Title>가치있는 작품을 찾습니다</S.Section2Title>
          </S.Section2TitleBox>
          <S.Section2SubTitle>
            마우스를 스크롤하여 아티플의 방향과 가치를 확인하실 수 있습니다
          </S.Section2SubTitle>
        </S.Section2TopBox>
        <S.Section2ImageBox>
          <S.Section2Image1 />
          <S.Section2Image2 />
          <S.Section2Image3 />
          <S.Section2Image4 />
          <S.Section2Image5 />
        </S.Section2ImageBox>
      </S.Section2Wrapper>
    </>
  )
}
