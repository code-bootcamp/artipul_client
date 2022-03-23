import * as S from './Section3.Styles'
import useSrr from '../../../../commons/libraries/useSrr'
export default function Section3Presenter() {
  return (
    <>
      <S.Section3Wrapper>
        <S.Section3Title {...useSrr('up', 3, 0.5)}>
          아티클이 전하는 가치
        </S.Section3Title>
      </S.Section3Wrapper>
    </>
  )
}
