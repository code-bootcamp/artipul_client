import styled from '@emotion/styled'

export const ArtListWrapper = styled.div`
  width: 120rem;
  height: 215.25rem;
  padding-top: 4.937rem;
  padding-left: 16.25rem;
  padding-right: 16.25rem;
`

export const ArtListTop = styled.div`
  width: 25rem;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
`

export const ArtListTopTitle = styled.div`
  width: 5.063rem;
  height: 1.5rem;
  font-family: Gotham;
  font-size: 1.5rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.96px;
  text-align: left;
  color: #f64612;
  margin-bottom: 1.5rem;
`

export const ArtListTopSubTitle = styled.div`
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
export const ArtListCategory = styled.div`
  width: 28.064rem;
  height: 6.5rem;
  margin-top: 5.5rem;
`

export const ArtListCategoryTop = styled.div`
  height: 2.125rem;
  width: 14.564rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ArtListCategoryTopButton = styled.div`
  width: 3.063rem;
  height: 2.125rem;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => (props.id === props.artCategory ? '#f64612' : '#aaa')};
  :hover {
    color: #f64612;
  }
`

export const ArtListCategorySelectBox = styled.div`
  width: auto;
  height: 2.357rem;
  margin-top: 2rem;
`

export const ArtListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: scroll;
  margin-top: 1.625rem;
`
export const ArtListButtonBox = styled.div`
  margin-top: 6rem;
  width: 100%;
  height: 14.75rem;
  display: flex;
  justify-content: center;
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
