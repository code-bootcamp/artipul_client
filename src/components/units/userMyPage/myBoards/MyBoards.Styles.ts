import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  position: relative;
  > div {
    max-width: 1140px;
    width: 100%;
  }
`
export const Header = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
`
export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const MapDiv = styled.div`
  margin: 1rem;
  width: 40%;
  padding-top: 3rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: scale(1.02);
  }
`
export const MapElImage = styled.img`
  width: 100%;
  height: 78%;
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
