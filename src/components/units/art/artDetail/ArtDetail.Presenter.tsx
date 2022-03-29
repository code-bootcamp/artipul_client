import * as S from './ArtDetail.Styles'

export default function ArtDetailPresenter(props) {
  return (
    <>
      <S.ArtDetailWrapper>
        <S.ArtDetailTop>
          <S.ArtDetaiToplLeft>
            <S.ArtDetailImageBox>
              <S.ArtDetailImage image={props.data?.thumbnail} />
            </S.ArtDetailImageBox>
          </S.ArtDetaiToplLeft>
          <S.ArtDetailTopRight>
            <S.ArtDetailTag>{props.data?.tag1}</S.ArtDetailTag>
            <S.ArtDetailTitle>{props.data?.title}</S.ArtDetailTitle>
            <S.ArtDetailSubBox>
              <S.ArtDetailTopSubBox>
                <S.ArtDetailSubTitle>작가</S.ArtDetailSubTitle>
                <S.ArtDetailArtist>
                  {props.data?.user.nickname}
                </S.ArtDetailArtist>
              </S.ArtDetailTopSubBox>
            </S.ArtDetailSubBox>
            <S.ArtDetailPriceTimeBox>
              <S.ArtDetailPriceBox>
                <S.ArtDetailStartPriceBox>
                  <S.ArtDetailPriceTitle>경매시작가</S.ArtDetailPriceTitle>
                  <S.ArtDetailStartPrice>
                    {props.data?.start_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </S.ArtDetailStartPrice>
                </S.ArtDetailStartPriceBox>

                <S.ArtDetailInstanceBidBox>
                  <S.ArtDetailPriceTitle>즉시구매가</S.ArtDetailPriceTitle>
                  <S.ArtDetailPriceInstanceBid>
                    {props.data?.instant_bid
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </S.ArtDetailPriceInstanceBid>
                </S.ArtDetailInstanceBidBox>
              </S.ArtDetailPriceBox>
              <S.ArtDetailTimeBox>
                <S.ArtDetailTimeTitle>경매마감일</S.ArtDetailTimeTitle>
                <S.ArtDetailTime>{props.data?.deadline}까지</S.ArtDetailTime>
              </S.ArtDetailTimeBox>
            </S.ArtDetailPriceTimeBox>
            <S.ArtDetailNowPriceBox>
              <S.ArtDetailNowPriceTitle>현재입찰가</S.ArtDetailNowPriceTitle>
              <S.ArtDetailNowPrice>
                {props.data?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
              </S.ArtDetailNowPrice>
            </S.ArtDetailNowPriceBox>
            <S.ArtDetailButtonBox>
              <S.ArtDetailAuctionButton>입찰하기</S.ArtDetailAuctionButton>
              <S.ArtDetailBuyButton>즉시 구매하기</S.ArtDetailBuyButton>
            </S.ArtDetailButtonBox>
          </S.ArtDetailTopRight>
        </S.ArtDetailTop>
        <S.ArtDetailBottom>
          <S.ArtDetailDescriptionBox>
            <S.ArtDetailDescriptionTitle>
              {props.data?.title}
            </S.ArtDetailDescriptionTitle>
            <S.ArtDetailDescription>
              {props.data?.description}
            </S.ArtDetailDescription>
            <S.ArtDetailDescriptionImageBox>
              <S.ArtDetailDescriptionImage image={props.data?.thumbnail} />
            </S.ArtDetailDescriptionImageBox>
          </S.ArtDetailDescriptionBox>
        </S.ArtDetailBottom>
      </S.ArtDetailWrapper>
    </>
  )
}
