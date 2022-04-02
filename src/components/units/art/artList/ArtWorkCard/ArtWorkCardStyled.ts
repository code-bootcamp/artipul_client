import styled from '@emotion/styled'

export const ArtWorkCardWrapper = styled.div`
  width: 26.875rem;
  height: 45.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover .image {
    transform: scale(1.02);
  }
  &:hover article {
    opacity: 1;
  }
`
export const ArtWorkLikeButton = styled.article`
  position: relative;
  opacity: 0;
  bottom: 12rem;
  left: 10.7rem;
  width: 2.875rem;
  height: 2.875rem;
  background-color: #fff;
  border-radius: 1.4rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.value ? 'red' : 'black')};
  :hover {
    color: red;
  }
`

export const ArtWorkImageBox = styled.div`
  width: 26.875rem;
  height: 29.688rem;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArtWorkImage = styled.div`
  position: absolute;
  width: 22rem;
  height: 22rem;
  background-image: ${(props) =>
    `url(https://storage.googleapis.com${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const ArtWorkCardTime = styled.div`
  width: 26.875rem;
  height: 2.813rem;
  background-color: #f64612;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 1.5rem;
`

export const ArtWorkCardContent = styled.div`
  width: 26.875rem;
  height: 6.875rem;
`

export const ArtWorkCardSubTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaa;
  margin-bottom: 0.625rem;
`

export const ArtWorkCardTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.563rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0.625rem;
`

export const ArtWorkCardContentBottom = styled.div`
  width: 100%;
  height: 2.325rem;
  display: flex;
  flex-direction: row;
  border-bottom: 0.063rem solid #ddd;
`

export const ArtWorkCardContentBottomTitle = styled.div`
  width: auto;
  height: auto;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right: 0.5rem;
`

export const ArtWorkCardContentBottomSubTitle = styled.div`
  width: auto;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right: 1.125rem;
`

export const ArtWorkCardPriceBox = styled.div`
  width: 100%;
  height: 3.563rem;
  padding-top: 1.25rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
`

export const ArtWorkCardPriceSubBox = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.85rem;
`

export const ArtWorkCardNowPriceTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #f64612;
  margin-right: 1rem;
`

export const ArtWorkCardNowPrice = styled.div`
  font-family: Pretendard;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  /* margin-right: 3.75rem; */
`

export const ArtWorkCardStartPriceTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right: 1rem;
`

export const ArtWorkCardStartPrice = styled.div`
  font-family: Pretendard;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`
