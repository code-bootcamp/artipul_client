import * as S from './ArtWorkSelect.style'

export default function ArtWorkSelectPicture(props) {
  return (
    <S.ArtWorkSelectPictureWrapper>
      <S.Select2Word
        artCategory={props.artCategory[1]}
        onChange={props.onChangeSelect1}
        index={1}
      >
        <option value="">테마</option>
        <option value="인물">인물</option>
        <option value="풍경">풍경</option>
        <option value="정물">정물</option>
        <option value="동물">동물</option>
        <option value="상상">상상</option>
        <option value="추상">추상</option>
      </S.Select2Word>
      {props.artCategory[1] && (
        <>
          <S.Select3Word
            artCategory={props.artCategory[2]}
            onChange={props.onChangeSelect2}
            index={2}
          >
            <option value="">사이즈</option>
            <option value="소">소</option>
            <option value="중">중</option>
            <option value="대">대</option>
          </S.Select3Word>
          {props.artCategory[2] && (
            <S.Select4Word
              artCategory={props.artCategory[3]}
              onChange={props.onChangeSelect3}
              index={3}
            >
              <option value="">설치형태</option>
              <option value="정방향">정방향</option>
              <option value="가로형">가로형</option>
              <option value="세로형">세로형</option>
            </S.Select4Word>
          )}
        </>
      )}
    </S.ArtWorkSelectPictureWrapper>
  )
}
