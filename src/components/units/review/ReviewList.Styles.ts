import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 4.937rem;
  padding-left: 16.25rem;
  padding-right: 16.25rem;
`

export const HeaderWrapper = styled.div``

export const TopInfo = styled.div`
  width: 25rem;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
`

export const TopTitle = styled.div`
  width: 9.438rem;
  height: 1.625rem;
  font-family: Gotham;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 3.25;
  letter-spacing: -0.84px;
  text-align: left;
  color: #f64612;
  margin-bottom: 2.125rem;
`

export const PageInfo = styled.div`
  width: 25rem;
  height: 6.375rem;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.4px;
  text-align: left;
  color: #111;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 9.063rem;
  background-color: #fafafa;
  margin-top: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonInfo = styled.div`
  width: auto;
  height: 1.313rem;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.63px;
  text-align: left;
  color: #333;
`

export const WriteButton = styled.div`
  width: 9.5rem;
  height: 2.813rem;
  margin: 0 0 0 2.5rem;
  padding: 0.875rem 2.125rem 0.75rem;
  background-color: #f64612;

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ReviewCard = styled.div`
  width: 49.5%;
  margin-top: 1%;
  margin-bottom: 5rem;
  padding: 1rem;
  box-shadow: 2px 6px 20px 3px rgba(0, 0, 0, 0.1);
  background-color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #aaa;
  padding: 1rem;
`

export const ReviewThumbnail = styled.div`
  width: 30rem;
  height: 23.75rem;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`

export const ReviewCardTitle = styled.div`
  width: 21.188rem;
  height: 2.063rem;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.98px;
  text-align: left;
  color: #111;

  margin-top: 1.688rem;
`

export const ReviewCardNickName = styled.div`
  margin-top: 1.125rem;

  width: 11rem;
  height: 1.5rem;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #aaa;
`

export const MoreButtonWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const MoreButton = styled.div`
  width: 15.5rem;
  height: 3.75rem;
  border: 1px solid #aaa;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`
