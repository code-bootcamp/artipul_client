import * as S from './SelectWork.styles'

export default function SelectWorkUI() {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.Subject>리뷰 속 작품</S.Subject>
        <S.WorkWrapper>
          <S.Art src="/fox.png" />
        </S.WorkWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Category>회화</S.Category>
        <S.Title>무제2</S.Title>
        <S.ArtistInfo>
          <S.Artist>작가</S.Artist>
          <S.ArtistName>이예은</S.ArtistName>
        </S.ArtistInfo>
        <S.ArtContent>
          도판은 특별한 요구가 없을 때는 작품의 사진을 해당되는 곳에 삽입한다.
          도판에는 번호를도판은 특별한 요구가 없을 때는 작품의 사진을
          해당ㅇㄹㄴㅇㄹㄴㄹㄴㅇㄹㄴㅇㄹ ...
        </S.ArtContent>
      </S.RightWrapper>
    </S.Wrapper>
  )
}
