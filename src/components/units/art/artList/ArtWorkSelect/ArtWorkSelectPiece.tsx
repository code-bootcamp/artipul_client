import * as S from './ArtWorkSelect.style'

export default function ArtWorkSelectPicture(props) {
  return (
    <S.ArtWorkSelectPictureWrapper>
      <S.Select2Word
        artCategory={props.artCategory[1]}
        onChange={props.onChangeSelect1}
        index={1}
      >
        <option value="">종류</option>
        <option value="조각">조각</option>
        <option value="소조">소조</option>
      </S.Select2Word>
      {props.artCategory[1] === '조각' && (
        <>
          <S.Select4Word
            artCategory={props.artCategory[2]}
            onChange={props.onChangeSelect2}
            index={2}
          >
            <option value="">조각 종류</option>
            <option value="목조">목조</option>
            <option value="석조">석조</option>
            <option value="금속조">금속조</option>
          </S.Select4Word>
        </>
      )}
      {props.artCategory[1] === '소조' && (
        <>
          <S.Select4Word
            artCategory={props.artCategory[2]}
            onChange={props.onChangeSelect2}
            index={2}
          >
            <option value="">소조 종류</option>
            <option value="찰흙 소조">찰흙 소조</option>
            <option value="시멘트">시멘트</option>
            <option value="블론즈">블론즈</option>
          </S.Select4Word>
        </>
      )}
    </S.ArtWorkSelectPictureWrapper>
  )
}
