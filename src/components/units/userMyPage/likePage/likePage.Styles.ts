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
  margin: 0.5rem;
  width: 30%;
  padding-top: 4rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`
export const MapElImage = styled.img`
  width: 80%;
  height: 78%;
`
export const MapElImageDiv = styled.div`
  width: 100%;
  height: 78%;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MapDeadLine = styled.div`
  width: 100%;
  background-color: #f64612;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.8rem 0px;
`
export const MapElTitle = styled.div`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 700;
`
export const MapElCategory = styled.div`
  width: 100%;
  padding-top: 0.3rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #aaaaaa;
`
export const MapElArtist = styled.div`
  width: 100%;
  font-size: 1rem;
`
