import * as S from './SelectWork.Styles'

export default function SelectWorkUI(props) {
  const head = `https://storage.googleapis.com`
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.Subject>리뷰 속 작품</S.Subject>
        <S.WorkWrapper>
          <S.Art src={`${head}${props.data?.fetchBoard.art.thumbnail}`} />
        </S.WorkWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Category>{props.data?.fetchBoard.art.tag1}</S.Category>
        <S.Title>{props.data?.fetchBoard.art.title}</S.Title>
        <S.ArtistInfo>
          <S.Artist>작가</S.Artist>
          <S.ArtistName>{props.data?.fetchBoard?.art.user.name}</S.ArtistName>
        </S.ArtistInfo>
        <S.ArtContent>{props.data?.fetchBoard.art.description}</S.ArtContent>
      </S.RightWrapper>
    </S.Wrapper>
  )
}
