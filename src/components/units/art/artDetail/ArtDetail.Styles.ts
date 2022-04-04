import { Modal } from 'antd'
import styled from '@emotion/styled'

export const ArtDetailModal = styled(Modal)`
  .ant-btn-primary {
    background-color: #f64612;
    border: 1px solid #f64612;
  }
  .ant-btn-default {
    :hover {
      color: #f64612;
      border: 1px solid #f64612;
    }
  }
`

export const ArtDetailWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2rem;
`

export const ArtDetailTop = styled.div`
  width: 100%;
  height: 42.5rem;
  margin-top: 6.813rem;
  display: flex;
`

export const ArtDetaiToplLeft = styled.div`
  height: 100%;
  width: 70rem;
  padding-left: 8.125rem;
  padding-right: 6.875rem;
`

export const ArtDetailImageBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ArtDetailImage = styled.div`
  width: 28rem;
  height: 28rem;
  background-image: ${(props) =>
    `url(https://storage.googleapis.com${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const ArtDetailTopRight = styled.div`
  height: 100%;
  width: 32.125rem;
  padding-left: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ArtDetailTag = styled.div`
  margin-bottom: 0.625rem;
  height: 2.063rem;
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #aaa;
`

export const ArtDetailTitle = styled.div`
  height: 2.063rem;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.98px;
  text-align: left;
  color: #111;
  margin-bottom: 1.25rem;
`

export const ArtDetailSubBox = styled.div`
  display: flex;
  height: 3.25rem;
  border-bottom: 2px solid #eee;
`

export const ArtDetailTopSubBox = styled.div`
  margin-right: 1.125rem;
  display: flex;
  height: 1.25rem;
`

export const ArtDetailSubTitle = styled.div`
  height: 1.25rem;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #333;
  margin-right: 0.5rem;
`

export const ArtDetailArtist = styled.div`
  height: 1.25rem;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #333;
`

export const ArtDetailSize = styled.div`
  height: 1.25rem;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #333;
`

export const ArtDetailPriceTimeBox = styled.div`
  width: 100%;
  height: 5.75rem;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #111;
`

export const ArtDetailPriceBox = styled.div`
  width: 50%;
  height: 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ArtDetailStartPriceBox = styled.div`
  display: flex;
`

export const ArtDetailPriceTitle = styled.div`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  margin-right: 0.5rem;
`

export const ArtDetailInstanceBidBox = styled.div`
  display: flex;
`

export const ArtDetailStartPrice = styled.div`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #333;
`

export const ArtDetailPriceInstanceBid = styled.div`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #f64612;
`

export const ArtDetailTimeBox = styled.div`
  width: 50%;
  height: 5.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const ArtDetailTimeTitle = styled.div`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  margin-right: 0.5rem;
`

export const ArtDetailTime = styled.div`
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #f64612;
`

export const ArtDetailNowPriceBox = styled.div`
  height: 6.625rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ArtDetailNowPriceTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.63px;
  text-align: left;
  color: #111;
`

export const ArtDetailNowPrice = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.12px;
  text-align: left;
  color: #111;
`

export const ArtDetailButtonBox = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ArtDetailAuctionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 100%;
  background-color: #f64612;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  color: #fff;
  cursor: pointer;
`

export const ArtDetailBuyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 100%;
  background-color: #fff;
  font-family: Pretendard;
  font-size: 1.2em;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  border: 3px solid #f64612;
  color: #f64612;
  cursor: pointer;
`

export const ArtDetailBottom = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5rem;
  padding-left: 8.123rem;
  padding-right: 8.125rem;
  margin-bottom: 5rem;
`

export const ArtDetailDescriptionBox = styled.div`
  width: 100%;
  height: auto;
  border-top: 2px solid #eee;
  display: flex;
  flex-direction: column;
`

export const ArtDetailDescriptionTitle = styled.div`
  margin-top: 2.875rem;
  font-family: Pretendard;
  font-size: 2.875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.61px;
  text-align: left;
  color: #111;
`

export const ArtDetailDescription = styled.div`
  margin-top: 2rem;
  width: 50%;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.53px;
  text-align: left;
  color: #333;
  white-space: pre-line;
`

export const ArtDetailDescriptionImageBox = styled.div`
  margin-top: 2rem;
  width: 50%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`

export const ArtDetailDescriptionImage = styled.div`
  width: 30rem;
  height: 30rem;
  background-image: ${(props) =>
    `url(https://storage.googleapis.com${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

export const ArtDetailTopButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ArtWorkArtistButton = styled.div`
  width: 2.875rem;
  height: 2.875rem;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 1.4rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
  color: black;
  :hover {
    color: #f64612;
  }
  & svg {
    width: 1.295rem;
    height: 1.295rem;
  }
`

export const ArtWorkLikeButton = styled.div`
  width: 2.875rem;
  height: 2.875rem;
  background-color: #fff;
  border: 1px solid #aaa;
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
  & svg {
    width: 1.295rem;
    height: 1.295rem;
  }
`
