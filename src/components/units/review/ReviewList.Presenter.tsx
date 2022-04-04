import FooterContainer from '../../commons/layout/footer/Footer.Container'
import * as S from './ReviewList.Styles'

export default function ReviewListPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.TopInfo>
          <S.TopTitle>Review</S.TopTitle>
          <S.PageInfo>
            가치있는 작품을 마주한
            <br />
            당신의 후기를 기다립니다.
          </S.PageInfo>
        </S.TopInfo>
        <S.ButtonWrapper>
          <S.ButtonInfo>
            아티풀에서 작가와 마주한 후기가 고객분들을 기다리고 있습니다.
          </S.ButtonInfo>
          <S.WriteButton onClick={props.onClickReviewNew}>
            후기 작성하기
          </S.WriteButton>
        </S.ButtonWrapper>
        <S.ListWrapper>
          {props.data?.map((el) => (
            <S.ReviewCard key={el.id} id={el.id} onClick={props.onClickDetail}>
              <S.ThumbnailWrapper>
                <S.ReviewThumbnail
                  img={`https://storage.googleapis.com${el.thumbnail}`}
                />
              </S.ThumbnailWrapper>
              <S.ReviewCardTitle>{el.title}</S.ReviewCardTitle>
              <S.ReviewCardNickName>{el.user.nickname}</S.ReviewCardNickName>
            </S.ReviewCard>
          ))}
        </S.ListWrapper>
        {props.page + 10 <= props.data?.length && (
          <S.MoreButtonWrapper onClick={props.onClickMoreButton}>
            <S.MoreButton>More Button ⬇️</S.MoreButton>
          </S.MoreButtonWrapper>
        )}
      </S.Wrapper>
      <FooterContainer />
    </>
  )
}
