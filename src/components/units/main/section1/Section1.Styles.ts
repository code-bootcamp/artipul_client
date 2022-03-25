import styled from '@emotion/styled'

export const Section1Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 370px;
  padding-left: 370px;
  padding-right: 156px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  color: #fff;
`

export const Section1TitleBox = styled.div`
  height: 329px;
  display: flex;
  flex-direction: column;
`

export const Section1Title = styled.span`
  height: 85px;
  font-size: 72px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.39;
  letter-spacing: -2.52px;
  text-align: left;
`

export const Section1SubTitle = styled.span`
  margin-top: 12px;
  font-family: Gotham;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
`

export const Section1ContentBox = styled.div`
  margin-top: 48px;
  width: 461px;
`

export const Section1Content = styled.span`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: -0.63px;
  text-align: left;
`

export const Section1NextButtonBox = styled.div`
  width: 550px;
  height: 329px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const Section1NextButtonTitle = styled.span`
  height: 85px;
  opacity: 0.3;
  font-size: 72px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.39;
  letter-spacing: -2.52px;
  text-align: left;
`

export const Section1NextButtonSubTitle = styled.span`
  margin-top: 12px;
  opacity: 0.3;
  font-family: Gotham;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
`
