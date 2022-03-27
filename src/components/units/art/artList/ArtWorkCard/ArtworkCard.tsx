import * as S from './ArtWorkCardStyled'
import { FaRegHeart } from 'react-icons/fa'

export default function ArtWorkCard(props) {
  return (
    <S.ArtWorkCardWrapper>
      <S.ArtWorkImageBox>
        <S.ArtWorkLikeButton>
          <FaRegHeart />
        </S.ArtWorkLikeButton>
        <S.ArtWorkImage image={props.el.image} />
      </S.ArtWorkImageBox>
      <S.ArtWorkCardTime>{`입찰중 | 5일 00:22:14 까지`}</S.ArtWorkCardTime>
      <S.ArtWorkCardContent>
        <S.ArtWorkCardSubTitle>{props.el.thumbnail}</S.ArtWorkCardSubTitle>
        <S.ArtWorkCardTitle>{props.el.title}</S.ArtWorkCardTitle>
        <S.ArtWorkCardContentBottom>
          <S.ArtWorkCardContentBottomTitle>
            작가
          </S.ArtWorkCardContentBottomTitle>
          <S.ArtWorkCardContentBottomSubTitle>
            {props.el.user}
          </S.ArtWorkCardContentBottomSubTitle>
          <S.ArtWorkCardContentBottomTitle>
            작품사이즈
          </S.ArtWorkCardContentBottomTitle>
          <S.ArtWorkCardContentBottomSubTitle>
            {props.el.size}
          </S.ArtWorkCardContentBottomSubTitle>
        </S.ArtWorkCardContentBottom>
      </S.ArtWorkCardContent>
      <S.ArtWorkCardPriceBox>
        <S.ArtWorkCardPriceTitle>현재입찰가</S.ArtWorkCardPriceTitle>
        <S.ArtWorkCardPrice>
          {props.el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </S.ArtWorkCardPrice>
        <S.ArtWorkCardPriceSubBox>
          <S.ArtWorkCardNowPriceTitle>즉시구매가</S.ArtWorkCardNowPriceTitle>
          <S.ArtWorkCardNowPrice>
            {props.el.instant_bid
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </S.ArtWorkCardNowPrice>
          <S.ArtWorkCardStartPriceTitle>
            경매시작가
          </S.ArtWorkCardStartPriceTitle>
          <S.ArtWorkCardStartPrice>
            {props.el.start_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </S.ArtWorkCardStartPrice>
        </S.ArtWorkCardPriceSubBox>
      </S.ArtWorkCardPriceBox>
    </S.ArtWorkCardWrapper>
  )
}
