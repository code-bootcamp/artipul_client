import * as S from './ArtList.Styles'
import ArtWorkCard from './ArtWorkCard/ArtworkCard'
import ArtWorkSelectPicture from './ArtWorkSelect/ArtWorkSelectPicture'

export default function ArtListPresenter(props) {
  return (
    <>
      <S.ArtListWrapper>
        <S.ArtListTop>
          <S.ArtListTopTitle>STORE</S.ArtListTopTitle>
          <S.ArtListTopSubTitle>
            미래의 작가를 꿈꾸며
            <br /> 가치있는 작품을 찾습니다.
          </S.ArtListTopSubTitle>
        </S.ArtListTop>
        <S.ArtListCategory>
          <S.ArtListCategoryTop>
            <S.ArtListCategoryTopButton
              id="회화"
              artCategory={props.artCategory}
              onClick={props.onClickArtCategory}
            >
              회화
            </S.ArtListCategoryTopButton>
            <div
              style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: '#aaa'
              }}
            ></div>
            <S.ArtListCategoryTopButton
              id="조각"
              artCategory={props.artCategory}
              onClick={props.onClickArtCategory}
            >
              조각
            </S.ArtListCategoryTopButton>
            <div
              style={{
                width: '0.5rem',
                height: '0.5rem',
                backgroundColor: '#aaa'
              }}
            ></div>
            <S.ArtListCategoryTopButton
              id="기타"
              artCategory={props.artCategory}
              onClick={props.onClickArtCategory}
            >
              기타
            </S.ArtListCategoryTopButton>
          </S.ArtListCategoryTop>
          <S.ArtListCategorySelectBox>
            <ArtWorkSelectPicture />
          </S.ArtListCategorySelectBox>
        </S.ArtListCategory>
        <S.ArtListContent>
          {props.data.map((el, index) => (
            <ArtWorkCard key={index} el={el} index={index}></ArtWorkCard>
          ))}
        </S.ArtListContent>
        <S.ArtListButtonBox>
          <S.MoreButton onClick={props.onClickMoreButton}>MORE ⬇️</S.MoreButton>
        </S.ArtListButtonBox>
      </S.ArtListWrapper>
    </>
  )
}
