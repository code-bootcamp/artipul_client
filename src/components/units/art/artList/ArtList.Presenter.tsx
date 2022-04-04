import FooterContainer from '../../../commons/layout/footer/Footer.Container'
import * as S from './ArtList.Styles'
import ArtWorkCard from './ArtWorkCard/ArtworkCard'
import ArtWorkSelectPicture from './ArtWorkSelect/ArtWorkSelectPicture'
import ArtWorkSelectPiece from './ArtWorkSelect/ArtWorkSelectPiece'

export default function ArtListPresenter(props) {
  console.log(props.fetchArts)
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
              artCategory={props.artCategory[0]}
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
              id="조소"
              artCategory={props.artCategory[0]}
              onClick={props.onClickArtCategory}
            >
              조소
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
              artCategory={props.artCategory[0]}
              onClick={props.onClickArtCategory}
            >
              기타
            </S.ArtListCategoryTopButton>
          </S.ArtListCategoryTop>
          <S.ArtListCategorySelectBox>
            {props.artCategory[0] === '회화' && (
              <ArtWorkSelectPicture
                onChangeSelect1={props.onChangeSelect1}
                onChangeSelect2={props.onChangeSelect2}
                onChangeSelect3={props.onChangeSelect3}
                artCategory={props.artCategory}
              />
            )}
            {props.artCategory[0] === '조소' && (
              <ArtWorkSelectPiece
                onChangeSelect1={props.onChangeSelect1}
                onChangeSelect2={props.onChangeSelect2}
                onChangeSelect3={props.onChangeSelect3}
                artCategory={props.artCategory}
              />
            )}
          </S.ArtListCategorySelectBox>
        </S.ArtListCategory>
        <S.ArtListContent>
          {props.data?.map((el, index) => (
            <ArtWorkCard
              key={index}
              el={el}
              index={index}
              onClickArtWorkCard={props.onClickArtWorkCard}
              onClickLike={props.onClickLike}
              is_artist={props.is_artist}
              likeData={props.likeData}
            />
          ))}
        </S.ArtListContent>
        {props.page + 9 <= props.data?.length && (
          <S.ArtListButtonBox>
            <S.MoreButton onClick={props.onClickMoreButton}>
              MORE ⬇️
            </S.MoreButton>
          </S.ArtListButtonBox>
        )}

        <FooterContainer />
      </S.ArtListWrapper>
    </>
  )
}
