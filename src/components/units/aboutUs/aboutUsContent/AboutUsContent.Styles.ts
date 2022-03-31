import styled from '@emotion/styled'

export const AboutUsContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const AboutUsContentTitle = styled.div`
  width: 44.5rem;
  font-family: Pretendard;
  font-size: 3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.68px;
  text-align: left;
  color: #111;
  margin-top: 8.75rem;
  margin-left: 13.75rem;
`

export const AboutUsContentContentBox = styled.div`
  width: 100%;
  height: 43.75rem;
  margin-top: 7.5rem;
  display: flex;
`

export const AboutUsContentLeftContent = styled.div`
  width: 47%;
  height: 100%;
  padding-left: 13.75rem;
  padding-right: 12.5rem;
`

export const AboutUsContentRightContent = styled.div`
  width: 53%;
  height: 100%;
  background-image: ${(props) =>
    props.floor === '1F'
      ? 'url("/aboutUs1.png")'
      : props.floor === '2F'
      ? 'url("/aboutUs2.png")'
      : 'url("/aboutUs3.png")'};
`

export const AboutUsContentLeftTextBox = styled.div`
  width: 100%;
  height: 8.688rem;
  margin-top: 5rem;
  opacity: ${(props) => (props.floor === props.id ? '1' : '0.35')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

export const AboutUsContentLeftTitleBox = styled.div`
  display: flex;
`

export const AboutUsContentLeftTitleFloor = styled.div`
  font-family: Gotham;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  margin-right: 2.5rem;
`

export const AboutUsContentLeftTitle = styled.div`
  font-family: Gotham;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
`
export const AboutUsContentLeftText = styled.div`
  margin-top: 2.25rem;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.63px;
  text-align: left;
`

export const AboutUsContentBottomTitle = styled.div`
  font-family: Pretendard;
  font-size: 3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.68px;
  text-align: left;
  margin-top: 15rem;
  margin-left: 13.75rem;
`

export const AboutUsContentBottomCategory = styled.div`
  margin-left: 13.75rem;
  display: flex;
  margin-top: 5rem;
  height: 2.875rem;
  width: 21rem;
  justify-content: space-between;
  align-items: center;
`
export const AboutUsContentBottomCategoryButton = styled.div`
  font-family: Pretendard;
  font-size: 2.375rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -1.33px;
  :hover {
    color: #f64612;
  }
  color: ${(props) => (props.map === props.id ? '#f64612' : '#aaa')};
`

export const AboutUsContentBottomImage = styled.div`
  width: 92.5rem;
  height: 37.5rem;
  margin-left: 13.75rem;
  background-image: ${(props) =>
    props.map === '1' ? 'url("/aboutUsMap1.png")' : 'url("/aboutUsMap2.png")'};
  background-repeat: no-repeat;
  background-position: center center;
`

export const AboutUsContentAddArtBox = styled.div`
  width: 92.5rem;
  height: 9.063rem;
  margin-left: 13.75rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const AboutUsContentAddArtText = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.63px;
  text-align: left;
  color: #333;
  margin-right: 2.5rem;
`

export const AboutUsContentAddArtButton = styled.div`
  width: 9.5rem;
  height: 2.813rem;
  background-color: #f64612;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.56px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
