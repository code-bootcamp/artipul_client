import * as S from './ArtWorkSelect.style'

export default function ArtWorkSelectPicture() {
  return (
    <S.ArtWorkSelectPictureWrapper>
      <S.Select2Word>
        <option value={0} selected={true}>
          테마
        </option>

        <option value={110}>인물</option>

        <option value={111}>풍경</option>

        <option value={112}>정물</option>

        <option value={113}>동물</option>

        <option value={114}>상상</option>

        <option value={115}>추상</option>
      </S.Select2Word>

      <S.Select3Word>
        <option value={0} selected={true}>
          사이즈
        </option>

        <option value={120}>소</option>

        <option value={121}>중</option>

        <option value={122}>대</option>
      </S.Select3Word>

      <S.Select4Word>
        <option value={0} selected={true}>
          설치형태
        </option>

        <option value={130}>정방향</option>

        <option value={131}>가로형</option>

        <option value={132}>세로형</option>
      </S.Select4Word>

      <S.Select4Word>
        <option value={0} selected={true}>
          가격대
        </option>

        <option value={120}>0~30만원</option>

        <option value={121}>30만원~70만원</option>

        <option value={122}>70만원~100만원</option>

        <option value={122}>100만원~</option>
      </S.Select4Word>
    </S.ArtWorkSelectPictureWrapper>
  )
}
