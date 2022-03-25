import styled from '@emotion/styled'

export const Section1Wrapper = styled.div`
  width: 120rem;
  height: 100vh;
  padding-top: 23rem;
  padding-left: 23.125rem;
  padding-right: 3.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  color: #fff;
`

export const Section1TitleBox = styled.div`
  width: 30.875rem;
  height: 20.688rem;
  display: flex;
  flex-direction: column;
`

export const Section1Title = styled.span`
  height: 5.438rem;
  font-size: 4.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.39;
  letter-spacing: -2.52px;
  text-align: left;
`

export const Section1SubTitle = styled.span`
  margin-top: 1.125rem;
  font-family: Gotham;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
`

export const Section1ContentBox = styled.div`
  margin-top: 3.25rem;
  width: 28.813rem;
`

export const Section1Content = styled.span`
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: -0.63px;
  text-align: left;
`

export const Section1NextButtonBox = styled.div`
  width: 30.875rem;
  height: 20.688rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
export const Section1NextButtonTitle = styled.span`
  height: 5.438rem;
  opacity: 0.3;
  font-size: 4.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.39;
  letter-spacing: -2.52px;
  text-align: left;
`

export const Section1NextButtonSubTitle = styled.span`
  margin-top: 1.125rem;
  opacity: 0.3;
  font-family: Gotham;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
`
