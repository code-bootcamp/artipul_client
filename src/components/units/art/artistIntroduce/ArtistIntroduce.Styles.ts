import styled from '@emotion/styled'

export const ViewerWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 4rem;
`
export const Header = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
  padding: 4rem 0rem 2rem 2.5rem;
`
export const Header2 = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
  padding: 4rem 0rem 0rem 2.5rem;
`
export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0rem 2rem 2.5rem;
`
export const MapDiv = styled.div`
  margin: 0.5rem;
  width: 30%;
  padding-top: 3rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.02);
  }
`
export const MapImageDiv = styled.div`
  width: 80%;
  height: 78%;
  background-color: antiquewhite;
`
export const MapElImage = styled.img`
  width: 100%;
  height: 100%;
`
export const MapElTitle = styled.div`
  width: 100%;
  padding: 1rem 0px 0.1rem;
  font-size: 1.25rem;
  font-weight: 700;
`
export const MapElCreatedAt = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #aaaaaa;
`
